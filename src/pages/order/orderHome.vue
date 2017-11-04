<template>
	<div class="order-container">
		<order-header />
		<order-ticketmess />
		<order-buyticket />
		<order-VisiterMess />
	</div>
</template>

<script>
	import OrderHeaderComponent from "./orderHeader";
	import OrderTicketMess from "./orderticketmess";
	import OrderBuyTicket from "./SelectticketNum";
	import VisiterMess from "./VisiterMess";
	export default {
		components :{
			"order-header": OrderHeaderComponent,
			"order-ticketmess": OrderTicketMess,
			"order-buyticket": OrderBuyTicket,
			"order-VisiterMess": VisiterMess
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