<template>
  <footer class="wrap">
    <div class="service-info">

    </div>
    <div class="introduce">
      <div class="introduce-wrap">
        <div class="column">
          <img src="@/assets/logo_ft.png" width="100%" height="13%">
          <p>
            <i class="fa fa-map-marker"></i> LK 02 - 03, Dãy B, KĐT Green Pearl,378 Minh Khai, Hai Bà Trưng, Hà Nội.
            <br>
            <br>
            <i class="fa fa-phone"></i> 0979 987 645
                                        contact@dxc.com
            <br>
            <br>
          </p>
        </div>
        <div class="column">
          <p>ABOUT US</p>
          <hr>
          <ul>
            <li>Introduce</li>
            <li>News</li>
            <li>Recruitment</li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="column">
          <p>CUSTOMER HELP</p>
          <hr>
          <ul>
            <li>Terms of use</li>
            <li>Shopping guide</li>
            <li>Payment Methods</li>
            <li>Delivery method</li>
            <li>Return policy </li>
            <li>Information security</li>
          </ul>
        </div>
        <div class="column">
          <p>INFORMATION</p>
          <hr>
          <ul>
            <li>Sign in</li>
            <li>Sign up</li>
            <li>Look up orders</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="license">

    </div>
  </footer>
</template>

<script>
export default {
name: "MyFooter"
}
</script>

<style scoped>
.wrap{
  margin-top: 10px;
  width: 100%;
  height: 500px;
  color: white;
}
.service-info{
  height: 30%;
  width: 100%;
  background-color: white;
}
.introduce{
  height: 50%;
  width: 100%;
  background-color: #014421;
}
.license{
  height: 20%;
  width: 100%;
  background-color: #046d35;
}
.introduce-wrap{
  margin-left: auto;
  margin-right: auto;
  padding-top: 25px;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: left;
}
.column{
  width: 20%;
  height: 100%;
  font: 14px brandon_textregular;
  margin-right: 50px;
}
.column > p{
  text-align: justify;
}
.column > *{
  margin-bottom: 10px;
}
.column > ul{
  list-style-type: none;
  text-align: left;
}
ul li {
  margin-bottom: 5px;
}
</style>
