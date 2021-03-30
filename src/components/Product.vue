<template>
  <a-card
    hoverable
    v-bind:style="styleObject"
    class="wrapper-card"
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
          <a-icon type="shopping-cart" />
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
export default {
  name: "Product",
  data(){
    return{
      styleObject:{
        width:this.width
      },
      displayNameBook:''
    }
  },
  props:{
    width:String,
    originPrice:Number,
    originPercent:Number,
    imageSource:String,
    nameOfBook:String
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
    }
  },
  computed:{
    autoFontSize(){
      console.log(this.nameOfBook.split().length);
      if (this.nameOfBook.split(' ').length >= 7){
        this.displayNameBook = this.nameOfBook.split(' ').slice(0,5).join(" ") +'...';
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
