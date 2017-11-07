<template>
  	<div ref="IndexLoaded" id="IndexLoaded">
		<home-header />
		<home-swiper />
		<home-IconSwiper />
		<home-activity />
		<home-hotsale  />
		<home-week  />  
		<div ref="LoosenLoad" style="display: none;">松开加载</div>
	</div>
</template>
<script src="../../utils/zepto.js"></script>
<script src="../../utils/demoUtils.js"></script>
<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
import Activity from "./components/Activity";
import Hotsale from "./components/Hotsale";
import WeekList from "./components/WeekList";
import Iscoll from "../../utils/iscroll-probe.js";

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
		init() {
			this.LoadElem = this.$refs.IndexLoaded;
			this.LoosenLoadElem = this.$refs.LoosenLoad;
			this.flag = false; 	
			this.loading = false;
			this.myScroll = new IScroll('#IndexLoaded',{
				probeType: 3,
				moueWheel: true
			});
			this.bindEvents();
		},
		bindEvents(){
			var that = this;
			//document.addEventListener();
			that.myScroll.on('scroll',function(){
				console.log(that.myScroll.y);
			});
		}
	},
	mounted() {
		if (this.$store.getters.shouldGetData) {
			this.$store.dispatch("getHomeData");
		}	
		this.init();
	}
}
</script>
