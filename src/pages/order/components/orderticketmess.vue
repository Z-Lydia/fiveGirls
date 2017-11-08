<template>
	<div class="orderticketmess">
		<div class="orderticket-con">
			<div class="orderticket-con-left">
				<h2>【上午场】故宫成人票凭身份证入园</h2>
				<ul>
					<li><span class="iconfont icon-shijian"></span>2017-11-11</li>
					<li><span class="iconfont icon-duigou"></span>条件退</li>
				</ul>
			</div>
			<div class="orderticket-con-right">
				<div class="orderticket-price">
					<span>¥<ticketPrice :price="price"></ticketPrice></span> /张
				</div>
				<div class="orderticket-know">预订须知</div>
			</div>
		</div>
	</div>
</template>

<script>
	var ticketPrice = {
			props: ["price"],
			template: "<em> {{ price }} </em>"
		}
	export default {
		components: {
			"ticketPrice": ticketPrice
		},
		data: function(){
			var price = 40;
			return {
				price
			}
		},
		mounted() {
			this.$emit("SendTicketPrice", this.price);
		}
	}
</script>

<style scoped>
	.orderticketmess{
		background: #fff;
		margin-bottom: .2rem;
		padding: .15rem 0;
	}
	.orderticket-con{
		overflow: hidden;
	}
	.orderticket-con-left{
		float: left;
		width: 4.2rem;	
		padding: 0 .15rem;
	}
	.orderticket-con-left h2{
		font-size: .32rem;
		line-height: .44rem;
		margin-bottom: .04rem;
	}
	.orderticket-con-left ul{
		overflow: hidden;
		line-height: .44rem;
		font-size: .24rem;
	}
	.orderticket-con-left ul li{
		float: left;
		padding-right: .2rem;
		font-size: ;
	}
	.orderticket-con-left .icon-shijian, .orderticket-con-left .icon-duigou{
		padding-right: .1rem;
		color: #00bcd4;
		font-size: .2rem;
	}
	.orderticket-con-right{
		width: 1.6rem;
		float: right;
		text-align: right;
		padding-right: .2rem;
	}
	.orderticket-price{
		padding-bottom: .2rem;
		font-size: .24rem;
	}
	.orderticket-price span{
		color: #ff8300;
	}
	.orderticket-price span em{
		font-size: .4rem;
		padding-left: .05rem;
	}
	.orderticket-know{
		color: #00BCD4;
		font-size: .28rem ;
		padding-right: .2rem;
		font-weight: bold;
		width: 1.6rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>