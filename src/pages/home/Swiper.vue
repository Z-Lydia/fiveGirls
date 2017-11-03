<template>
		<swiper :options="swiperOption" ref="mySwiper">
				<swiper-slide>
						<div class="swiper-img-container">
								<img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1710/16/249e5d9c533f6e02.jpg_640x200_9d63493e.jpg" alt="去哪儿门票" style="opacity: 1;">
						</div>
				</swiper-slide>
				<swiper-slide>
						<div class="swiper-img-container">
								<img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1703/51/01864a8a35c20402.jpg_640x200_d16dcbcd.jpg" alt="去哪儿门票" style="opacity: 1;">
						</div>
				</swiper-slide>
				<swiper-slide>
						<div class="swiper-img-container">
								<img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1710/f5/57137c621d75ba02.jpg_640x200_b984ddf7.jpg" alt="去哪儿门票" style="opacity: 1;">
						</div>
				</swiper-slide>
				<swiper-slide>
						<div class="swiper-img-container">
								<img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1711/c5/2b4166f592b33202.jpg_640x200_27b41388.jpg" alt="去哪儿门票" style="opacity: 1;">
						</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
		</swiper>

</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data() {
				return {
						swiperOption: {
								autoplay: 3000,
								direction: 'horizontal',
								autoHeight: true,
								pagination: '.swiper-pagination',
								observeParents: true
						}
				}
		},
		components: {
				swiper,
				swiperSlide
		}
	}
</script>
<style>
	.swiper-img-container {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	
	.swiper-img-container img {
		width: 100%;
	}
</style>