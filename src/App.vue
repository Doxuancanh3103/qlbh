<template>
  <div id="app">
    <MyHeader id="header"></MyHeader>
    <MyNavigation></MyNavigation>
    <MyCarousel></MyCarousel>
    <TestComponent></TestComponent>
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
export default {
  name: 'App',
  components:{
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
}

#header{
  margin: 0;
  padding: 0;
  height: 100px;
  background-color: white;
  text-align-all: center;
}
</style>
