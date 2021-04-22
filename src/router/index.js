import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import MyHeader from "../components/MyHeader";
import BookDetails from "../components/BookDetails";
import Cart from "../components/BigCart"
import BookDetailsByID from "../components/BookDetailsByID";
import CheckOuts from "../components/CheckOuts";
import MainLayouts from "../pages/layouts/MainLayouts";
import BigCart from "../components/BigCart";
import Login from "../components/Login";
import UserInfo from "../components/UserInfo";
import TableProduct from "../components/TableProduct";
import AllProduct from "../components/AllProduct";
import TopTen from "../components/TopTen";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path: '/checkouts',
      name:'Checkouts',
      component: CheckOuts
    },
    {
      path:'/cart',
      name: 'BigCart',
      component: BigCart
    },
    {
      path:'/book-details/:bookName',
      name:'bookDetails',
      component: BookDetails
    },
    {
      path:'/book-details-by-id/:bookId',
      name:'bookDetailsById',
      component: BookDetailsByID
    },
    {
      path: '/login',
      name:'login',
      component: Login
    },
    {
      path:'/user-info',
      name:"userInfo",
      component: UserInfo
    },
    {
      path:'/list-product/:typeBook',
      name:'listProduct',
      component: TableProduct
    },
    {
      path:'/all-product',
      name:'allProduct',
      component: AllProduct
    },
    {
      path:'/top-ten',
      name:'topTen',
      component: TopTen
    }
  ]
})
