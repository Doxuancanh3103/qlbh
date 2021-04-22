<template>
  <MainLayouts>
    <div>
      <h1 style="color: green;margin-top: 20px">Top 10 Book</h1>
    </div>
    <div v-if="loading == false" style="width: 85%" id="wrapper">
      <div>
        <a-list :grid="{ gutter:50 , column: 4 }" :data-source="listBooks">
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
  name: "TopTen",
  components: {Product, MainLayouts},
  data(){
    return {
      listBooks:[],
      loading:true,
    }
  },
  mounted() {
    this.getTopTenBestSeller()
  },
  methods:{
    getTopTenBestSeller(){
      axios
        .get('http://localhost:9889/book-controller/get-top-ten-book-seller')
        .then(response => {
          this.listBooks = response.data
          console.log(response.data)
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
#wrapper{
  margin-left: auto;
  margin-right: auto;
}
</style>
