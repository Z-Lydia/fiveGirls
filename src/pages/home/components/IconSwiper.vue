<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<swiper-slide>

			<div class="category-container">
				<div class="category-img-container" v-for="(item,index) in iconSwiperInfo" :key="item.id" v-if="index<8">
					<img :src="item.imgUrl" />
					<div class="keywords">{{item.title}}</div>
				</div>
			</div>
		</swiper-slide>
		<swiper-slide>
			<div>
				<div div class="category-container">
					<div class="category-img-container" v-for="(item,index) in iconSwiperInfo" :key="item.id" v-if="index>7 && index<16">
						<img :src="item.imgUrl" />
						<div class="keywords">{{item.title}}</div>
					</div>
				</div>
			</div>

		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'

	export default {
		props:[ "iconSwiperInfo" ],

		data() {
				return {
					swiperOption: {
						direction: 'horizontal',
						autoHeight: true,
						pagination: '.swiper-pagination',
						observeParents: true,
					}
				}
		},
			components: {
				swiper,
				swiperSlide
			}
	}
</script>

<style scoped="scoped">
	.category-container {
		height: 3.7rem;
		width: 100%;
		padding-top: .1rem;
		display: flex;
		flex-wrap: wrap;
		text-align: center;
	}
	
	.category-img-container {
		width: 25%;
		height: 1.3rem;
	}
	
	.keywords {
		padding-top: .2rem;
	}
	
	.category-img-container img {
		width: .66rem;
		height: .66rem;
	}
	
	.swiper-img {
		width: 100%;
	}
</style>