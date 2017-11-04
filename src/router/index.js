import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Order from '@/pages/order/orderHome'

Vue.use(Router)//Vue使用Vue-router

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/order',
    	name: 'Order',
    	component: Order
    }
  ]
})
