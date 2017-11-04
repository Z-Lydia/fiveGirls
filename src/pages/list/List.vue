<template>
  	<div>
  		<list-header />
  		<list-con/>
  	</div>
</template>

<script>
import ListHeaderComponent from "./ListHeader";
import ListConComponent from "./ListCon";
export default {
	components: {
		"list-header": ListHeaderComponent,
		"list-con":ListConComponent
	}
}
</script>

<style>
	
</style>