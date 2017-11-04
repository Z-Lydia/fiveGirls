<template>
	<div>
		<OneDay-header />
		<spot-filter />
		<OneDay-footer />
	</div>
  	
</template>

<script>
import HeaderComponent from "./Header";
import SpotFilterComponent from "./SpotFilter";
import FooterComponent from "./Footer";

export default {
	components: {
		"OneDay-header": HeaderComponent,
		"spot-filter": SpotFilterComponent,
		"OneDay-footer": FooterComponent
	}
}
</script>

<style>
	
</style>