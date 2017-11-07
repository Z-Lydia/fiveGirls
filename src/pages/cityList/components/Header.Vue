<template>
	<div>
		<header class="header">
			<div class="header-left iconfont icon-return"></div>
			<div class="header-title">
				<div @click="handleSelectInland" class="areaSwitch inland" :class="{select:IsSelect==='inland'}">国内</div>
				<div @click="handleSelectForeign" class="areaSwitch foreign" :class="{select:IsSelect==='foreign'}">国外</div>
			</div>
		</header>
		<div class="SearchArea">
			<input @click="handleSearch" class="SearchInput" type="search" placeholder="输入城市名或拼音" ref="SearchInput" />
		</div>
		<div class="location-containner">
			<h6 class="area-title">您的位置</h6>
			<div class="location">
				<div class="location-city CitySelect">北京</div>
			</div>
		</div>
		<div class="hotCity-containner">
			<h6 class="area-title">热门城市</h6>
			<div class="hotCity location">
				<div class="hotCity-city  location-city" v-for="(item,index) in hotCity" :class="{CitySelect:ind===index}" @click="handleHotCityClick(index)">{{item.name}}</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		props:["hotCity"],

		data() {
			return {
				IsSelect:'inland',
				ind:0
			}
		},

		methods:{
			handleSelectInland:function(){
				this.IsSelect='inland';

			},

			handleSelectForeign:function(){
				this.IsSelect='foreign';
			},

			handleSearch:function(){
				this.$refs.SearchInput.style.textAlign='left';
				this.$refs.SearchInput.placeholder='';
			},

			handleHotCityClick:function( index ){
				this.ind = index;
			}
		}

	}

</script>

<style scoped>
	.header{
		height: .88rem;
		overflow: hidden;
		text-align: center;
		background: #00bcd4;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.header-left{
		width: .4rem;
		position: absolute;
		top: 0;
		left: 0;
		padding: 0 .1rem;
		line-height: .88rem;
		color: #fff;
		font-size: .5rem;
	}
	.header-title{
		height: .56rem;
		width: 4.04rem;
		color: #fff;
		display: flex;
		flex-direction: row;
	}
	.areaSwitch{
		width: 2rem;
		border: 1px solid #fff;
		line-height: .54rem;
	}
	.inland{
		border-top-left-radius: 0.1rem;
		border-bottom-left-radius: 0.1rem;
	}
	.foreign{
		border-top-right-radius: 0.1rem;
		border-bottom-right-radius: 0.1rem;
	}
	.select{
		color: #00bcd4;
		background: #fff;
	}
	.SearchArea{
	    padding: 0 .2rem .1rem .2rem;
	    background: #00bcd4;
	    font-size: .26rem;
	    color: #9e9e9e;
	}
	.SearchInput{
		display: block;
	    width: 100%;
	    line-height: .3rem;
	    padding: .16rem 0 .16rem .1rem;
	    background: #fff;
	    border: 0;
	    border-radius: .06rem;
	    text-align: center;
	}
	.area-title{
		line-height: .54rem;
	    padding-left: .3rem;
	    color: #616161;
	    font-size: .26rem;
	    background: #f5f5f5;
	}
	.location{
		padding: .04rem .5rem .26rem .2rem;
    	overflow: hidden;
	    background: #fff;
	}
	.location-city{
		box-sizing: border-box;
	    width: 30%;
	  	margin-top: .2rem;
    	color: #212121;
	    line-height: .56rem;
	    text-align: center;
	    border: .02rem solid #c9cccd;
	    border-radius: .06rem;
	}
	.CitySelect{
		border-color: #00afc7;
		color: #00afc7;
	}
	.hotCity{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>