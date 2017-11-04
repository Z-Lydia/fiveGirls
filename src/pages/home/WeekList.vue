<template>
	<div>
		<div class="week-list-container">
			<h2 class="week-list-title">周末去哪儿</h2>
			<div>
				<div class="product-item">
					<a>
						<div class="product-imgcontainer">
							<img src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" alt="北京温泉排行榜">
						</div>
						<div class="product-info">
							<p class="product-name">北京温泉排行榜</p>
							<p class="product-desc">细数北京温泉，温暖你的冬天</p>
						</div>
					</a>
				</div>
				<div class="product-item">
					<a>
						<div class="product-imgcontainer">
							<img src="http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg" alt="寻找北京的皇城范儿">
						</div>
						<div class="product-info">
							<p class="product-name">寻找北京的皇城范儿</p>
							<p class="product-desc">数百年的宫廷庙宇，至今依旧威严霸气</p>
						</div>
					</a>
				</div>
				<div class="product-item">
					<a>
						<div class="product-imgcontainer">
							<img src="http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg" alt="北京必游TOP10">
						</div>
						<div class="product-info">
							<p class="product-name">北京必游TOP10</p>
							<p class="product-desc">来北京必去的景点非这些地方莫属</p>
						</div>
					</a>
				</div>
				<div class="product-item">
					<a>
						<div class="product-imgcontainer">
							<img src="http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg" alt="登高望远秋色佳">
						</div>
						<div class="product-info">
							<p class="product-name">登高望远秋色佳</p>
							<p class="product-desc">山顶满眼彩色，此情此景醉了</p>
						</div>
					</a>
				</div>
				<div class="product-item">
					<a>
						<div class="product-imgcontainer">
							<img src="http://img1.qunarzz.com/sight/source/1509/28/1bb74b851279e6.jpg_r_640x214_64ebf0ee.jpg" alt="秋高气爽去礼佛">
						</div>
						<div class="product-info">
							<p class="product-name">秋高气爽去礼佛</p>
							<p class="product-desc">秋风伴着美妙经声，品尝秋的另一番滋味</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

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
	}
	.product-info p{
		padding-bottom: .15rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.product-name{
		font-size: .32rem;
		color: #000;
	}
	.product-desc{
		font-size: .24rem;
		color: #333;
	}
</style>