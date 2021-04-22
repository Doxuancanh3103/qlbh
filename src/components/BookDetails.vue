<template>
  <MainLayouts>
  <div id="book-details" v-if="loading==false">
    <div id="title">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li style="opacity: 0.5">/</li>
        <li>ALL PRODUCTS</li>
        <li style="opacity: 0.5">/</li>
        <li style="opacity: 0.5">Book: {{$route.params.bookName}}</li>
      </ul>
    </div>
    <div id="details">
      <div id="image-book">
        <a-card
          hoverable
          class="wrapper-card"
        >
          <img
            alt="example"
            :src="resolve_img_url(this.currentBook.imageBook)"
            slot="extra"
            width="100%"
            style="object-fit: cover"
          />
        </a-card>
      </div>
      <div id="info-book">
        <h3><strong>BOOK: {{this.currentBook.name.toUpperCase()}}</strong></h3>
        <div><strong>Code of product:</strong> <span><i>{{this.currentBook.isbn}}</i></span></div>
        <br>
        <div id="basic-info">
          <p>Author: {{this.currentBook.author}}</p>
          <p>Publisher: {{this.currentBook.publish}}</p>
          <p>Demension: {{this.currentBook.width}}x{{this.currentBook.height}}cm</p>
          <p>Page number: {{this.currentBook.pageNumber}}</p>
          <p>Mass: {{this.currentBook.mass}} grams</p>
          <p>Type: {{this.currentBook.type}}</p>
          <div id="row">
            <div>
              <h2 style="color: #026e36;font-size: 25px"><strong>{{this.formatMoney(this.getCurrentPrice())}}</strong></h2>
              <h3 style="opacity: 0.5;font-size: 18px"><del><strong>{{this.formatMoney(this.currentBook.price)}}</strong></del></h3>
              <h3 style="color: red;font-size: 15px">Discount {{this.currentBook.discount}}%</h3>
              <div>
                <h3 style="font-size: 14px">Amount</h3>
                <div id="wrap-compute">
                  <input type="button" name="-" value="-" @click="minus">
                  <div>{{this.amount}}</div>
                  <input type="button" name="+" value="+" @click="plus">
                </div>
              </div>
            </div>
            <div style="border-left: 1px solid lightgray;padding:10px 0 0 30px ">
              <h3 style="opacity: 0.7"><strong>Our Service</strong></h3>
              <p style="background: url('http://theme.hstatic.net/1000237375/1000304269/14/icon-serv-1.png?v=3419') no-repeat;padding-left:40px;height: 25px;margin-top: 10px">Home delivery in 3-7 business days</p>
              <p style="background: url('http://theme.hstatic.net/1000237375/1000304269/14/icon-serv-2.png?v=3419') no-repeat;padding-left:40px;height: 25px;margin-top: 10px">Free worldwide shipping for orders over 500K</p>
            </div>
          </div>
          <div style="margin-top: 20px;height: 40px">
            <div id="components-modal-demo-position">
              <AButton style="height: 100%;width: 30%;border-radius: 20px;text-align:center;color:green;border: 1px solid green" @click="addToCart">ADD TO CART</AButton>
              <a-modal
                title="CART"
                :dialog-style="{ top: '20px' }"
                :visible="modal1Visible"
                :width="1200"
                @ok="() => setModal1Visible(false)"
                @cancel="() => setModal1Visible(false)"
              >
                <Cart></Cart>
              </a-modal>
            </div>
          </div>
          <div style="margin-top: 15px" id="more-info">
            <h4 style="opacity: 0.7;"><strong>Service & Discount</strong></h4>
            <p>
              🔖Discount 20%, 30%, 40%, ... for all type of books
            </p>
            <p>
              🎁Bonus bookmarks for all orders
            </p>
            <p>
              🎁 Bonus keychains for orders over 300k
            </p>
            <p>
              🎁 Bonus free notebook + Freeship for orders over 500k
            </p>
            <p>
              🎁 Bonus 1 bag of cloth +  Freeship for orders over 700k
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </MainLayouts>
</template>

