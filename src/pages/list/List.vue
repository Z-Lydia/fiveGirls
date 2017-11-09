<template>
	<div>
		<list-header />
		<list-nav />
		<list-con />
	</div>
</template>

<script>
	import ListHeaderComponent from "./ListHeader";
	import listNavComponent from "./listnav";
	import ListConComponent from "./ListCon";
	
	
	export default {
		components: {
			"list-header": ListHeaderComponent,
			"list-nav": listNavComponent,
			"list-con": ListConComponent
		},
		methods: {
		},
		mounted() {
			if(!this.$store.state.list.listInfo.length){
				this.$store.dispatch("getlistInfo");
			}
			
		}
	}
</script>

<style>
</style>