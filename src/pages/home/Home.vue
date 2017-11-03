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
	}
}
</script>

<style>
	
</style>