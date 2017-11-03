<template>
	<div>
		<home-header />
		<week-swiper />
		<week-list />
	</div>

</template>

<script>
	import HeaderComponent from "./Header";
	import SwiperComponent from "./Swiper";
	import WeekListComponent from "./WeekList";

	export default {
		components: {
			"home-header": HeaderComponent,
			"week-swiper": SwiperComponent,
			"week-list": WeekListComponent,			
		}
	}
</script>

<style>

</style>