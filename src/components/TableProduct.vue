<template>
  <MainLayouts>
    <div>
      <h1 style="color: green">{{$route.params.typeBook}} Book</h1>
    </div>
    <div v-if="loading == false" style="width: 85%" id="wrapper">
      <div>
        <a-list :grid="{ gutter:50 , column: 4 }" :data-source="listBooks" :pagination="pagination">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <Product :book-id="item.isbn"
                     :image-source="item.imageBook"
                     width="90%"
                     :name-of-book="item.name"
                     :origin-price="item.price"
                     :origin-percent="item.discount">
            </Product>
          </a-list-item>
        </a-list>
      </div>
    </div>
    <div v-else>
      <div>
        <a-spin />
      </div>
    </div>
  </MainLayouts>
</template>

<script>
import MainLayouts from "../pages/layouts/MainLayouts";
import axios from "axios";
import Product from "./Product";
export default {
  name: "TableProduct",
  components: {Product, MainLayouts},
  data(){
    return {
      listBooks:[],
      loading:true,
      pagination: {
        onChange: page => {
          console.log(page);
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        },
        pageSize: 8,
      },
    }
  },
  watch: {
    $route($r) {
      console.log($r)
      this.filter = {type: $r.params.typeBook}
      console.log(this.filter)
      this.getListBookByType()
    }
  },
  mounted() {
    this.filter = {type: this.$route.params.typeBook}
    this.getListBookByType()
  },
  methods:{
    getListBookByType () {
      const configs = {params: {...this.filter}}
      axios
        .get('http://localhost:9889/book-controller/get-list-book-by-type',configs)
        .then(response => {
          this.listBooks = response.data
          console.log(response.data)
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.loading = false
        })
    },
  }
}
</script>

<style scoped>
#tableProduct{
  margin-top: 50px;
}
#tableProduct > tr > td{
  padding-bottom: 50px;
}
#wrapper{
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}
</style>
