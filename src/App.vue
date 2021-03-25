<template>
  <div id="app">
    <MyHeader id="header"></MyHeader>
    <MyNavigation></MyNavigation>
    <MyCarousel></MyCarousel>
    <TestComponent></TestComponent>
    <ListProductHorizontal class="list-product-horizontal" title="NEWLY RELEASED BOOK"></ListProductHorizontal>
    <ListProductHorizontal class="list-product-horizontal" title="TOP 100 BEST SELLER"></ListProductHorizontal>
    <ListProductHorizontal class="list-product-horizontal" title="SKILLING BOOK"></ListProductHorizontal>

    <MyFooter></MyFooter>
  </div>
</template>
<script>
import MyFooter from "./components/MyFooter";
import Vue from 'vue';
import Antd from 'ant-design-vue';
import MyCarousel from "./components/MyCarousel";
import 'ant-design-vue/dist/antd.css';
import MyHeader from "./components/MyHeader";
Vue.config.productionTip = false;

Vue.use(Antd);
import TestComponent from "./components/TestComponent";
import MyNavigation from "./components/MyNavigation";
import Product from "./components/Product";
import ListProductHorizontal from "./components/ListProductHorizontal";
export default {
  name: 'App',
  components:{
    ListProductHorizontal,
    Product,
    MyNavigation,
    TestComponent,
    MyCarousel,
    MyHeader,
    MyFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f4f4f4;
}

#header{
  margin: 0;
  padding: 0;
  height: 100px;
  background-color: white;
  text-align-all: center;
}
#list-product-horizontal{
  margin-top: 30px;
}
</style>
