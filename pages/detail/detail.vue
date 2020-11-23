<template>
	<view class="content">
		<top-background :tbHeight="tbHeight"></top-background>
		<view class="bill-info" :style="{height: biHeight==='auto'?'auto':biHeight+'rpx'}">
			<text class="integer-number">10.09</text>
			<text class="integer-number"><text class="text-price">361</text></text>
			<text class="decimal-number">.00</text>
		</view>
		<view style="padding: 0rpx 10rpx;">
			<ticket ref="ticket" @launchAddBill="hiddenModules">
				<template v-slot:billForm>
					<view class="ticket-form" v-if="tfHeight!==0" :style="{height: tfHeight==='auto'?'auto':tfHeight+'rpx'}">
						<add-bill-form></add-bill-form>
					</view>
				</template>
				<template v-slot:billDetail>
					<view>
						<bill-list-simple></bill-list-simple>
					</view>
				</template>
			</ticket>
		</view>
		<!-- <view class="top-background">
			<top-background></top-background>
			<bill-form></bill-form>
		</view>
		<add-bill-form></add-bill-form>
		<view class="bill-list">
			<bill-list></bill-list>
		</view>
		<view class="load-more">
			<text class="text-gray">上滑加载更多~</text>
		</view>
		 -->
	</view>
</template>

<script>
	import topBackground from '../../components/common/topBackground.vue'
	import billForm from '../../components/detailModule/billForm.vue'
	import billListSimple from '../../components/detailModule/billListSimple.vue'
	import addBillForm from '../../components/detailModule/addBillForm.vue'
	import ticket from '../../components/detailModule/ticket.vue'
	import config from '../../config.js'

	export default {
		components: {
			topBackground,
			billForm,
			billListSimple,
			ticket,
			addBillForm
		},
		data() {
			return {
				title: 'this is detail page',
				billInfo: [],
				tbHeight: 115,
				biHeight: 'auto',
				tfHeight: 0
			}
		},
		onLoad() {},
		beforeMount: function() {
			let _self = this
			// this.get_bill(_self)
		},
		mounted: function() {},
		methods: {
			get_bill: function(_self) {
				uni.request({
					url: config.baseUrl + '/bill',
					header: {},
					data: {},
					method: 'GET',
					success: function(res) {
						// _self.billInfo = res
					},
					fail: function(res) {}
				})
			},
			hiddenModules: function() {
				this.tbHeight = 0
				this.biHeight = 0
				this.tfHeight = 'auto'
			},
			showModules: function() {
				this.tbHeight = 115
				this.biHeight = 'auto'
				this.$refs.ticket.showTicketBody()
			}
		}
	}
</script>

<style scoped>
	page {
		background-color: #ededed;
		font-family: 微软雅黑;
	}

	.ticket-form {
		padding: 20rpx;
		overflow: hidden;
	}

	.top-background {
		background-color: #3eb575;
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.content {
		width: 100%;
		position: absolute;
	}
	
	.bill-info{
		overflow: hidden;
	}

	.bill-list {
		width: 95%;
		margin: 0 2.5%;
	}

	.load-more {
		text-align: center;
		width: auto;
		margin-top: 15rpx;
		line-height: 85rpx;
		height: 80rpx;
	}
	
	.integer-number {
		font-size: 22px;
	}
	
	.decimal-number {
		font-size: 18px;
		padding-top: 2px;
		color: #909090;
	}
</style>
