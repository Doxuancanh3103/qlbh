<template>
  <a-card
    hoverable
    v-bind:style="styleObject"
    class="wrapper-card"
    @click="goToBookDetailsByID"
  >
    <template slot="actions" class="ant-card-actions">
      <template>
        <a-tooltip placement="top">
          <template slot="title">Search</template>
          <a-icon key="search" type="search" style=""/>
        </a-tooltip>
      </template>
      <template>
        <a-tooltip placement="top">
          <template slot="title">Add to Cart</template>
          <a-icon type="shopping-cart" @click.stop="addToCart"/>
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
        </a-tooltip>
      </template>
    </template>
    <img
      alt="example"
      :src="resolve_img_url(imageSource)"
      slot="extra"
      width="200px"
      height="300px"
      style="object-fit: cover"
    />
    <div class="product-details">
      <a :style="autoFontSize">{{displayNameBook}}</a>
      <p style="color:black">
        <del style="color: #D4D4D4">{{formatMoney(this.originPrice)}}</del>
        <span style="color: #046d35">{{formatMoney(this.getCurrentPrice())}}</span>
        <span style="background-color: red;color: white">{{originPercent}}%</span>
      </p>
    </div>
  </a-card>
</template>

<script>
import Cart from "./Cart";
export default {
  name: "Product",
  components: {Cart},
  data(){
    return{
      styleObject:{
        width:this.width
      },
      displayNameBook:'',
      modal1Visible: false,
    }
  },
  props:{
    width:String,
    originPrice:Number,
    originPercent:Number,
    imageSource:String,
    nameOfBook:String,
    bookId:String
  },
  methods:{
    formatMoney(price){
      let formatter = new Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
      });
      return formatter.format(price);
    },
    getCurrentPrice(){
      return this.originPrice-this.originPrice*this.originPercent/100;
    },
    resolve_img_url: function (path) {
      let images = require.context('../assets/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    },
    goToBookDetailsByID(){
      let path = '/book-details-by-id/'+this.bookId;
      console.log(path);
      this.$router.push(path).catch(() => {});
    },
    setModal1Visible(modal1Visible) {
      this.modal1Visible = modal1Visible;
    },
    addToCart(){
      if (localStorage.getItem("listProduct") === null){
        let arr = []
        arr.push(
          [
            this.bookId,1
          ]
        )
        localStorage.setItem("listProduct",JSON.stringify(arr))
      }else{
        let listProduct = JSON.parse(localStorage.getItem("listProduct"))
        if (listProduct.map(x => x[0]).includes(this.bookId)){
          console.log(listProduct.filter(x => x[0] === this.bookId))
          listProduct.filter(x => x[0] === this.bookId)[0][1] += 1
        }else{
          listProduct.push([this.bookId,1])
        }
        localStorage.setItem("listProduct",JSON.stringify(listProduct))
      }
      this.setModal1Visible(true)
      console.log(JSON.parse(localStorage.getItem("listProduct")))
    }
  },
  computed:{
    autoFontSize(){
      console.log(this.nameOfBook.split().length);
      if (this.nameOfBook.split(' ').length >= 7){
        this.displayNameBook = this.nameOfBook.split(' ').slice(0,4).join(" ") +'...';
      }else{
        this.displayNameBook = this.nameOfBook;
      }
    }
  }
}
</script>

<style scoped>
.wrapper-card{
  border: none;
}
.product-details{
  font-family: "Apple Color Emoji";
  padding: 0;
}
.product-details > a{
  color: black;
  font-size: 15px;
  width: 100%;
  transition: all 0.15s ease-in;
}
.product-details > a:hover{
  color: #026e36;
}
.product-details > p{
  margin-top: 10px;
  width: 100%;
}
.product-details > p > *{
  margin-right: 5px;
}
</style>
