<template>
  <a-carousel arrows autoplay>
    <div
      slot="prevArrow" slot-scope="props"
      class="custom-slick-arrow"
      style="left: 15px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div
      slot="nextArrow" slot-scope="props"
      class="custom-slick-arrow"
      style="right: 15px"
    >
      <a-icon type="right-circle" />
    </div>
    <div v-for="slide in listBanners">
      <img v-bind:src="slide" v-bind:key="slide">
    </div>
  </a-carousel>
</template>
<script>
export default {
  name: 'MyCarousel',
  data () {
    return {
      listBanners:[require("@/assets/slider_item_1_image.jpg"),
        require("@/assets/slider_item_3_image.jpg"),
        require("@/assets/slider_item_4_image.jpg"),
        require("@/assets/slider_item_5_image.jpg"),
        require("@/assets/slider_item_6_image.jpg")],
    }
  }
}
</script>
<style scoped>
.ant-carousel >>> .slick-slide {
  height: 450px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 35px;
  color: green;
  opacity: 0.6;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.3;
}

.ant-carousel >>> .slick-slide  img {
  width: 100%;
  height: 450px;
}
</style>
