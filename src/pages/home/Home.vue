<template>
  	<div>
		<home-header />
	  	<home-scenery />
	</div>
  
</template>

<script>
import HeaderComponent from "./Header";
import SceneryComponent from "./Scenery";

export default {
	components: {
		"home-header": HeaderComponent,
		"home-scenery": SceneryComponent
=======
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
>>>>>>> 92dc33605b44db4e288a733ce25526d957cca2b5
	}
</script>

<style>

</style>