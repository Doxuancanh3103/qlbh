<template>
  <footer class="wrap">
    <div class="service-info">
      <a-row type="flex" justify="center">
        <a-col :span="4" :order="4" class="a-col">
          <img src="@/assets/phone.png">
          <h4>HOTLINE:</h4>
          <p>0979 987 645</p>
        </a-col>
        <a-col :span="4" :order="3" class="a-col">
          <img src="@/assets/smile.png">
          <h4>FREE RETURNS</h4>
          <p>within 10 days</p>
        </a-col>
        <a-col :span="4" :order="2" class="a-col">
          <img src="@/assets/money.png">
          <h4>SHIP COD WORLDWIDE</h4>
          <p>Payment upon receipt of the book</p>
        </a-col>
        <a-col :span="4" :order="1" class="a-col">
          <img src="@/assets/truck.png">
          <h4>FREE SHIPPING</h4>
          <p>for orders over 300,000 VND</p>
        </a-col>
      </a-row>
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
  padding-left: 0;
}
ul li {
  margin-bottom: 5px;
}
.service-info > *{
  height: 100%;
}
.a-col{
  padding-top: 40px;
}
.a-col > * {
  margin-bottom: 0;
}
.a-col > h4{
  color: #026e36;
}
.a-col > p{
  color: #666666;
}
.a-col > img{
  width: 40px;
  height: 40px;
}
</style>
