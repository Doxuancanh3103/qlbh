<template>
  <div class="header-select">
    <div id="home">
      <img src="//theme.hstatic.net/1000237375/1000304269/14/logo.png?v=3399" width="300px" height="60px">
    </div>
    <div id="search">
      <input type="text" placeholder="Search...">
      <input type="button" value="Search">
    </div>
    <div id="cart">
      <img src="@/assets/cart.png" width="30px" height="30px">
      <p>Cart</p>
    </div>
  </div>
</template>
<script>
export default {
name: "MyHeader"
}
</script>

<style scoped>
.header-select{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
#home{
  position: relative;
  top: 15px;
  width: 30%;
  margin-left: 100px;
}
#search{
  width: 35%;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#search input[type="text"]{
  border: 1px solid #42b983;
  height: 40px;
  width: 80%;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  padding-left: 30px;
}
#search input[type="text"]:focus{
  border: 1px solid #42b983;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  outline: none;
}
#search input[type="button"]{
  color: white;
  background-color: forestgreen;
  border: none;
  height: 40px;
  width: 20%;
}
#search input[type="button"]:hover{
  cursor: pointer;
}
#search input[type="button"]:focus{
  outline: none;
}


</style>
