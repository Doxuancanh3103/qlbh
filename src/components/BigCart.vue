<template>
  <MainLayouts>
    <CommonCart></CommonCart>
  </MainLayouts>
</template>

<script>
import axios from "axios";
import MainLayouts from "../pages/layouts/MainLayouts";
import CommonCart from "./Cart";

export default {
  name: "BigCart",
  components: {CommonCart, MainLayouts},
  data(){
    return {
    }
  }
}
</script>

<style scoped>
</style>
