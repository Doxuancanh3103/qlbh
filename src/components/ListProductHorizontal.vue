<template>
  <div id="list-product-horizontal">
    <div id="title">
      <h2>{{title }}</h2>
    </div>
    <div id="list-product">
      <carousel class="my-carousel" :items = this.numberImageInList autoHeight="true">
        <Product origin-price="32000" origin-percent="20" width="300"></Product>
        <Product origin-price="32000" origin-percent="20" width="300"></Product>
        <Product origin-price="32000" origin-percent="20" width="300"></Product>
        <Product origin-price="32000" origin-percent="20" width="300"></Product>
        <Product origin-price="32000" origin-percent="20" width="300"></Product>
        <Product origin-price="32000" origin-percent="20" width="300"></Product>
        <Product origin-price="32000" origin-percent="20" width="300"></Product>
        <Product origin-price="32000" origin-percent="20" width="300"></Product>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import Product from "./Product";
export default {
  name: "ListProductHorizontal",
  data(){
    return{
      numberImageInList:5
    }
  },
  components:{
    Product,
    carousel
  },
  props:{
    title:String
  }
}
</script>

<style scoped>
div{
  width: 80%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
.my-carousel{
  width: 100%;
}
.my-carousel > Product{
  height: 100%;
}
#title>h2{
  text-align: left;
  cursor: pointer;
  width: 20%;
  padding-top: 20px;
  font-size: 15px;
  border-bottom: 3px solid white;
  height: 100%;
  padding-left: 15px;
  padding-bottom: 0;
}

#title > h2:hover{
  border-bottom: 3px solid  #046d35;
}
#title{
  width: 100%;
  background-color: azure;
  padding-left: 0;
  height: 15%;
}
#list-product{
  width: 100%;
}
#list-product-horizontal{
  background-color: white;
}
</style>
