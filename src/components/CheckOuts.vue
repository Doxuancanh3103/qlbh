<template>
  <div style="width: 100%;background-color: white">
  <div id="wrapper-checkout">
    <div id="info">
      <div id="main">
        <div id="info-header">
          <h2 style="text-align: left">XUAN CANH BOOK</h2>
          <ul style="display: flex;justify-content: left;list-style-type: none">
            <li style="color: #D4D4D4"> < </li>
            <li>
              <router-link to="/cart">Cart</router-link>
            </li>
          </ul>
        </div>

        <div id="form">
          <h2>Shipment details</h2>
          <p>Do you already have an account?<a> Log in</a></p>
          <a-input placeholder="Fullname" v-model="fullname"></a-input>
          <div style="display: flex;justify-content: space-between;flex-wrap:wrap;margin-top: 10px">
            <p style="width: 65%" ><a-input placeholder="Email" v-model="email"></a-input></p>
            <p style="width: 30%"><a-input placeholder="Phone number" v-model="phoneNumber"></a-input></p>
            <div style="display: flex;justify-content: flex-end;width: 100%">
              <p v-if="showEmptyPhone" style="color: red;text-align: left">Phone number cannot be empty</p>
              <p v-if="showFormatPhone" style="color: red">Invalid phone number (length 8-11 characters, contains no special characters and spaces)</p>
            </div>
          </div>
          <a-input placeholder="Address" style="margin-top: 10px" v-model="address"></a-input>
          <div style="margin-top: 10px;display: flex;justify-content: space-between">
            <a-select default-value="Chọn tỉnh / thành" style="width: 45%" @change="handleChangeCity">
              <a-select-option value="null">  Chọn tỉnh / thành </a-select-option>
              <a-select-option value="Hồ Chí Minh">Hồ Chí Minh</a-select-option>
              <a-select-option value="Hà Nội">Hà Nội</a-select-option>
              <a-select-option value="Đà Nẵng">Đà Nẵng</a-select-option>
              <a-select-option value="An Giang">An Giang</a-select-option>
              <a-select-option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</a-select-option>
              <a-select-option value="Bắc Giang">Bắc Giang</a-select-option>
              <a-select-option value="Bắc Kạn">Bắc Kạn</a-select-option>
              <a-select-option value="Bạc Liêu">Bạc Liêu</a-select-option>
              <a-select-option value="Bắc Ninh">Bắc Ninh</a-select-option>
              <a-select-option value="Bến Tre">Bến Tre</a-select-option>
              <a-select-option value="Bình Định">Bình Định</a-select-option>
              <a-select-option value="Bình Dương">Bình Dương</a-select-option>
              <a-select-option value="Bình Phước">Bình Phước</a-select-option>
              <a-select-option value="Bình Thuận">Bình Thuận</a-select-option>
              <a-select-option value="Cà Mau">Cà Mau</a-select-option>
              <a-select-option value="Cần Thơ">Cần Thơ</a-select-option>
              <a-select-option value="Cao Bằng">Cao Bằng</a-select-option>
              <a-select-option value="Đắk Lắk">Đắk Lắk</a-select-option>
              <a-select-option value="Đắk Nông">Đắk Nông</a-select-option>
              <a-select-option value="Điện Biên">Điện Biên</a-select-option>
              <a-select-option value="Đồng Nai">Đồng Nai</a-select-option>
              <a-select-option value="Đồng Tháp">Đồng Tháp</a-select-option>
              <a-select-option value="Gia Lai">Gia Lai</a-select-option>
              <a-select-option value="Hà Giang">Hà Giang</a-select-option>
              <a-select-option value="Hà Nam">Hà Nam</a-select-option>
              <a-select-option value="Hà Tĩnh">Hà Tĩnh</a-select-option>
              <a-select-option value="Hải Dương">Hải Dương</a-select-option>
              <a-select-option value="Hải Phòng">Hải Phòng</a-select-option>
              <a-select-option value="Hậu Giang">Hậu Giang</a-select-option>
              <a-select-option value="Hòa Bình">Hòa Bình</a-select-option>
              <a-select-option value="Hưng Yên">Hưng Yên</a-select-option>
              <a-select-option value="Khánh Hòa">Khánh Hòa</a-select-option>
              <a-select-option value="Kiên Giang">Kiên Giang</a-select-option>
              <a-select-option value="Kon Tum">Kon Tum</a-select-option>
              <a-select-option value="Lai Châu">Lai Châu</a-select-option>
              <a-select-option value="Lâm Đồng">Lâm Đồng</a-select-option>
              <a-select-option value="Lạng Sơn">Lạng Sơn</a-select-option>
              <a-select-option value="Lào Cai">Lào Cai</a-select-option>
              <a-select-option value="Long An">Long An</a-select-option>
              <a-select-option value="Nam Định">Nam Định</a-select-option>
              <a-select-option value="Nghệ An">Nghệ An</a-select-option>
              <a-select-option value="Ninh Bình">Ninh Bình</a-select-option>
              <a-select-option value="Ninh Thuận">Ninh Thuận</a-select-option>
              <a-select-option value="Phú Thọ">Phú Thọ</a-select-option>
              <a-select-option value="Phú Yên">Phú Yên</a-select-option>
              <a-select-option value="Quảng Bình">Quảng Bình</a-select-option>
              <a-select-option value="Quảng Nam">Quảng Nam</a-select-option>
              <a-select-option value="Quảng Ngãi">Quảng Ngãi</a-select-option>
              <a-select-option value="Quảng Ninh">Quảng Ninh</a-select-option>
              <a-select-option value="Quảng Trị">Quảng Trị</a-select-option>
              <a-select-option value="Sóc Trăng">Sóc Trăng</a-select-option>
              <a-select-option value="Sơn La">Sơn La</a-select-option>
              <a-select-option value="Tây Ninh">Tây Ninh</a-select-option>
              <a-select-option value="Thái Bình">Thái Bình</a-select-option>
              <a-select-option value="Thái Nguyên">Thái Nguyên</a-select-option>
              <a-select-option value="Thanh Hóa">Thanh Hóa</a-select-option>
              <a-select-option value="Thừa Thiên Huế">Thừa Thiên Huế</a-select-option>
              <a-select-option value="Tiền Giang">Tiền Giang</a-select-option>
              <a-select-option value="Trà Vinh">Trà Vinh</a-select-option>
              <a-select-option value="Tuyên Quang">Tuyên Quang</a-select-option>
              <a-select-option value="Vĩnh Long">Vĩnh Long</a-select-option>
              <a-select-option value="Vĩnh Phúc">Vĩnh Phúc</a-select-option>
              <a-select-option value="Yên Bái">Yên Bái</a-select-option>
            </a-select>
            <a-select default-value="Chọn quận / huyện" @change="handleChangeDistrict" style="width: 50%">
              <a-select-option value="null">Chọn quận / huyện</a-select-option>
              <a-select-option value="Thành Phố Long Xuyên">Thành Phố Long Xuyên</a-select-option>
              <a-select-option value="Thị xã Châu Đốc">Thị xã Châu Đốc</a-select-option>
              <a-select-option value="Huyện An Phú">Huyện An Phú</a-select-option>
              <a-select-option value="Thị xã Tân Châu">Thị xã Tân Châu</a-select-option>
              <a-select-option value="Huyện Phú Tân">Huyện Phú Tân</a-select-option>
              <a-select-option value="Huyện Châu Phú">Huyện Châu Phú</a-select-option>
              <a-select-option value="Huyện Tịnh Biên">Huyện Tịnh Biên</a-select-option>
              <a-select-option value="Huyện Tri Tôn">Huyện Tri Tôn</a-select-option>
              <a-select-option value="Huyện Chợ Mới">Huyện Chợ Mới</a-select-option>
              <a-select-option value="Huyện Châu Thành">Huyện Châu Thành</a-select-option>
              <a-select-option value="Huyện Thoại Sơn">Huyện Thoại Sơn</a-select-option>
            </a-select>
          </div>
          <div style="margin-top: 30px">
            <AButton style="background-color : #338DBC;color: white;border:1px solid #338DBC;height: 50px;width: 200px" @click="createTransaction">Complete the order</AButton>
          </div>
        </div>
      </div>
    </div>
    <div id="details" style="padding:56px 66px 0 0;">
      <div v-if="loading===false" style="background-color: white;width: 100%;margin-right: auto;margin-left: auto;margin-bottom: 20px;margin-top: 20px">
        <a-table :columns="columns" :data-source="dataSource"
                 :scroll="{ x: 'calc(300px + 30%)', y: 300 }">
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
            <div style="font-size: 20px;margin-left: 10px;margin-right: 10px">{{Quantity}}</div>
          </span>
          <span slot="Total" slot-scope="Price">{{formatMoney(Price)}}</span>
        </a-table>
      </div>
      <p style="font-size: 25px;color: green">Total: {{formatMoney(getTotal())}}</p>
    </div>
  </div>
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
    title: 'Quantity',
    dataIndex: 'Quantity',
    key: 'Quantity',
    scopedSlots: { customRender: 'Quantity' },
  },
  {
    title: 'Price',
    key: 'Price',
    dataIndex: 'Price',
    scopedSlots: { customRender: 'Price' },
  },
];

