<template>
  <div id="app">
    <MyHeader id="header"></MyHeader>
    <MyNavigation></MyNavigation>
    <Main></Main>
    <MyFooter></MyFooter>
<!--    <CheckOut></CheckOut>-->
  </div>
</template>
<script>
import MyFooter from "./components/MyFooter";
import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import MyHeader from "./components/MyHeader";
Vue.config.productionTip = false;

Vue.use(Antd);
import MyNavigation from "./components/MyNavigation";
import Main from "./components/Main";
import CartModal from "./components/CartModal";
import CheckOut from "./components/CheckOuts";
;
export default {
  name: 'App',
  components:{
    CheckOut,
    CartModal,
    Main,
    MyNavigation,
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
