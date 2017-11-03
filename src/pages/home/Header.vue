<template>
  	<header class="header">
  		<a class="header-left iconfont icon-return"></a>
  		<div class="header-title">
  			<a class="linkarea" title="北京">
  				<span class="single-line">输入城市/景点/游玩主题</span>
  			</a>
  		</div>
  		<div class="header-right">
  			<a title="城市选择" class="linkarea">
  				<span class="nav-city">北京</span>
  			</a>
  		</div>
  	</header>
</template>

<script>
export default {}
</script>

<style>
	.header{
		height:.88rem;
		background:#00bcd4;
		position:relative
	}
	.header-left{
		float:left;
		line-height:.88rem;
		color:#fff;
	}
	.header-left.iconfont{
		font-size:.6rem
	}
	.header-title{
		position:absolute;
		height:.6rem;
		background:#fff;
		left:.7rem;
		right:1.36rem;
		margin-top:.14rem;
		border-radius:.04rem;
		text-indent:.2rem;
		line-height:.6rem;
	}
	.header-title a{
		color:#ccc;
		position: relative;
		padding-right: .3rem;
	}
	.header-right{
		float:right;
		line-height:.88rem;
		width:1.32rem;
		text-align:center
	}
	.header-right a{
		color:#fff;
	}
	.nav-city{
		width:1rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline-block;
	}
	.nav-city::after{
		content: "\0020";
		position: absolute;	
		top: .4rem;
		right: .14rem;
		width: 0;
		height: 0;
		border: .1rem solid transparent;
		border-top: .1rem solid #fff;
		margin-left: .2rem;
	}
</style>