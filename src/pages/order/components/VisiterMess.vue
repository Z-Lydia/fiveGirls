<template>
	<div class="VisiterMess-container">
		<form class="VisiterMess-From">
			<ul>
				<li>
					<label for="VisitName">游客1</label>
					<input type="text" id="VisitName" class="VisitNameInput" placeholder="游客姓名" />
					<span class="iconfont icon-yonghuxinxi"></span>
				</li>
				<li>
					<label for="VisitPhone">手机号</label>
					<span class="phone-possessions">+86<a class="iconfont icon-gengduo"></a></span>
					<input type="text" id="VisitPhone" class="VisitPhoneInput" placeholder="请填写手机号" />
				</li>
				<li>
					<label for="VisitIdCard">身份证</label>
					<input type="text" id="VisitIdCard" class="VisitIdCardInput" placeholder="请填写正确的身份证号号码" />
				</li>
			</ul>
			<ol>
				<li v-for="n in ticketNum">
					<div class="visitorMess">
						<label :for='2*n'>游客<em>{{ n+1 }}</em></label>
						<input type="text" :id='2*n' class="VisitNameInput" placeholder="游客姓名" />
						<span class="iconfont icon-yonghuxinxi"></span>
					</div>
					<div class="visitorMess">
						<label :for='2*n-1'>身份证</label>
						<input type="text" :id="2*n-1" class="VisitIdCardInput" placeholder="请填写正确的身份证号号码" />
					</div>
					
				</li>
			</ol>
		</form>
		<p class="hot-tel"><span>咨询电话</span></p>
		<div class="Visiter-Submit">
			<ul>
				<li class="all-price" @click="isshow">
					<span>产品价格</span>
					<a>￥<em>{{ ticketPrice*(ticketNum+1) || 40 }}</em></a>
					<span class="iconfont icon-shang"></span>
				</li>
				<li class="submit-Btn">提交订单</li>
			</ul>
		</div>
		<div class="Order-footer-mask" v-if="show">
			<div class="Detail-ticket">
				<p>【上午戏】 故宫成人票凭身份证入园</p>
				<a>￥<em>{{ ticketPrice }}</em> x <b>{{ (ticketNum+1) || 1 }}</b></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["ticketNum","ticketPrice"],
		data() {
			var show = false;
			return {
				show,
			}
		},
		methods: {
			isshow: function() {
				this.show = !this.show;
			}
		}
	}
</script>

<style>
	.VisiterMess-container {
		width: 100%;
	}	
	.VisiterMess-From ul {
		margin-bottom: .2rem;
	}	
	.VisiterMess-From ol li{
		margin-top: .2rem;
	}
	.VisiterMess-From ul li, .visitorMess {
		height: 1rem;
		line-height: 1rem;
		padding: 0 .2rem;
		border-bottom: 1px solid #ccc;
		font-size: .3rem;
		color: #616161;
		font-family: "微软雅黑";
		overflow: hidden;
		background: #fff;
	}
	.VisiterMess-From ul li label, .visitorMess label{
		display: inline-block;
		width: 1.6rem;
		float: left;
	}	
	.VisiterMess-From ul li input, .visitorMess input {
		height: .38rem;
		border: none;
		font-size: .3rem;
		color: #212121;
		font-family: "微软雅黑";
		margin-top: .31rem;
		float: left;
	}
	.icon-yonghuxinxi {
		float: right;
		width: .4rem;
		height: .5rem;
		font-size: .35rem;
		color: #00BCD4;
		margin-top: .04rem;
	}
	.VisitPhoneInput {
		width: 2rem;
	}	
	.VisitIdCardInput {
		width: 4.22rem;
	}
	.phone-possessions {
		float: left;
		height: .5rem;
		line-height: .5rem;
		text-align: center;
		border: 1px solid #ccc;
		font-size: .28rem;
		margin-right: .2rem;
		margin-top: .23rem;
		padding: 0 .02rem;
	}	
	.icon-gengduo {
		color: #999;
		font-size: .28rem;
	}	
	.hot-tel {
		font-size: .24rem;
		color: #00BCD4;
		line-height: .6rem;
		background: #f5f5f5;
		margin-bottom: .2rem;
		overflow: hidden;
	}	
	.hot-tel span {
		float: right;
		padding: .1rem .3rem 0 0;
	}	
	.Visiter-Submit {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		border-top: 1px solid #ccc;
		height: 1rem;
	}	
	.Visiter-Submit ul {
		width: 100%;
		line-height: 1rem;
		overflow: hidden;
	}
	.Visiter-Submit ul li {
		line-height: 1rem;
		float: left;
		width: 50%;
		text-align: center;
	}	
	.Visiter-Submit ul li:first-child {
		background: #fff;
	}	
	.all-price span:nth-child(1),
	.all-price a {
		font-size: .24rem;
		color: #ff9800;
	}	
	.all-price a em {
		font-size: .4rem;
		color: #ff9800;
	}	
	.icon-shang {
		font-size: .32rem;
		color: #ccc;
	}	
	.Visiter-Submit ul li:last-child {
		background: #ff9800;
		color: #fff;
		font-size: .36rem;
	}	
	.Order-footer-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 1rem;
		background: rgba(0, 0, 0, 0.2);
	}	
	.Detail-ticket {
		width: 100%;
		height: 1.2rem;
		position: absolute;
		bottom: 0;
		background: #fff;
		padding: .2rem 0;
	}	
	.Detail-ticket p {
		font-size: .36rem;
		padding: .2rem;
		color: #333;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}	
	.Detail-ticket a {
		color: #9e9e9e;
		font-size: .28rem;
		padding-left: .2rem;
	}
	.visitorMess {
		
	}
</style>