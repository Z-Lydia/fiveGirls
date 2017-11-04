<template>
  	<div class="spot-container">
	  	<div class="spot-filter">
	  		<ul class="spot-filter-list" :left="left">
				<li class="spot-filter-listItem" is="spot-list" v-for="item in spotarr" :item="item"></li>
	  		</ul>
	  		<div @click="show=!show" class="status-switch">
	  			<span class="switch-icon iconfont icon-jiantouxia"></span>
	  		</div>
	  	</div>
  		<div v-show="show" class="spot-check">
  			<p class="spot-check-title">游玩景点<span>（可多选）</span></p>
  			<ul class="spot-check-list">
				<li class="spot-filter-listItem spot-check-listItem" is="spot-list" v-for="item in spotarr" :item="item"></li>
  			</ul>
  		</div>
  	</div>
</template>

<script>
var spotList = {
	props:["item"],
	template:"<li><a>{{item}}</a></li>",
}
export default {
	data:function(){
		var spotarr = ["八达岭长城","古北水镇","故宫","鸟巢","司马台长城","颐和园","天安门广场","水立方","古北水镇天然温泉","恭王府","什刹海","定陵","古北口文化文物旅游区","天坛公园","明十三陵","北京动物园","什刹海","定陵","古北口文化文物旅游区","天坛公园","明十三陵","北京动物园","什刹海","定陵","古北口文化文物旅游区","天坛公园","明十三陵","北京动物园","什刹海","定陵","古北口文化文物旅游区","天坛公园","明十三陵","北京动物园"];
		var left = 0;
		var show = false;
		return {
			spotarr,
			left,
			show
		}
	},
	components:{
		"spot-list":spotList
	},
	methods:{
	}
}
</script>

<style>
	.spot-container{
		height: .68rem;
		background: #e5e7e8;
		position: relative;
		padding: .08rem .12rem;
	}
	.spot-filter{
		overflow: auto;
	}
	.spot-filter-list{
		width: 4913px;
		height: .68rem;
		position: absolute;
	}
	.spot-filter-listItem{
		float: left;
		padding: .04rem .08rem;
	} 
	.spot-filter-listItem a{
	    display: block;
	    min-width: .26rem;
	    padding: 0 .22rem;
	    background: #fff;
	    color: #212121;
	    font-size: .26rem;
	    line-height: .56rem;
	    border-radius: .04rem;
	}
	.status-switch {
		position: absolute;
	    z-index: 3;
	    top: 0;
	    right: 0;
	    width: .8rem;
	    height: .78rem;
	    background: #e5e7e8;
	    text-align: center;
	}
	.switch-icon{
		line-height: .8rem
	}
	.spot-check{
		position: absolute;
		z-index: 2;
		background: #e5e7e8;
		width: 100%;
		top: 0;
		left: 0;
		padding: .08rem .12rem;
		max-height: 6rem;
		overflow: auto;
	}
	.spot-check-title{
		color: #212121;
	    font-size: .28rem;
	    line-height: .8rem;
	    text-indent: .2rem;
	}
	.spot-check-title span{
		font-size: .24rem;
	}
	.spot-check-listItem{
		padding-top: .08rem;
    	padding-bottom: .08rem
	}
</style>