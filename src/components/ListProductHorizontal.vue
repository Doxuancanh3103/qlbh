<template>
  <div id="list-product-horizontal">
    <div id="title">
      <h2>{{title }}</h2>
    </div>
    <div id="list-product">
      <div v-if="!isEmpty()">
        <div v-if="loading == false">
          <carousel class="my-carousel" :items = this.numberImageInList autoHeight="true">
            <Product v-for="i in 10"
                     :key="i"
                     :image-source="listBooks[i].imageBook"
                     width="98%"
                     :name-of-book="listBooks[i].name"
                     :origin-price="listBooks[i].price"
                     :origin-percent="listBooks[i].discount">
            </Product>
          </carousel>
        </div>
        <div v-else>
          <div>
            <a-spin />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import Product from "./Product";
import axios from 'axios'
export default {
  name: "ListProductHorizontal",
  mounted () {
      this.getListBookByType(this.typeBook);
  },
  data(){
    return{
      numberImageInList:4,
      listBooks:null,
      loading:true,
    }
  },
  components:{
    Product,
    carousel
  },
  props:{
    title:String,
    typeBook:String
  },
  methods: {
    getListBookByType (type) {
      console.log("a");
      axios
        .get('http://localhost:9889/book-controller/get-list-book-by-type?type='+type)
        .then(response => {
          this.listBooks = response.data
        })
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
    },
    isEmpty(){
      return this.listBooks == 0;
    }
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
  margin-right: 10px;
  width: 25%;
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
#list-product > div{
  width: 100%;
}
#list-product-horizontal{
  background-color: white;
}
</style>
