<template>
	<view class="content">
		<view class="top-line-chart" :style="{height: tlcHeight==='auto'?'auto':tlcHeight+'rpx'}">
			<top-line-chart></top-line-chart>
		</view>
		<view class="bill-info" :style="{height: biHeight==='auto'?'auto':biHeight+'rpx'}">
			<text class="bill-integer-number">10.09</text>
			<text class="bill-integer-number"><text class="text-price">361</text></text>
			<text class="bill-decimal-number">.00</text>
		</view>
		<view style="padding: 0rpx 10rpx;">
			<ticket ref="ticket" @launchAddBill="hiddenModules">
				<template v-slot:billForm>
					<add-bill-form ref="billForm" :billValue="newBillValue"></add-bill-form>
				</template>
				<template v-slot:billDetail>
					<bill-list-simple></bill-list-simple>
				</template>
			</ticket>
		</view>
		<view class="keypad-drawer" v-if="kpStatus" :style="{height: kpHeight+'rpx'}">
			<keypad @changeValue="changeNewBillValue" @cancleBill="cancleBill" @createBill="createBill"></keypad>
		</view>
	</view>
</template>

<script>
	import topLineChart from '@/components/common/topLineChart.vue'
	import billForm from '@/components/detailModule/billForm.vue'
	import billListSimple from '@/components/detailModule/billListSimple.vue'
	import addBillForm from '@/components/detailModule/addBillForm.vue'
	import ticket from '@/components/detailModule/ticket.vue'
	import config from '@/config.js'
	import keypad from '@/components/basic/keypad.vue'

	export default {
		components: {
			topLineChart,
			billForm,
			billListSimple,
			ticket,
			addBillForm,
			keypad
		},
		data() {
			return {
				title: 'this is detail page',
				billInfo: [],
				tlcHeight: 'auto',
				biHeight: 'auto',
				kpHeight: 345,
				kpStatus: false,
				newBillValue: '',
				newBillComment: ''
			}
		},
		beforeMount: function() {
			// this.get_bill(_self)
		},
		methods: {
			changeNewBillValue: function(value) {
				this.newBillValue = value
			},
			createBill: function(billValue) {
				console.log(this.$refs.billForm.getForm())
				console.log('createBill ', billValue)
				this.showModules()
			},
			cancleBill: function() {
				this.showModules()
			},
			showModal: function(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal: function(e) {
				this.modalName = null
			},
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
				this.tlcHeight = 0
				this.biHeight = 0
				this.kpStatus = true
			},
			showModules: function() {
				this.tlcHeight = 'auto'
				this.biHeight = 'auto'
				this.kpStatus = false
				this.$refs.ticket.exitAddBill()
			}
		}
	}
</script>

<style scoped>
	page {
		background-color: #ededed;
		font-family: 微软雅黑;
	}

	.top-line-chart {
		overflow: hidden;
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
	
	.bill-integer-number {
		font-size: 22px;
	}
	
	.bill-decimal-number {
		font-size: 18px;
		padding-top: 2px;
		color: #909090;
	}
	
	.keypad-drawer {
		width: 100%;
		background-color: #f1f1f1;
		position: fixed;
		z-index: 1000;
		bottom: 0;
	}
</style>
