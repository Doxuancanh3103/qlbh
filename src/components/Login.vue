<template>
  <MainLayouts>
    <div>
      <div style="width: 75%;margin-left: auto;margin-right: auto;">
        <div id="box-login-one">
          <h3 style="margin-bottom: 10px"><strong>LOG IN BY</strong></h3>
          <div>
            <AButton style="background-color: #3b5998;color: #FFFFFF;border: 1px solid #3b5998;width: 200px;height: 40px">
              Facebook
            </AButton><br>
            <AButton style="background-color: #d34836;color: #FFFFFF;border: 1px solid #d34836;width: 200px;height:40px;margin-top: 10px">
              Google
            </AButton>
          </div>
        </div>
        <div id="line"></div>
        <div id="box-login-two">
          <div id="form-login">
            <div>
              <h2>Login</h2>
            </div>
            <a-input placeholder="Email" allow-clear v-model="lEmail" @change="onChange" style="width: 350px">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
            <br>
            <p v-if="lShowEmail" style="margin-top: 3px;color: red">Please Enter Email</p>
            <a-input placeholder="Password" type="password" v-model="lPassword" allow-clear @change="onChange" style="width: 350px;margin-top: 15px">
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
            <br>
            <p v-if="lShowPassword" style="margin-top: 3px;color: red">Please Enter Password</p>
            <AButton style="margin-top: 10px" @click="login">Login</AButton>
            <div v-if="lShowAlert" style="margin-top: 5px">
              <a-alert type="error">
                <p slot="description">
                  Account or password is incorrect
                </p>
              </a-alert>
            </div>
          </div>
          <div id="form-logup">
            <div>
              <h2>Sign up</h2>
            </div>
            <a-input placeholder="Name" allow-clear v-model="sName" @change="onChange" style="width: 350px">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
            <br>
            <p v-if="sShowName" style="margin-top: 3px;color: red">Please Enter Your Name</p>
            <a-input placeholder="City" allow-clear v-model="sCity" @change="onChange" style="width: 350px;margin-top: 15px">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
            <br>
            <p v-if="sShowCity" style="margin-top: 3px;color: red">Please Enter Your City</p>
            <a-input placeholder="District" allow-clear v-model="sDistrict" @change="onChange" style="width: 350px;margin-top: 15px">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
            <br>
            <p v-if="sShowDistrict" style="margin-top: 3px;color: red">Please Enter Your District</p>
            <a-input placeholder="Phone Number" allow-clear v-model="sPhoneNumber" @change="onChange" style="width: 350px;margin-top: 15px">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
            <br>
            <p v-if="sShowPhoneNumber" style="margin-top: 3px;color: red">Please Enter Your Phone Number</p>
            <p v-if="sShowFormatPhoneNumber" style="color: red">Invalid phone number (length 8-11 characters, contains no special characters and spaces)</p>
            <a-input placeholder="Email" allow-clear v-model="sEmail" @change="onChange" style="width: 350px;margin-top: 15px">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
            <br>
            <p v-if="sShowEmail" style="margin-top: 3px;color: red">Please Enter Your Email</p>
            <p v-if="sShowFormatEmail" style="color: red">Invalid Email (your@gmail.com)</p>
            <a-input placeholder="Password" type="password" v-model="sPassword" allow-clear @change="onChange" style="width: 350px;margin-top: 15px">
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
            <br>
            <p v-if="sShowPassword" style="margin-top: 3px;color: red">Please Enter Your Password</p>
            <a-input placeholder="Retype Password" v-model="sRetypePassword" type="password" allow-clear @change="onChange" style="width: 350px;margin-top: 15px">
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
            <br>
            <p v-if="sShowRetypePassword" style="margin-top: 3px;color: red">Please Retype Password</p>
            <p v-if="!sEquals" style="margin-top: 3px;color: red">Password must be the same as RetypePassword</p>
            <AButton style="margin-top: 10px;margin-bottom: 20px" @click="signUp">Sign up</AButton>
            <a-alert v-if="isExistEmail" type="error" message="Error" description="Email existed">

            </a-alert>

            <a-alert v-if="isExistPhoneNumber" type="error" message="Error" description="Phone number existed">

            </a-alert>
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
  name: "Login",
  components: {MainLayouts},
  data(){
    return {
      lEmail:null,
      lPassword:null,
      sName:null,
      sCity:null,
      sDistrict:null,
      sPhoneNumber:'',
      sEmail:'',
      sPassword:null,
      sRetypePassword:null,
      lShowEmail: false,
      lShowPassword:false,
      lShowAlert:false,
      sShowName:false,
      sShowCity:false,
      sShowDistrict:false,
      sShowPhoneNumber:false,
      sShowFormatPhoneNumber:false,
      sShowEmail:false,
      sShowFormatEmail:false,
      sShowPassword:false,
      sShowRetypePassword:false,
      sEquals:true,
      isExistEmail:false,
      isExistPhoneNumber:false,
    }
  },
  methods:{
    openSuccess(type) {
      this.$notification[type]({
        message: 'Notification Status',
        description:
          'Create Account Success',
      });
    },
    onChange(value){
      console.log(value)
    },
    signUp(){
      this.validateForm()
      // console.log(this.sName)
      // console.log(this.sPhoneNumber)
      // console.log(this.sPassword)
      // console.log(this.sDistrict)
      // console.log(this.sEmail)
      // console.log(this.sRetypePassword)
      // console.log(this.sCity)
      this.createAccount()
      console.log(this.sName);
    },
    createAccount(){
      axios.post("http://localhost:9889/account-controller/create-account", {
        city: this.sCity,
        district: this.sDistrict,
        email: this.sEmail,
        name: this.sName,
        phoneNumber: this.sPhoneNumber,
        password:this.sPassword
      })
        .then(response => {
          if (response.data == 'Email'){
            this.isExistEmail = true
          }else if(response.data == 'Phone Number'){
            this.isExistEmail = false
            this.isExistPhoneNumber = true
          }else{
            this.isExistPhoneNumber = false
            localStorage.setItem("username",response.data)
            this.openSuccess('success')
            this.$router.push("/")
          }
          console.log(this.currentCustomer)
        })
        .catch(e => {
          this.errors.push(e)
        }).finally(() =>{
      })
    },
    validateForm(){
      var phoneno = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(this.sName == ''|this.sName == null){
        this.sShowName = true
      }else{
        this.sShowName = false
      }

      if(this.sCity == ''|this.sCity == null){
        this.sShowCity = true
      }else{
        this.sShowCity = false
      }
      if(this.sDistrict == ''|this.sDistrict == null){
        this.sShowDistrict = true
      }else{
        this.sShowDistrict = false
      }
      if(this.sPhoneNumber == ''|this.sPhoneNumber == null){
        this.sShowPhoneNumber = true
      }else{
        this.sShowPhoneNumber = false
      }
      if(!this.sPhoneNumber.match(phoneno)){
        this.sShowFormatPhoneNumber = true
      }else{
        this.sShowFormatPhoneNumber = false
      }
      if(this.sEmail == ''|this.sEmail == null){
        this.sShowEmail = true
      }else{
        this.sShowEmail = false
      }
      if(!this.sEmail.match(re)){
        this.sShowFormatEmail = true
      }else{
        this.sShowFormatEmail = false
      }

      if(this.sPassword == ''|this.sPassword == null){
        this.sShowPassword = true
      }else{
        this.sShowPassword = false
      }
      if(this.sRetypePassword == ''|this.sRetypePassword == null){
        this.sShowRetypePassword = true
      }else{
        this.sShowRetypePassword = false
      }

      if(this.sPassword == this.sRetypePassword){
        this.sEquals = true
      }else{
        this.sEquals = false
      }
    },
    login(){
      if(this.lEmail == null | this.lEmail == '') {
        this.lShowEmail = true
      }else{
        this.lShowEmail = false
      }
      if (this.lPassword == null | this.lPassword==''){
        this.lShowPassword = true
      }else{
        this.lShowPassword = false
      }
      if (this.lShowEmail == false|this.lShowPassword==false){
        axios.post("http://localhost:9889/account-controller/check-account", {
          email: this.lEmail,
          password:this.lPassword
        })
          .then(response => {
            console.log(response.data!==''?response.data:"adfasdfasdf")
            if (response.data!==''){
              this.lShowAlert = false
              localStorage.setItem("username",response.data.email)
              this.$router.go(-1)
            }else{
              this.lShowAlert = true
            }
          })
          .catch(e => {
            this.errors.push(e)
          }).finally(() => {
        })
      }
    }
  }
}
</script>

<style scoped>
#box-login-one{
  margin-top: 20px;
  margin-bottom: 30px;
}
#line{
  width: 100%;
  height: 1px;
  border-top: 1px solid #dfdfdf;
}
#box-login-two{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
