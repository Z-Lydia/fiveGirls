<template>
	<div>
		<cityList-header :hotCity="this.$store.state.hotCity" />
	</div>
  	
</template>

<script>
import Header from "./components/Header";

export default {
	components: {
		"cityList-header":Header
	},

	mounted() {
		if (!this.$store.state.hotCity.length) {
			this.$store.dispatch("gethotCity");
		};
	}
}
</script>

<style>

</style>