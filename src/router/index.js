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
  ]
})
