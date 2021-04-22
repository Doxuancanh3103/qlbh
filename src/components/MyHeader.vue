<template>
  <div class="header-select">
    <div id="home">
      <a href="/">
        <img src="//theme.hstatic.net/1000237375/1000304269/14/logo.png?v=3399" width="300px" height="60px">
      </a>
    </div>
    <div id="search">
      <a-auto-complete
        v-model="value"
        style="width: 80%"
        :data-source="listProducts"
        @select="onSelect"
        @search="onSearch"
        @change="onChange"
      />
      <input type="button" value="Search" @click="goToBookDetails">
    </div>
    <div id="cart" style="margin-top: 20px;cursor: pointer">
      <a-icon type="shopping-cart" style="font-size: 30px;opacity: 0.5" @click="redirectCart"/>
      <p style="font-size: 10px">Cart</p>
    </div>
    <div class="down-menu" style="margin-left: 30px">
      <a-dropdown v-if="checkAccount() == false">
        <a-menu slot="overlay" >
          <a-menu-item key="1" @click="redirectLogin">
            <img src="@/assets/s1.png">
            <span>Login</span>
          </a-menu-item>
          <a-menu-item key="2" @click="redirectLogin">
            <img src="@/assets/s5.png">
            <span>Sign up</span>
          </a-menu-item>
        </a-menu>
        <div style="margin-top: 20px;cursor: pointer">
          <a-icon type="user" style="font-size: 30px;opacity: 0.5"></a-icon>
          <p style="font-size: 10px;">Account</p>
        </div>
      </a-dropdown>
      <a-dropdown v-if="checkAccount() == true">
        <a-menu slot="overlay" >
          <a-menu-item key="1" @click="redirectUserInfo">
            <img src="@/assets/s1.png">
            <span>{{getUsername()}}</span>
          </a-menu-item>
          <a-menu-item key="2" @click="logout">
            <img src="@/assets/s5.png">
            <span>Logout</span>
          </a-menu-item>
        </a-menu>
        <div style="margin-top: 20px;cursor: pointer">
          <a-icon type="user" style="font-size: 30px;opacity: 0.5"></a-icon>
          <p style="font-size: 10px;">Account</p>
        </div>
      </a-dropdown>

    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "MyHeader",
  data(){
    return{
      listProducts:[],
      value:''
    }
  },
  watch: {
    value(val) {
      console.log('value', val);
    },
  },
  methods:{
    redirectUserInfo(){
      this.$router.push("/user-info").catch(()=>{})
    },
    redirectLogin(){
      this.$router.push("/login").catch(()=>{})
    },
    logout(){
      localStorage.removeItem("username")
      this.$router.push('/')
      this.$router.go(0)
    },
    getUsername(){
      return localStorage.getItem("username")
    },
    checkAccount(){
      if (localStorage.getItem("username") == null){
        return false
      }
      return true
    },
    onSearch(searchText) {
      let list = []
      axios
        .get('http://localhost:9889/book-controller/get-list-book-by-name?name='+searchText)
        .then(response => {
          response.data.forEach(x => list.push(x.name));
        })
        .catch(error => console.log(error))
      this.listProducts = list;
    },
    onSelect(value) {
      return value;
    },
    onChange(value) {
      console.log('onChange', value);
    },
    goToBookDetails(){
      console.log(this.onSelect(this.value));
      let path = '/book-details/'+this.onSelect(this.value);
      console.log(path);
      this.$router.push(path).catch(() => {});
    },
    redirectCart(){
      this.$router.push('/cart').catch(() => {})
    }
  }
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
#search input[type="button"]{
  color: white;
  background-color: forestgreen;
  border: none;
  height: 32px;
  width: 20%;
}
#search input[type="button"]:hover{
  cursor: pointer;
}
#search input[type="button"]:focus{
  outline: none;
}

</style>
