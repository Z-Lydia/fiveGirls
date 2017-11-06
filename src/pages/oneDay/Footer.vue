<template>
	<div>
		<div v-show="maskShow" class="mask"></div>
		<div class="OneDay-footer-container">
			<footer class="OneDay-footer">
				<div @click="handleClassifyClick" :class="{selectIcon:isClassifySelect}" class="OneDay-classify OneDay-footer-select">
					<span class="iconfont icon-quanbufenlei OneDay-footer-icon"></span>
					<p class="OneDay-footer-tip">全部分类</p>
				</div>
				<div @click="handleFiltrteClick" :class="{selectIcon:isFiltrateSelect}" class="OneDay-filtrate OneDay-footer-select">
					<span class="iconfont icon-shaixuan OneDay-footer-icon"></span>
					<p class="OneDay-footer-tip">筛选</p>
				</div>
				<div @click="handleSortClick" :class="{selectIcon:isSortSelect}" class="OneDay-sort OneDay-footer-select">
					<span class="iconfont icon-jiage OneDay-footer-icon"></span>
					<p class="OneDay-footer-tip">推荐排序</p>
				</div>
			</footer>
			<div v-show="contentShow" class="oneDay-footer-content">
				<div v-if="footerShow===1" claass="OneDay-classify-content">
					<div class="OneDay-classify-left">
						<ul class="OneDay-classify-list">
							<li class="OneDay-classify-listItem" is="classify-List" v-for="item in classifyArr" :item="item"></li>
						</ul>
					</div>
					<div class="OneDay-classify-right"></div>
				</div>
				<div v-else-if="footerShow===2" class="OneDay-filtrate-content">
					<div class="OneDay-filtrate-left">
						<ul class="OneDay-filtrate-list">
							<li @click="handleEndClick" :class="{select:isEndSelect}" class="OneDay-filtrate-listItem">目的地</li>
							<li @click="handleStartClick" :class="{select:isStartSelect}" class="OneDay-filtrate-listItem">出发地</li>
						</ul>
					</div>
					<div class="OneDay-filtrate-right">
						<ul v-if="siteshow==='a'" class="end">
							<li class="OneDay-filtrate-listItem site-list" v-for="item in EndArr">{{item}}</li>
						</ul>
						<ul v-else class="start">
							<li class="OneDay-filtrate-listItem site-list" v-for="item in startArr">{{item}}</li>
						</ul>
					</div>
				</div>
				<div v-else-if="footerShow===3" class="OneDay-sort-content">
					<ul class="sort-list">
						<li class="sort-listItem" v-for="(item,index) in sortArr" :index="index" :class="{selectIcon:ind===index}" @click="handleSelect(index)">{{item}}</li>
					</ul>
				</div>
			</div>	
	  	</div>
  	</div>
</template>

