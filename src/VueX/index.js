import Vue from "vue"
import Vuex from "vuex"


Vue.use( Vuex );

export default new Vuex.Store({
	state:{
			swiperInfo: [],
			iconSwiperInfo: [],
			activityInfo: [],
			hotsaleInfo: [],
			weekInfo: []
	},
	actions:{},
	mutations:{
		changeData( state,data ){
			state.swiperInfo = data.swiperInfo;
			state.iconSwiperInfo = data.iconSwiperInfo;
			state.activityInfo = data.activityInfo;
			state.hotsaleInfo = data.hotsaleInfo;
			state.weekInfo = data.weekInfo;
		}
	},
	getters:{}
});