const dataSource = [];
export default {
  name: "CheckOut",
  data(){
    return {
      fullname:null,
      email:null,
      phoneNumber:'',
      address:null,
      city:null,
      district:null,
      showEmptyPhone:false,
      showFormatPhone:false,
      loading:true,
      columns,
      dataSource,
      currentCustomer:null,
      currentBill:null,
      step1:false,
      step2:false,
      step3:false
    }
  },
  mounted() {
    this.getProductsInCart()
  },
  methods:{
    handleChangeCity(value) {
      this.city = `${value}`
    },
    handleChangeDistrict(value) {
      this.district = `${value}`
    },
    formatMoney(price){
      let formatter = new Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
      });
      return formatter.format(Number(price));
    },
    convertStringToArray(){
      let arr = JSON.parse(localStorage.getItem("listProduct"))
      return arr
    },
    resolve_img_url: function (path) {
      let images = require.context('../assets/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    },
    getProductsInCart(){
      let arr = this.convertStringToArray()
      try{
        this.dataSource = []
        for (let x of arr){
          axios
            .get("http://localhost:9889/book-controller/get-book-by-id", {
              params: {
                bookId:x[0]
              }
            })
            .then(response => {
              let myData = response.data
              this.dataSource.push({
                key:myData.isbn,
                Product:myData.name,
                Quantity:x[1],
                Price:x[1]*(myData.price-myData.price*myData.discount/100),
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
    checkFormatPhoneNumber(){
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if(!this.phoneNumber.match(phoneno))
      {
        this.showFormatPhone = true
      }
    },
    checkEmptyPhoneNumber(){
      if (this.phoneNumber === ''){
        this.showEmptyPhone = true;
      }
    },
    getTotal(){
      let result = 0;
      this.dataSource.forEach(item => result+=item.Price)
      return result
    },
    validateForm(){
      var phoneno = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if (this.phoneNumber === ''){
        this.showEmptyPhone = true;
      }else if(!this.phoneNumber.match(phoneno)) {
        this.showFormatPhone = true
      }

      if (this.phoneNumber !== ''){
        this.showEmptyPhone = false
      }
      if (this.phoneNumber.match(phoneno)){
        this.showFormatPhone = false
      }
    },
    createTransaction(){
      this.validateForm()
      if(this.showEmptyPhone == false && this.showFormatPhone == false){

        // tao moi khach hang
        axios.post("http://localhost:9889/customer-controller/insert-customer", {
          address: this.address,
          city: this.city,
          district: this.district,
          email: this.email,
          name: this.name,
          phoneNumber: this.phoneNumber
        })
          .then(response => {
            this.currentCustomer = response.data
            console.log(this.currentCustomer)
          })
          .catch(e => {
            this.errors.push(e)
          }).finally(() => {
          console.log("Start Step 2")
          axios.post("http://localhost:9889/bill-controller/insert-bill", {
            customerId: this.currentCustomer.id,
            status: 1
          })
            .then(response => {
              this.currentBill = response.data
              console.log(this.currentBill)
            })
            .catch(e => {
              this.errors.push(e)
            }).finally(() => {
            console.log("Start Step 3")
            let arr = this.convertStringToArray()
            arr.forEach(el =>{
              axios.post("http://localhost:9889/detail-bill-controller/insert-detail-bill", {
                amount: el[1],
                billId: this.currentBill.billId,
                isbn: el[0]
              })
                .then(response => {
                  console.log(response.data)
                })
                .catch(e => {
                  this.errors.push(e)
                }).finally(() => {
                localStorage.clear()
              })
            })
          })
        })
      }
    }
  }
}
</script>

<style scoped>
#wrapper-checkout{
  display: flex;
  justify-content: center;
  width: 85%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}
#wrapper-checkout > *{
  width: 50%;
}
#details{

}

#info{
  background-color: white;
}
ul > li {
  margin-right: 10px;
}
ul{
  padding-inline-start: 0;
}
#main{
  padding:56px 66px 0 0;
}
#info-header{
  padding:0 0 28px;
}
#form{
  text-align: left;
}

</style>
