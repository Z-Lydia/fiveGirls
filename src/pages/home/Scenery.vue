<template>
	<div class="scenery-list">
		<div class="scenery-list-con">
			<h2 class="scenery-list-title">热销推荐</h2>
			<div>
				<ul>
					<li class="scenery-list-prod">
						<div class="scenery-list-img">
							<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg">
						</div>
						<div class="scenery-list-info">
							<div class="scenery-list-site">故宫</div>
							<div class="scenery-list-desc">东方宫殿建筑代表，世界宫殿建筑典范</div>
						</div>
						<div class="scenery-list-price">
							¥<em class="scenery-price-num">40</em>
							<span class="scenery-price-text">起</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
			<div>
				<ul>
					<li class="scenery-list-prod">
						<div class="scenery-list-img">
							<img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg">
						</div>
						<div class="scenery-list-info">
							<div class="scenery-list-site">八达岭长城</div>
							<div class="scenery-list-desc">不到长城非好汉</div>
						</div>
						<div class="scenery-list-price">
							¥<em class="scenery-price-num">25</em>
							<span class="scenery-price-text">起</span>
						</div>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li class="scenery-list-prod">
						<div class="scenery-list-img">
							<img src="http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg">
						</div>
						<div class="scenery-list-info">
							<div class="scenery-list-site">颐和园</div>
							<div class="scenery-list-desc">保存完整的一座皇家行宫御苑</div>
						</div>
						<div class="scenery-list-price">
							¥<em class="scenery-price-num">22</em>
							<span class="scenery-price-text">起</span>
						</div>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li class="scenery-list-prod">
						<div class="scenery-list-img">
							<img src="http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg">
						</div>
						<div class="scenery-list-info">
							<div class="scenery-list-site">北京欢乐谷</div>
							<div class="scenery-list-desc">七大主题园区带你畅享北京欢乐谷</div>
						</div>
						<div class="scenery-list-price">
							¥<em class="scenery-price-num">28</em>
							<span class="scenery-price-text">起</span>
						</div>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li class="scenery-list-prod">
						<div class="scenery-list-img">
							<img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_140x140_eae81520.jpg">
						</div>
						<div class="scenery-list-info">
							<div class="scenery-list-site">慕田峪长城</div>
							<div class="scenery-list-desc">秀美长城，关键是人少</div>
						</div>
						<div class="scenery-list-price">
							¥<em class="scenery-price-num">19.1</em>
							<span class="scenery-price-text">起</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="scenery-more">
				<a href="#">查看所有产品</a>
			</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.scenery-list-title {
		height: .8rem;
		padding-left: .26rem;
		line-height: .8rem;
		color: #212121;
		background:#f5f5f5;
	}
	.scenery-list-prod{
		position: relative;
	    overflow: hidden;
	    height: 1.4rem;
	    padding: .24rem;
	    border-bottom:1px solid #f5f5f5;
	}
	.scenery-list-img{
		position: absolute;
	    top: .24rem;
	    left: .24rem;
	    background: url(//s.qunarzz.com/piao_topic/image/common/default/140x140.png) no-repeat;
	    background-size: contain;
	    width: 1.4rem;
	    height: 1.4rem;
	}
	.scenery-list-img img{
		vertical-align: top;
	    width: 1.4rem;
	    height: 1.4rem;	
	}
	.scenery-list-info{
	    margin-left: 1.6rem;
	}
	.scenery-list-desc{
	    overflow: hidden;
	    margin-bottom: .1rem;
	    height: .4rem;
	    line-height: .4rem;
	    color: #9e9e9e;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.scenery-list-site{
		overflow: hidden;
	    margin-top: .04rem;
	    margin-bottom: .1rem;
	    color: #212121;
	    font-size: .3rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.scenery-list-price{
		margin-left: 1.6rem;
		color: #ff8300;
	}
	.scenery-list-price .scenery-price-num{
	    font-size: .36rem;
	    padding: 0 .04rem
	}
	.scenery-list-price .scenery-price-text{
	    color: #9e9e9e;
    	font-size: .24rem;
	}
	.scenery-more{
	    height: .88rem;
	    color: #00afc7;
	    line-height: .88rem;
	    text-align: center
	}
	.scenery-more a{
	    color: #00afc7;
    	text-decoration: none;
	}
</style>