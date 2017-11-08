import Vue from "vue"
import Vuex from "vuex"
import city from '../pages/cityList/module.js'

Vue.use( Vuex );

export default new Vuex.Store({
	modules: {
		city:city
	},

	state:{
			swiperInfo: [],
			iconSwiperInfo: [],
			activityInfo: [],
			hotsaleInfo: [],
			weekInfo: [],		
	},
	actions:{
		
	},
	mutations:{
		changeData( state,data ){
			state.swiperInfo = data.swiperInfo;
			state.iconSwiperInfo = data.iconSwiperInfo;
			state.activityInfo = data.activityInfo;
			state.hotsaleInfo = data.hotsaleInfo;
			state.weekInfo = data.weekInfo;
		},

		
	},
	getters:{
		
	}
});
