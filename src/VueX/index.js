import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'

Vue.use( Vuex );

export default new Vuex.Store({
	state:{
			swiperInfo: [],
			iconSwiperInfo: [],
			activityInfo: [],
			hotsaleInfo: [],
			weekInfo: [],
			hotCity:[],
	},
	actions:{
		gethotCity( context ){
			axios.get( '/static/city.json' )
				.then( (response) =>{
					if( response.status === 200 ){
						const {domestic} = response.data.data;
						var s = new Set();
						for( var i=0;i<16;i++ ){
							var ind = Math.floor(Math.random() * domestic.length);
							s.add(domestic[ind])
						}
						context.commit( "changeHotCityData",Array.from(s) );
					}
				} )
				.catch( (err) =>{
					console.log(err);
				} )
		}
	},
	mutations:{
		changeData( state,data ){
			state.swiperInfo = data.swiperInfo;
			state.iconSwiperInfo = data.iconSwiperInfo;
			state.activityInfo = data.activityInfo;
			state.hotsaleInfo = data.hotsaleInfo;
			state.weekInfo = data.weekInfo;
		},

		changeHotCityData( state,data ){
			state.hotCity = data;
		}
	},
	getters:{}
});
