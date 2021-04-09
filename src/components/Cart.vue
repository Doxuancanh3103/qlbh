<template>
  <div v-if="loading===false" style="background-color: white;width: 80%;margin-right: auto;margin-left: auto;margin-bottom: 20px;margin-top: 20px">
    <a-table :columns="columns" :data-source="data">
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
      <span slot="Total" slot-scope="Total">{{formatMoney(Total)}}</span>
      <span slot="Delete" slot-scope="Delete">
        <AButton style="border: 1px solid red;color: red">{{Delete}}</AButton>
      </span>
    </a-table>
    <p style="font-size: 25px;color: green">Total: {{formatMoney(getTotal().Total)}}</p>
  </div>
</template>

<script>
import axios from "axios";

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

const data = [];
export default {
  name: "Cart",
  data(){
    return {
      data,
      columns,
      loading:true
    }
  },
  mounted() {
    this.getProductsInCart()
  },
  methods:{
    getTotal(){
      return this.data.length > 0 ? this.data.reduce((a,b) => {
        return {
          Total: a.Total + b.Total
        }
      }) : {
        Total:0
      }
    },
    getProductsInCart(){
      let arr = this.convertStringToArray()
      try{
        this.data = []
        for (let x of arr){
          axios
            .get("http://localhost:9889/book-controller/get-book-by-id?bookId="+x[0])
            .then(response => {
              let myData = response.data
              this.data.push({
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
    }
  }
}
</script>

<style scoped>

</style>
