import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import MyHeader from "../components/MyHeader";
import BookDetails from "../components/BookDetails";
import Cart from "../components/Cart"
import BookDetailsByID from "../components/BookDetailsByID";
import CheckOuts from "../components/CheckOuts";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/header',
      name: 'Header',
      component: MyHeader
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
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path:'/checkouts',
      name:'checkouts',
      component: CheckOuts
    }
  ]
})
