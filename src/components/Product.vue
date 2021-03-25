<template>
  <a-card
    hoverable
    v-bind:style="styleObject"
    class="wrapper-card"
  >
    <template slot="actions" class="ant-card-actions">
      <template>
        <a-tooltip placement="top">
          <template slot="title">Search</template>
          <a-icon key="search" type="search" style=""/>
        </a-tooltip>
      </template>
      <template>
        <a-tooltip placement="top">
          <template slot="title">Add to Cart</template>
          <a-icon type="shopping-cart" />
        </a-tooltip>
      </template>
    </template>
    <img
      alt="example"
      src="@/assets/KhaNangTuDuy.jpg"
      slot="extra"
    />
    <div class="product-details">
      <a>Book: Khả năng tư duy</a>
      <p style="color:black">
        <del style="color: #D4D4D4">{{formatMoney(this.originPrice)}}</del>
        <span>{{formatMoney(this.getCurrentPrice())}}</span>
        <span style="background-color: red;color: white">{{originPercent}}%</span>
      </p>
    </div>
  </a-card>
</template>

<script>
export default {
  name: "Product",
  data(){
    return{
      styleObject:{
        width:this.width
      },
      text:"asdsgfasdf"
    }
  },
  props:{
    width:String,
    originPrice:String,
    originPercent:String
  },
  methods:{
    formatMoney(price){
      let formatter = new Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
      });
      return formatter.format(price);
    },
    getCurrentPrice(){
      return this.originPrice-this.originPrice*this.originPercent/100;
    }
  }
}
</script>

<style scoped>
.wrapper-card{
  border: none;
}
.product-details{
  font-family: "Apple Color Emoji";
  padding: 0;
}
.product-details > a{
  color: black;
  width: 100%;
}
.product-details > p{
  margin-top: 10px;
  width: 100%;
}
.product-details > p > *{
  margin-right: 5px;
}
</style>
