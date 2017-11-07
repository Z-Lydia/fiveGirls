import Vue from 'vue'
import Vuex from 'vuex'

import oneDay from '../pages/oneDay/module.js'
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		oneDay:oneDay
	}
})
