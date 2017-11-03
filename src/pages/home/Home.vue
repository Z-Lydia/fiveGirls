<template>
  	<div>
		<home-header />
		<week-swiper />
		<home-scenery />
		<week-list />  	
	</div>
  
</template>

<script>
import HeaderComponent from "./Header";
import SceneryComponent from "./Scenery";
import SwiperComponent from "./Swiper";
import WeekListComponent from "./WeekList";

export default {
	components: {
		"home-header": HeaderComponent,
		"home-scenery": SceneryComponent,
		"week-swiper": SwiperComponent,
		"week-list": WeekListComponent
	}
}
</script>
