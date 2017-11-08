<template>
	<div class="order-container">
		<order-header />
		<order-ticketmess @SendTicketPrice="handleGetTicketPrice"/>
		<order-buyticket  @GetNum="handleGetNum"/>
		<order-VisiterMess :ticketNum="ticketNum" :ticketPrice="ticketPrice"/>
	</div>
</template>

<script>
	import OrderHeaderComponent from "./components/orderHeader";
	import OrderTicketMess from "./components/orderticketmess";
	import OrderBuyTicket from "./components/SelectticketNum";
	import VisiterMess from "./components/VisiterMess";
	export default {
		components :{
			"order-header": OrderHeaderComponent,
			"order-ticketmess": OrderTicketMess,
			"order-buyticket": OrderBuyTicket,
			"order-VisiterMess": VisiterMess
		},
		data(){
			var ticketNum;
			var ticketPrice;
			return {
				ticketNum,
				ticketPrice
			}
		},
		methods: {
			handleGetNum: function(e){
				this.ticketNum = e-1;
			},
			handleGetTicketPrice: function(e){
				this.ticketPrice = e;
			}
		}
	}
</script>

<style scoped>
	.order-container{
		height: 100%;
		width: 100%;
		background: #f5f5f5;
	}
</style>