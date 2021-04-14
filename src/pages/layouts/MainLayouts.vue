<template>
  <div>
    <MyHeader id="header"></MyHeader>
    <MyNavigation></MyNavigation>
    <Main>
      <slot></slot>
    </Main>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "../../components/MyHeader";
import MyNavigation from "../../components/MyNavigation";
import MyFooter from "../../components/MyFooter";
import Main from "../../components/Main";
import Home from "../../components/Home";
export default {
  name: "MainLayouts",
  components: {Home, Main, MyFooter, MyNavigation, MyHeader},
}
</script>

<style scoped>

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
