
import Vue from 'vue'
import App from './App/APP'
import router from './router'
import store from './vuex'

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
