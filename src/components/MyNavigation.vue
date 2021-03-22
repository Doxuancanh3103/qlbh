<template>
  <div class="navigation">
    <div class="down-menu">
      <a-dropdown>
        <a-menu slot="overlay" @click="handleMenuClick">
          <a-menu-item key="1">
            <img src="@/assets/s1.png">
            <span>Home</span>
          </a-menu-item>
          <a-menu-item key="2">
            <img src="@/assets/s5.png">
            <span>Business book</span>
          </a-menu-item>
        </a-menu>
        <div>
          <img src="@/assets/menu.png" width="24px" height="24px"> Category
        </div>
      </a-dropdown>
<!--      <div>-->
<!--        <h4>Category</h4>-->
<!--      </div>-->
<!--      <div class="drop-down">-->
<!--        <ul>-->
<!--          <li>-->
<!--            <a>-->
<!--              <img src="@/assets/s1.png">-->
<!--              <span>Home</span>-->
<!--            </a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a>-->
<!--              <img src="@/assets/s5.png">-->
<!--              <span>Business book</span>-->
<!--            </a>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
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
      console.log(e)
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
