<template>
  	<div>
		<home-header />
		<week-swiper />
		<home-location />
		<home-scenery />
		<week-list />  	
	</div>
  
</template>

<script>
import HeaderComponent from "./Header";
import SceneryComponent from "./Scenery";
import SwiperComponent from "./Swiper";
import LocationComponent from "./Location";
import WeekListComponent from "./WeekList";

export default {
	components: {
		"home-header": HeaderComponent,
		"home-scenery": SceneryComponent,
		"week-swiper": SwiperComponent,
		"home-location":LocationComponent,
		"week-list": WeekListComponent
	}
}
</script>
