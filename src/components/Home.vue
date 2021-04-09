<template>
  <div style="margin-bottom: 10px">
    <MyCarousel></MyCarousel>
    <ListProductHorizontal title="BUSINESS BOOK" type-book="Business"></ListProductHorizontal>
    <ListProductHorizontal title="LITERATURE" type-book="Literature"></ListProductHorizontal>
    <ListProductHorizontal title="MATH BOOKS" type-book="Math"></ListProductHorizontal>
  </div>
</template>

<script>
import ListProductHorizontal from "./ListProductHorizontal";
import MyCarousel from "./MyCarousel";
export default {
  name: "Home",
  components:{
    MyCarousel,
    ListProductHorizontal
  }
}
</script>

<style scoped>

</style>
