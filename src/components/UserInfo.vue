<template>
  <MainLayouts>
    <div id="wrapper" v-if="loading==false">
      <h2><strong>My Information</strong></h2>
      <div id="account-info">
        <h3><strong>Account Information</strong></h3>
        <div style="width: 50%;border: 1px solid lightgrey;padding-top: 20px;padding-left: 15px">
          <p>Name:            <span style="color: green">{{user.name}}</span></p>
          <p>Email:           <span style="color: green">{{user.email}}</span></p>
        </div>
      </div>
      <div id="bill-info">
        <h3><strong>Orders just placed</strong></h3>
        <div>
          <div v-if="ordersJustPlaced.length > 0">
            <div v-for="el in listBill" :key="el.billId">
              <div style="border: 1px solid lightgrey;margin-top: 20px;padding-left: 10px;margin-right: 20px">
                <p style="text-align: center;font-size: 20px"><i>Bill Id:</i> <span style="color: green">{{el[0].billId}}</span></p>
                <div>
                  <table style="width: 100%">
                    <tr>
                      <th>Image Book</th>
                      <th>Name of Book</th>
                      <th>Price</th>
                      <th>Amount</th>
                    </tr>
                    <tr v-for="item in el">
                      <td>
                        <a-card
                          hoverable
                          class="wrapper-card"
                          style="width: 100px;border: none;"
                        >
                          <img
                            alt="example"
                            :src="resolve_img_url(item.imageBook)"
                            slot="extra"
                            width="50px"
                            style="object-fit: cover"
                          />
                        </a-card>
                      </td>
                      <td>
                        <p>{{item.name}}</p>
                      </td>
                      <td>
                        <p>{{formatMoney(item.price)}}</p>
                      </td>
                      <td>
                        <p>{{item.amount}}</p>
                      </td>
                    </tr>
                  </table>
                </div>
                <div style="margin-top: 20px">
                  <p><i>Date:</i> <span style="color: green;">{{el[0].date}}</span></p>
                </div>
                <p style="text-align: right;font-size: 20px;padding-right: 10px"><i>Total:</i><span style="color: green">{{formatMoney(getTotalPrice(el))}}</span></p>
              </div>
            </div>
          </div>
          <div v-else style="padding-left: 20px">
            <i>You are not buying the product!...</i>
          </div>
        </div>
      </div>
    </div>
  </MainLayouts>
</template>

<script>
import MainLayouts from "../pages/layouts/MainLayouts";
import axios from "axios";
export default {
  name: "UserInfo",
  components: {MainLayouts},
  data(){
    return{
      user:null,
      ordersJustPlaced:null,
      loading:true,
      listBill:[]
    }
  },
  mounted() {
    this.getUser()
  },
  methods:{
    formatMoney(price){
      let formatter = new Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
      });
      return formatter.format(price);
    },
    getTotalPrice(el){
      var total = 0
      el.forEach(e => {
        total += e.price*e.amount
      })
      return total
    },
    resolve_img_url: function (path) {
      let images = require.context('../assets/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    },
    createKey(el){
      return el.customerId+el.billId+el.detailBillId+el.isbn;
    },
    getUser(){
      axios
        .get("http://localhost:9889/customer-controller/get-customer-by-email", {
          params: {
            email:localStorage.getItem("username")
          }
        })
        .then(response => {
          this.user = response.data
          console.log(this.user)
        })
        .catch(error => console.log(error))
        .finally(()=>{
          this.getOrdersJustPlaced()
        })
    },
    getOrdersJustPlaced(){
      axios
        .get("http://localhost:9889/customer-controller/orders-just-placed", {
          params: {
            userId:this.user.id
          }
        })
        .then(response => {
          this.ordersJustPlaced = response.data
          console.log(this.ordersJustPlaced)
        })
        .catch(error => console.log(error))
        .finally(()=>{
          this.loading = false
          const listBillId = this.ordersJustPlaced.map(el => el.billId).filter((v, i, a) => a.indexOf(v) === i);
          listBillId.forEach(el => {
            var cloneEl = el
            this.listBill.push(this.ordersJustPlaced.filter(item => item.billId == cloneEl))
          })
          console.log(this.listBill)
        })
    }
  }
}
</script>

<style scoped>
#wrapper{
  width: 80%;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding-top: 10px;
  padding-left: 10px;
}
#wrapper > *{
  text-align: left;
  padding-left: 10px;
}

#bill-info{
  margin-top: 20px;
}

td{
  color: green;
}
</style>
