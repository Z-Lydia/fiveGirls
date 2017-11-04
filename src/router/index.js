import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import OneDay from '@/pages/oneDay/OneDay'

Vue.use(Router)//Vue使用Vue-router

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path:'/oneDay',
      name:'OneDay',
      component:OneDay
    }
  ]
})