<script>
	var classifyList = {
		props:["item"],
		template:"<li>{{item[0]}}<span>{{item[1]}}</span></li>"
	}
	export default {
		data:function(){
			var maskShow = false;
			var classifyArr = [["全部分类","173"],["一日游","149"],["文化古迹","12"],["城市观光","4"],["展馆","3"],["交通","2"],["自然风光","1"],["餐饮","1"],["温泉","1"]];
			var footerShow = 2;
			var EndArr = ["全部目的地","北京","天津","唐山","保定","承德"];
			var startArr = ["全部出发地","北京"];
			var siteshow = 'a';
			var isEndSelect = true;
			var isStartSelect = false;
			var contentShow = false;
			var isClassifySelect = false;
			var isFiltrateSelect = false;
			var isSortSelect = false;
			var sortArr = ["排序推荐","销量最高","价格最高","价格最低","热门评论","本周最热"];
			var ind =0;
			return {
				maskShow,
				classifyArr,
				footerShow,
				EndArr,
				startArr,
				siteshow,
				isEndSelect,
				isStartSelect,
				contentShow,
				sortArr,
				isClassifySelect,
				isFiltrateSelect,
				isSortSelect,
				ind
			}
		},
		components:{
			"classify-List":classifyList,
			// "site-List":siteList,
		},
		methods:{
			handleEndClick:function(){
				this.siteshow = 'a';
				this.isEndSelect = true;
				this.isStartSelect = false;
			},
			handleStartClick:function(){
				this.siteshow = 'b';
				this.isEndSelect = false;
				this.isStartSelect = true;
			},
			handleClassifyClick:function(){
				if( this.contentShow ){
					
				}else{
					this.contentShow = !this.contentShow;
					this.maskShow = !this.maskShow
				}
				this.footerShow = 1;
				this.isClassifySelect = true;
				this.isFiltrateSelect = false;
				this.isSortSelect = false;
			},
			handleFiltrteClick:function(){
				if( this.contentShow ){

				}else{
					this.contentShow = !this.contentShow;
					this.maskShow = !this.maskShow
				}
				
				this.footerShow = 2;
				this.isClassifySelect = false;
				this.isFiltrateSelect = true;
				this.isSortSelect = false;
			},
			handleSortClick:function(){
				if( this.contentShow ){
					
				}else{
					this.contentShow = !this.contentShow;
					this.maskShow = !this.maskShow
				}
				this.footerShow = 3;
				this.isClassifySelect = false;
				this.isFiltrateSelect = false;
				this.isSortSelect = true;
			},
			handleSelect:function(index){
				this.ind = index;
			}
		}
	}
</script>

<style>
	.mask{
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, .5);
		position: absolute;
		top:0;
		left:0;
		right: 0;
		bottom: 0;
		z-index: 4;
	}
	.OneDay-footer-container{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 4;
	}
	.OneDay-footer{
		left: 0;
		bottom: 0;
		background: rgba(0,0,0,.8);
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.OneDay-footer-select{
		padding: .08rem .1rem 0;
    	color: #fff;
    	display: flex;
    	flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 33.3%;
	}
	.OneDay-footer-icon{
		display: inline-block;
		height: .32rem;
		font-size: .32rem;
	}
	.OneDay-footer-tip{
		height: .4rem;
	    font-size: .24rem;
	    line-height: .4rem
	}
	.oneDay-footer-content{
		overflow: hidden;
	    position: absolute;
	    bottom: .8rem;
	    left: 0;
	    width: 100%;
	    background: #fff;
	    height: 5.28rem;
	    //border-top: .002rem solid #eaeaea;
	    overflow: auto;
	}
	.OneDay-classify-content{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.OneDay-classify-left{
		width: 40%;	
	}
	.OneDay-classify-list{
		background: #f4f5f6;
	}
	.OneDay-classify-listItem{
		padding: .24rem .1rem .24rem .2rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .4rem;
	    border-bottom: .002rem solid #eaeaea
	}
	.OneDay-classify-listItem span{
		display: inline-block;
		float: right;
		margin-right: 5%;
		font-size: .24rem;
	}
	.OneDay-classify-listItem:nth-child(1){
		background: #fff;
	}
	.OneDay-filtrate-content{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		overflow: hidden;
	}
	.OneDay-filtrate-left{
		background: #f4f5f6;
		width: 30%;
		height: 5.28rem;
	}
	.OneDay-filtrate-listItem{
		padding: .24rem .2rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .4rem;
	}
	.select{
		background: #fff;
	}
	.OneDay-filtrate-right{
		width: 70%;
		height: 5.28rem;
		overflow: hidden;
	}
	.site-list{
		border-bottom: .002rem solid #e4e6e8;
	}
	.sort-list{
		width: 100%;
		text-align: center;
	}
	.sort-listItem{
		padding: .24rem .1rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .4rem;
	    border-bottom:.001rem solid #e4e6e8
	}
	.selectIcon{
		color: #00afc7;
	}
</style>