<script>
import axios from 'axios'
import CartModal from "./CartModal";
import Cart  from "./Cart";
import MainLayouts from "../pages/layouts/MainLayouts";
export default {
  name: "BookDetails",
  components: {MainLayouts, Cart, CartModal},
  data(){
    return {
      currentBook:null,
      filter: {},
      amount:1,
      loading:true,
      modal1Visible: false,
    }
  },
  computed:{

  },
  watch: {
    $route($r) {
      console.log($r)
      this.filter = {name: $r.params.bookName}
      console.log(this.filter)
      this.getBookByName()
    }
  },
  mounted() {
    this.filter = {name: this.$route.params.bookName}
    this.getBookByName()
  },
  methods:{
    setModal1Visible(modal1Visible) {
      this.modal1Visible = modal1Visible;
    },
    getBookByName(){
      const configs = {params: {...this.filter}}
      axios
        .get("http://localhost:9889/book-controller/get-book-by-name", configs)
        .then(response => {
          this.currentBook = response.data;
          // console.log(this.currentBook);
        })
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
    },
    minus(){
      if (this.amount >= 1){
        this.amount = this.amount - 1;
      }
    },
    plus(){
      this.amount = this.amount + 1
    },
    formatMoney(price){
      let formatter = new Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
      });
      return formatter.format(price);
    },
    getCurrentPrice(){
      return this.currentBook.price-this.currentBook.price*this.currentBook.discount/100;
    },
    // getBookByName(name){
    //   axios
    //     .get("http://localhost:9889/book-controller/get-book-by-name?name="+name)
    //     .then(res => {
    //       this.currentBook = res.data
    //     })
    //     .catch(error => console.log(error))
    // },
    resolve_img_url: function (path) {
      let images = require.context('../assets/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    },
    addToCart(){
      if (localStorage.getItem("listProduct") === null){
        let arr = []
        arr.push(
          [
            this.currentBook.isbn,this.amount
          ]
        )
        localStorage.setItem("listProduct",JSON.stringify(arr))
      }else{
        let listProduct = JSON.parse(localStorage.getItem("listProduct"))
        if (listProduct.map(x => x[0]).includes(this.currentBook.isbn)){
          console.log(listProduct.filter(x => x[0] === this.currentBook.isbn))
          listProduct.filter(x => x[0] === this.currentBook.isbn)[0][1] += this.amount
        }else{
          listProduct.push([this.currentBook.isbn,this.amount])
        }
        localStorage.setItem("listProduct",JSON.stringify(listProduct))
      }
      this.setModal1Visible(true)
      console.log(JSON.parse(localStorage.getItem("listProduct")))
    }
  }
}
</script>

<style scoped>
#book-details > div {
  width: 75%;
  margin-bottom: 20px;
}
#details{
  margin-left: auto;
  margin-right: auto;
}
#title{
  height: 36px;
  margin-left: auto;
  margin-right: auto;
}
#title > ul{
  display: flex;
  align-items: flex-end;
  list-style-type: none;
  margin-bottom: 0;
  padding: 8px 15px 8px 0;
}

ul > li {
  margin-left: 10px;
}

#details{
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
}
#image-book{
  width: 40%;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 25px;
}
#info-book{
  width: 60%;
  margin-left: 75px;
  padding-top: 15px;
}
#info-book *{
  text-align: left;
}
#info-book > *{
  margin-left: 10px;
}
#info-book > h3{
  margin-left:10px;
  margin-bottom: 0;
}
#basic-info > * {
  margin: 0;
}
#row{
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
#row  * {
  margin: 0;
}
#row > * {
  width: 50%;
}
#wrap-compute{
  display: flex;
  justify-content: center;
  width: 40%;
}
#wrap-compute > * {
  text-align: center;
}
#wrap-compute > input{
  width: 25%;
  background-color: white;
  outline: none;
  border: 1px solid lightgray;
}
#wrap-compute > div{
  width: 50%;
  border:1px solid lightgray;
}

#more-info > p{
  background:url("http://theme.hstatic.net/1000237375/1000304269/14/check-ser.png?v=3419") no-repeat left;
  padding-left: 20px;
}
</style>
