<template>
  	<div>
	  	<div class="list-nav-container">
	  		<div class="All-categories"  @touchstart="handleIsShow1" :class="{ ClickchangeStyle : isChange1 }">全部分类</div>
	  		<div class="buzz-high"  @touchstart="handleIsShow2" :class="{ ClickchangeStyle : isChange2 }">人气最高</div>
	  	</div>
	  	<div class="list-nav-child-list">
	  		<div class="All-categories-list" v-show="isshow1">
		  		<div class="All-categories-list-con">
		  			<ul>
			  			<li><span></span><a>运动健身</a><em>470</em></li>
			  			<li><span></span><a>文化古迹</a><em>470</em></li>
			  			<li><span></span><a>农家度假</a><em>470</em></li>
			  			<li><span></span><a>演出</a><em>470</em></li>
			  			<li><span></span><a>游乐场</a><em>470</em></li>
			  			<li><span></span><a>自然风光</a><em>470</em></li>
			  			<li><span></span><a>公园</a><em>470</em></li>
			  			<li><span></span><a>户外拓展</a><em>470</em></li>
			  			<li><span></span><a>室内娱乐</a><em>470</em></li>
			  			<li><span></span><a>温泉</a><em>470</em></li>
			  			<li><span></span><a>演出</a><em>470</em></li>
			  			<li><span></span><a>游乐场</a><em>470</em></li>
			  			<li><span></span><a>自然风光</a><em>470</em></li>
			  			<li><span></span><a>公园</a><em>470</em></li>
			  			<li><span></span><a>户外拓展</a><em>470</em></li>
			  		</ul>
		  		</div>	
	  		</div>
		  	<div class="buzz-high-list" v-show="isshow2">
			  	<div class="buzz-high-list-con">
			  		<ul>
			  			<li>推荐排序</li>
			  			<li>离我最近</li>
			  			<li>人气最高</li>
			  		</ul>
			  	</div>	
		  	</div>	
	  	</div>
  	</div>
</template>

<script>

export default {

	data: function(){
		var isshow1 = false;
		var isshow2 = false;
		var isChange1 = false;
		var isChange2 = false;
		return {
			isshow1,
			isshow2,
			isChange1,
			isChange2,
		}
	},
	methods: {
		handleIsShow1: function(){
			this.isshow1 = !this.isshow1;
			this.isChange1 = !this.isChange1;
			this.isChange2 = false;
			this.isshow2 = false;
		},
		handleIsShow2: function(){
			this.isshow2 = !this.isshow2;
			this.isChange2 = !this.isChange2;
			this.isChange1 = false;
			this.isshow1 = false;
		}
	}
	
}
</script>

<style>
	.list-nav-container{
		display:flex;
		height:.9rem;
		line-height:.9rem;
		border-bottom:1px solid #999;
		background:#fff;
	}
	.list-nav-container div{
		width:50%;
		text-align: center;
		position: relative;
	}
	.list-nav-container div::after{
		content:"";
		position: absolute;
		top: .3rem;
		right: .75rem;
		width:0;
		height:0;
		border:5px solid transparent;
		border-bottom-Color:#ccc;
	}
	.All-categories{
		box-sizing:border-box;
		border-right:1px solid #ccc;
	}
	.All-categories-list,.buzz-high-list{
		position: fixed;
		top:1.68rem;
		left:0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0.3);
		z-index:1;
	}
	.All-categories-list-con{
		width: 100%;
		height: 4.8rem;
		overflow: auto;
		background: #f5f5f5;
	}
	.All-categories-list-con ul{
		width: 50%;
		height: auto;
		box-sizing:border-box;
		border-right: 1px solid #999;
		background:#fff;
	}
	.All-categories-list-con ul li{
		height: .8rem;
		line-height: .8rem;
		border-bottom: 1px solid #f5f5f5;
		font-size: .24rem;
		overflow: hidden;
	}
	.All-categories-list-con ul li span{
		display: inline-block;
		width: .3rem;
		height: .3rem;
		float: left;
	}
	.All-categories-list-con ul li a{
		display: inline-block;
		color: #333;
		float:left;
		padding-left: .2rem;
	}
	.All-categories-list-con ul li em{
		color: #999;
		float: right;
		padding-right: .3rem;
	}
	.buzz-high-list-con{
		width: 100%;
		height: 2.4rem;
		background: #fff;
	}
	.buzz-high-list-con ul{
		width: 100%;
		height: 100%;
		background: #fff;
	}
	.buzz-high-list-con ul li{
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		border-bottom: 1px solid #999;
		text-align: center;
		color: #333;
		font-size: .24rem;
	}
	.buzz-high-list-con ul li:last-child{
		border-bottom: none;
	}
	.ClickchangeStyle{
		color: #00bcd4;
	}
	.list-nav-container .ClickchangeStyle::after{
		content:"";
		position: absolute;
		top: .4rem;
		right: .75rem;
		width:0;
		height:0;
		border:5px solid transparent;
		border-top-Color:#00bcd4;
	}
</style>
