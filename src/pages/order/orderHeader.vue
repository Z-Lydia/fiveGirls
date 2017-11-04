<template>
	<div class="order-header">
		<span class="order-height-left iconfont icon-return"></span>
		<span class="order-header-title">订单填写</span>
		<span class="order-header-right" @click="handleLoginBtnClick">登录</span>
	</div>
</template>

<script>
	export default {
		methods: {
			handleLoginBtnClick: function(){
				alert("123");
			}
		}
	}
</script>

<style scoped>
	.order-header{
		display: flex;
		height:.88rem;
		line-height: .88rem;
		background: #00bcd4;
		color: #fff;
		padding: 0 .15rem;
	}
	.order-height-left{
		float: left;	
		width: .8rem;
		text-align: center;
		font-size: .5rem;
	}
	.order-header-title{
		float: left;
		width: 4.4rem;
		text-align: center;
		font-size: .32rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.order-header-right{
		float: right;
		width: 1rem;
		text-align: center;
		font-size:.28rem;
	}
</style>