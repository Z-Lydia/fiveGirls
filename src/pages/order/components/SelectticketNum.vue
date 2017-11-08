<template>
	<div class="order-Buyticket">
		<div class="order-Buyticket-left">
			<span>购买数量</span>
			<span class="limit-num">最多买5张</span>
		</div>
		<div class="order-Buyticket-Selectnum">
			<p v-if=" Num > 1 ">
				<span class="Selectnum-minus color1 iconfont icon-jian" @click="handleMinusBtnClick"></span>
			</p>
			<p v-else>
				<span class="Selectnum-minus color2 iconfont icon-jian" @click="handleMinusBtnClick"></span>
			</p>
			<SelectNum :Num="Num"  class="ticket-Select-Num"></SelectNum>
			<span class="Selectnum-add iconfont icon-tianjia" @click="handleAddBtnClick"></span>
		</div>
	</div>
</template>

<script>
	var SelectNum = {
			props: ["Num"],
			template: "<span> {{ Num }} </span>",
		}
	export default {
		data: function(){
			var Num = 1;
			return {
				Num
			}
		},
		components: {
			"SelectNum": SelectNum
		},
		methods: {
			handleMinusBtnClick: function (){
				if(this.Num>1){
					this.Num--;
					this.$emit("GetNum",this.Num);
				}
			},
			handleAddBtnClick: function (){
				if(this.Num<5){
					this.Num++;
					this.$emit("GetNum",this.Num);
				}	
			}		
		}
	}
</script>

<style scoped>
	.order-Buyticket{
		background: #fff;
		margin-bottom: .2rem;
		overflow: hidden;
		padding: 0 .2rem;
	}
	.order-Buyticket-left{
		float: left;
		font-size: .32rem;
		line-height: 1.24rem;
	}
	.order-Buyticket-left span{
		font-size: .3rem;
		color: #333;
	}
	.order-Buyticket-left .limit-num{
		font-size: .28rem;
		color: #ccc;	
		padding-left: .1rem;		
	}
	.order-Buyticket-Selectnum{
		float: right;
		width: 1.85rem;
		height: .53rem;
		border: 1px solid #ccc;
		padding: .025rem;
		margin-top: .28rem;
	}
	.order-Buyticket-Selectnum span{
		float: left;	
	}
	
	.Selectnum-minus,.Selectnum-add{
		width: .53rem;
		height: .53rem;
		text-align: center;
		line-height: .55rem;
		background: #f5f5f5;
		color: #ccc;
		font-size: .5rem;
		font-weight: bold;
	} 
	.Selectnum-add{
		background: #00BCD4;
		color: #fff;
	}
	.ticket-Select-Num{
		width: .79rem;
		height: .53rem;
		text-align: center;
		line-height: .53rem;
		font-size: .32rem ;
		color: #333;
	}
	.color1{
		color: #fff;
		background: #00BCD4;
	}
	.color2{
		color: #ccc;
		background: #f5f5f5;
	}
</style>