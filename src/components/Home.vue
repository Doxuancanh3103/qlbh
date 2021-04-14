<template>
  <MainLayouts>
    <div style="margin-bottom: 10px">
      <MyCarousel></MyCarousel>
      <ListProductHorizontal title="BUSINESS BOOK" type-book="Business"></ListProductHorizontal>
      <ListProductHorizontal title="LITERATURE" type-book="Literature"></ListProductHorizontal>
      <ListProductHorizontal title="MATH BOOKS" type-book="Math"></ListProductHorizontal>
    </div>
  </MainLayouts>
</template>

<script>
import ListProductHorizontal from "./ListProductHorizontal";
import MyCarousel from "./MyCarousel";
import MainLayouts from "../pages/layouts/MainLayouts";
export default {
  name: "Home",
  components:{
    MainLayouts,
    MyCarousel,
    ListProductHorizontal
  }
}
</script>

<style scoped>

</style>
