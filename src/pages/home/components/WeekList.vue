<template>
	<div>
		<div class="week-list-container">
			<h2 class="week-list-title">周末去哪儿</h2>
			<div>
				<div class="product-item" v-for="item in weekInfo" :key="item.id">
					<a>
						<div class="product-imgcontainer">
							<img :src="item.imgUrl" alt="北京温泉排行榜">
						</div>
						<div class="product-info">
							<p class="product-name" ref="weekLoaded">{{item.title}}</p>
							<p class="product-desc">{{item.tip}}</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>	
	export default {
		computed: {
			weekInfo() {
				return this.$store.state.home.weekInfo;
			}
		}
	}
</script>

<style scoped>
	.week-list-container{
		width:100%;
		height: auto;
		background: #f5f5f5;
	}
	.week-list-title{
		line-height: .8rem;
		padding-left: .3rem;
		font-size:.3rem;
		color: #333;		
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.product-item{
		width: 100%;
		height: auto;
		margin-bottom: .2rem;
		background: #fff;
	}
	.product-imgcontainer{
		width: 100%;
		height: 2.47rem;
	}
	.product-imgcontainer img{
		width: 100%;
		height: 100%;
	}
	.product-info{
		height: 0.64rem;
		padding: .2rem .3rem .4rem;
		font-family: "微软雅黑";
	}
	.product-info p{
		padding-bottom: .15rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.product-name{
		font-size: .3rem;
		color: #000;
	}
	.product-desc{
		font-size: .24rem;
		color: #333;
	}
</style>