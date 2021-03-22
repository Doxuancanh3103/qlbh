import Vue from 'vue'
import Router from 'vue-router'
import TestComponent from "../components/TestComponent";
import MyHeader from "../components/MyHeader";


export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: MyHeader
    }
  ]
})
