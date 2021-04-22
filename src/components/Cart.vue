<template>
    <div v-if="loading===false" style="background-color: white;width: 80%;margin-right: auto;margin-left: auto;margin-bottom: 20px;margin-top: 20px">
      <a-table :columns="columns" :data-source="dataSource"
               :scroll="{ x: 'calc(400px + 30%)', y: 330 }">
      <span slot="Image" slot-scope="Image">
        <a-card
          hoverable
          class="wrapper-card"
          style="width: 100px;border: none"
        >
          <img
            alt="example"
            :src="resolve_img_url(Image)"
            slot="extra"
            width="50px"
            style="object-fit: cover"
          />
        </a-card>
      </span>
        <a slot="Product" slot-scope="Product" style="color: green">{{Product}}</a>
        <span slot="Product"> Name</span>
        <span slot="Price" slot-scope="Price">{{formatMoney(Price)}}</span>
        <span slot="Quantity" slot-scope="Quantity,record">
        <div id="wrap-compute">
          <AButton style="font-size: 20px" @click="minus(record.key)">-</AButton>
          <div style="font-size: 20px;margin-left: 10px;margin-right: 10px">{{Quantity}}</div>
          <AButton style="font-size: 20px" @click="plus(record.key)">+</AButton>
        </div>
      </span>
        <span slot="Total" slot-scope="Total">{{formatMoney(Total)}}</span>
        <!--      <span slot="Delete" slot-scope="Delete,record">-->
        <!--        <AButton style="border: 1px solid red;color: red" @click="deleteRecord(record.key)">{{Delete}}</AButton>-->
        <!--      </span>-->
        <template slot="Delete" slot-scope="Delete, record">
          <a-popconfirm
            v-if="dataSource.length"
            title="Sure to delete?"
            @confirm="() => deleteRecord(record.key)"
          >
            <AButton style="border: 1px solid red;color: red">{{Delete}}</AButton>
          </a-popconfirm>
        </template>
      </a-table>
      <p style="font-size: 25px;color: green">Total: {{formatMoney(getTotal())}}</p>
      <AButton style="width: 150px;border-radius: 100px;margin-bottom: 10px;border: 1px solid green;color: green;font-size: 20px" @click="pay" :disabled="!isHaveProduct">Pay</AButton>
    </div>
</template>

<script>
import axios from "axios";
import MainLayouts from "../pages/layouts/MainLayouts";

const columns = [
  {
    dataIndex: 'Image',
    key: 'Image',
    slots: { title: 'Image' },
    scopedSlots: { customRender: 'Image' },
  },
  {
    dataIndex: 'Product',
    key: 'Product',
    slots: { title: 'Product' },
    scopedSlots: { customRender: 'Product' },
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: 'Price',
    scopedSlots: { customRender: 'Price' },
  },
  {
    title: 'Quantity',
    dataIndex: 'Quantity',
    key: 'Quantity',
    scopedSlots: { customRender: 'Quantity' },
  },
  {
    title: 'Total',
    key: 'Total',
    dataIndex: 'Total',
    scopedSlots: { customRender: 'Total' },
  },
  {
    title: 'Delete',
    key: 'Delete',
    dataIndex: 'Delete',
    scopedSlots: { customRender: 'Delete' },
  },
];

const dataSource = [];
export default {
  name: "CommonCart",
  components: {MainLayouts},
  data(){
    return {
      dataSource,
      columns,
      loading:true,
      isHaveProduct:true
    }
  },
  watch:{
    watchDataSource(){

    }
  },
  mounted() {
    this.getProductsInCart()
  },
  methods:{
    checkCart(){
      console.log(this.dataSource.length)
      if (this.dataSource.length > 0){
        this.isHaveProduct = true
      }
      return false
    },
    getProductsInCart(){
      let arr = this.convertStringToArray()
      try{
        this.dataSource = []
        for (let x of arr){
          axios
            .get("http://localhost:9889/book-controller/get-book-by-id?bookId="+x[0])
            .then(response => {
              let myData = response.data
              this.dataSource.push({
                key:myData.isbn,
                Product:myData.name,
                Price:myData.price-myData.price*myData.discount/100,
                Quantity:x[1],
                Total:x[1]*(myData.price-myData.price*myData.discount/100),
                Delete:'delete',
                Image:myData.imageBook
              })
            })
            .catch(error => console.log(error))
        }
      }catch (e){
        console.log(e)
      }finally {
        this.loading = false
      }
    },
    convertStringToArray(){
      let arr = JSON.parse(localStorage.getItem("listProduct"))
      return arr
    },
    resolve_img_url: function (path) {
      let images = require.context('../assets/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    },
    formatMoney(price){
      let formatter = new Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
      });
      return formatter.format(Number(price));
    },
    deleteRecord(key){
      console.log(key)
      let arr = this.convertStringToArray()
      let newArr = arr.filter(x => x[0] !== key)
      localStorage.setItem("listProduct",JSON.stringify(newArr))
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    plus(key){
      this.dataSource.forEach(item => {
        if(item.key === key) {
          item.Quantity += 1
          item.Total += item.Price
          let arr = this.convertStringToArray()
          arr.map(ele => {
            if (ele[0] === key){
              ele[1] = item.Quantity
            }
          })
          localStorage.setItem("listProduct",JSON.stringify(arr))
        }
      })
    },
    minus(key){
      this.dataSource.forEach(item => {
        if(item.key === key) {
          item.Quantity -= 1
          item.Total -= item.Price
          if (item.Quantity === 0){
            this.deleteRecord(key)
          }else{
            let arr = this.convertStringToArray()
            arr.map(ele => {
              if (ele[0] === key){
                ele[1] = item.Quantity
              }
            })
            localStorage.setItem("listProduct",JSON.stringify(arr))
          }
        }
      })
    },
    getTotal(){
      let result = 0;
      this.dataSource.forEach(item => result+=item.Total)
      return result
    },
    openError(type) {
      this.$notification[type]({
        message: 'Notification Status',
        description:
          'Cart is not available',
      });
    },
    pay(){
      console.log('12432')
      if (this.dataSource.length > 0){
        this.$router.push({path: '/checkouts'})
      }else{
        this.openError('error')
      }
    }
  }
}
</script>

<style scoped>
#wrap-compute{
  display: flex;
  justify-content: center;
  width: 40%;
}
</style>
