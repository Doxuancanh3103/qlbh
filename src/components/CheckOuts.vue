<template>
  <div id="wrapper-checkout">
    <div id="info">
      <div id="main">
        <div id="info-header">
          <h2 style="text-align: left">XUAN CANH BOOK</h2>
          <ul style="display: flex;justify-content: left;list-style-type: none">
            <li>
              <a>Cart</a>
            </li>
            <li style="color: #D4D4D4"> > </li>
            <li>
              <a>Shipment details</a>
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
            <a-select v-model="city" default-value="Chọn tỉnh / thành" id="customer_shipping_province" name="customer_shipping_province" style="width: 45%">
              <a-select-option value="null">  Chọn tỉnh / thành </a-select-option>
              <a-select-option value="50">Hồ Chí Minh</a-select-option>
              <a-select-option value="1">Hà Nội</a-select-option>
              <a-select-option value="32">Đà Nẵng</a-select-option>
              <a-select-option value="57" selected="">An Giang</a-select-option>
              <a-select-option value="49">Bà Rịa - Vũng Tàu</a-select-option>
              <a-select-option value="15">Bắc Giang</a-select-option>
              <a-select-option value="4">Bắc Kạn</a-select-option>
              <a-select-option value="62">Bạc Liêu</a-select-option>
              <a-select-option value="18">Bắc Ninh</a-select-option>
              <a-select-option value="53">Bến Tre</a-select-option>
              <a-select-option value="35">Bình Định</a-select-option>
              <a-select-option value="47">Bình Dương</a-select-option>
              <a-select-option value="45">Bình Phước</a-select-option>
              <a-select-option value="39">Bình Thuận</a-select-option>
              <a-select-option value="63">Cà Mau</a-select-option>
              <a-select-option value="59">Cần Thơ</a-select-option>
              <a-select-option value="3">Cao Bằng</a-select-option>
              <a-select-option value="42">Đắk Lắk</a-select-option>
              <a-select-option value="43">Đắk Nông</a-select-option>
              <a-select-option value="7">Điện Biên</a-select-option>
              <a-select-option value="48">Đồng Nai</a-select-option>
              <a-select-option value="56">Đồng Tháp</a-select-option>
              <a-select-option value="41">Gia Lai</a-select-option>
              <a-select-option value="2">Hà Giang</a-select-option>
              <a-select-option value="23">Hà Nam</a-select-option>
              <a-select-option value="28">Hà Tĩnh</a-select-option>
              <a-select-option value="19">Hải Dương</a-select-option>
              <a-select-option value="20">Hải Phòng</a-select-option>
              <a-select-option value="60">Hậu Giang</a-select-option>
              <a-select-option value="11">Hòa Bình</a-select-option>
              <a-select-option value="21">Hưng Yên</a-select-option>
              <a-select-option value="37">Khánh Hòa</a-select-option>
              <a-select-option value="58">Kiên Giang</a-select-option>
              <a-select-option value="40">Kon Tum</a-select-option>
              <a-select-option value="8">Lai Châu</a-select-option>
              <a-select-option value="44">Lâm Đồng</a-select-option>
              <a-select-option value="13">Lạng Sơn</a-select-option>
              <a-select-option value="6">Lào Cai</a-select-option>
              <a-select-option value="51">Long An</a-select-option>
              <a-select-option value="24">Nam Định</a-select-option>
              <a-select-option value="27">Nghệ An</a-select-option>
              <a-select-option value="25">Ninh Bình</a-select-option>
              <a-select-option value="38">Ninh Thuận</a-select-option>
              <a-select-option value="16">Phú Thọ</a-select-option>
              <a-select-option value="36">Phú Yên</a-select-option>
              <a-select-option value="29">Quảng Bình</a-select-option>
              <a-select-option value="33">Quảng Nam</a-select-option>
              <a-select-option value="34">Quảng Ngãi</a-select-option>
              <a-select-option value="14">Quảng Ninh</a-select-option>
              <a-select-option value="30">Quảng Trị</a-select-option>
              <a-select-option value="61">Sóc Trăng</a-select-option>
              <a-select-option value="9">Sơn La</a-select-option>
              <a-select-option value="46">Tây Ninh</a-select-option>
              <a-select-option value="22">Thái Bình</a-select-option>
              <a-select-option value="12">Thái Nguyên</a-select-option>
              <a-select-option value="26">Thanh Hóa</a-select-option>
              <a-select-option value="31">Thừa Thiên Huế</a-select-option>
              <a-select-option value="52">Tiền Giang</a-select-option>
              <a-select-option value="54">Trà Vinh</a-select-option>
              <a-select-option value="5">Tuyên Quang</a-select-option>
              <a-select-option value="55">Vĩnh Long</a-select-option>
              <a-select-option value="17">Vĩnh Phúc</a-select-option>
              <a-select-option value="10">Yên Bái</a-select-option>
            </a-select>
            <a-select v-model="district" default-value="Chọn quận / huyện" id="customer_shipping_district" name="customer_shipping_district" style="width: 50%">
              <a-select-option data-code="null" value="null" selected="">Chọn quận / huyện</a-select-option>
              <a-select-option value="582">Thành Phố Long Xuyên</a-select-option>
              <a-select-option value="583">Thị xã Châu Đốc</a-select-option>
              <a-select-option value="584">Huyện An Phú</a-select-option>
              <a-select-option value="585">Thị xã Tân Châu</a-select-option>
              <a-select-option value="586">Huyện Phú Tân</a-select-option>
              <a-select-option value="587">Huyện Châu Phú</a-select-option>
              <a-select-option value="588">Huyện Tịnh Biên</a-select-option>
              <a-select-option value="589">Huyện Tri Tôn</a-select-option>
              <a-select-option value="590">Huyện Chợ Mới</a-select-option>
              <a-select-option value="591">Huyện Châu Thành</a-select-option>
              <a-select-option value="592">Huyện Thoại Sơn</a-select-option>
            </a-select>
          </div>
          <div style="margin-top: 30px">
            <AButton style="background-color : #338DBC;color: white;border:1px solid #338DBC;height: 50px;width: 200px" @click="validateForm">Complete the order</AButton>
          </div>
        </div>
      </div>
    </div>
    <div id="details">
      <div v-if="loading===false" style="background-color: white;width: 80%;margin-right: auto;margin-left: auto;margin-bottom: 20px;margin-top: 20px">
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
      dataSource
    }
  },
  mounted() {
    this.getProductsInCart()
  },
  methods:{
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
            .get("http://localhost:9889/book-controller/get-book-by-id?bookId="+x[0])
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
    }
  }
}
</script>

<style scoped>
#wrapper-checkout{
  display: flex;
  justify-content: center;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
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
