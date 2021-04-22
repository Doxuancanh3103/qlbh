<template>
  <div class="navigation">
    <div class="down-menu">
      <a-dropdown>
        <a-menu slot="overlay" >
          <a-menu-item key="5" @click="redirectAllProducts">
            <img src="@/assets/s5.png">
            <span>All Products</span>
          </a-menu-item>
          <a-menu-item key="1" @click="redirectHome">
            <img src="@/assets/s1.png">
            <span>Home</span>
          </a-menu-item>
          <a-menu-item key="2" @click="redirectBusinessBook">
            <img src="@/assets/s2.png">
            <span>Business book</span>
          </a-menu-item>
          <a-menu-item key="3" @click="redirectListeratureBook">
            <img src="@/assets/s3.png">
            <span>Literature book</span>
          </a-menu-item>
          <a-menu-item key="4" @click="redirectMathBook">
            <img src="@/assets/s5.png">
            <span>Math book</span>
          </a-menu-item>

          <a-menu-item key="6" @click="redirectTopTenBestSeller">
            <img src="@/assets/s5.png">
            <span>Top 10 Best Seller</span>
          </a-menu-item>
        </a-menu>
        <div>
          <img src="@/assets/menu.png" width="24px" height="24px" style="margin-bottom: 3px"> Category
        </div>
      </a-dropdown>
    </div>
    <div id="viewed">
      <div>
        <p>Viewed Products</p>
      </div>
    </div>
    <div>
      <img src="@/assets/oto.png" width="32px" height="32px">
      <div>
        <p>Ship COD Worldwide</p>
      </div>
    </div>
    <div>
      <img src="@/assets/otofree.png" width="32px" height="32px">
      <div>
        <p>Free ship orders over 300k</p>
      </div>
    </div>

    <div>
      <img src="@/assets/hotline.png" width="32px" height="32px">
      <div>
        <p>Hotline: 0979 987 645</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyNavigation",
  methods:{
    handleMenuClick(e){
      // console.log(e)
    },
    redirectAllProducts(){
      this.$router.push('/all-product').catch(()=>{})
    },
    redirectMathBook(){
      this.$router.push('/list-product/Math').catch(()=>{})
    },
    redirectListeratureBook(){
      this.$router.push('/list-product/Literature').catch(()=>{})
    },
    redirectHome(){
      this.$router.push("/").catch(()=>{});
    },
    redirectBusinessBook(){
      this.$router.push('/list-product/Business').catch(()=>{})
      console.log("Business Book");
    },
    redirectTopTenBestSeller(){
      this.$router.push('/top-ten').catch(() => {})
    }
  }

}
</script>

<style scoped>
.navigation{
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #D4D4D4;
}
.down-menu{
  max-width: 100px;
}
.drop-down{
  position: absolute;
  display: none;
  top:132px;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 5;
}

.drop-down > li a {
  display: block;
  position: relative;
}

.drop-down ul li {
  padding-bottom:10px;
  height: 40px;
  padding-left: 10px;
  padding-top: 10px;
  border-bottom: 1px solid #D4D4D4;
  border-left: 3px solid #D4D4D4;
  animation-name: down;
  animation-duration: 0.5s;
}
@keyframes down {
  from{height: 0px}
  to{height: 40px}
}
.drop-down ul li:hover{
  border-left:3px solid forestgreen;
  color: forestgreen;
}

.drop-down > ul {
  list-style-type: none;
  text-align: left;
}
ul li a img{
  vertical-align: middle;
}
ul li a span{
  vertical-align: middle;
}
.navigation > *{
  margin-right: 70px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.navigation > * img{
  margin-right: 10px;
}
.down-menu:hover .drop-down{
  cursor: pointer;
  display: block;
}
.down-menu:hover{
  cursor: pointer;
}
.navigation > * div{
  padding-bottom: 0px;
  font-size: 12px;
}
p{
  margin-bottom: 6px;
}

#viewed{
  cursor: pointer;
}
</style>
