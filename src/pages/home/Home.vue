<template>
  	<div>
		<home-header />
		<home-swiper :swiperInfo="this.$store.state.swiperInfo" />
		<home-IconSwiper :iconSwiperInfo="this.$store.state.iconSwiperInfo" />
		<home-activity :activityInfo="this.$store.state.activityInfo" />
		<home-hotsale :hotsaleInfo="this.$store.state.hotsaleInfo" />
		<home-week :weekInfo="this.$store.state.weekInfo" />  	
	</div>
  
</template>

<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
import Activity from "./components/Activity";
import Hotsale from "./components/Hotsale";
import WeekList from "./components/WeekList";
import axios from 'axios';

export default {

	components: {
		"home-header": Header,
		"home-swiper": Swiper,
		"home-IconSwiper": IconSwiper,
		"home-activity":Activity,
		"home-hotsale":Hotsale,
		"home-week": WeekList
	},

	methods: {
		getHomeData() {
			axios.get('/static/index.json')
				.then(this.handleGetDataSucc.bind(this))
				.catch(this.handleGetDataErr.bind(this))
		},

		handleGetDataSucc( response ) {
			if (response.status === 200) { 
				const {data}  = response.data;
				this.$store.commit( "changeData",data );
			}
		},

		handleGetDataErr( err ) {
			console.log(err)
		}
	},

	mounted() {
		if (!this.$store.state.swiperInfo.length) {
			this.getHomeData();
		}
		
	}
}
</script>
