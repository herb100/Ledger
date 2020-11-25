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
					<add-bill-form @cancleAddBill="showModules"></add-bill-form>
				</template>
				<template v-slot:billDetail>
					<bill-list-simple></bill-list-simple>
				</template>
			</ticket>
		</view>
		<view class="keypad-drawer" v-if="kpStatus" 
			:style="{height: kpHeight==='auto'?'auto':kpHeight+'rpx', top: kpTop+'rpx'}
		">
			<keypad></keypad>
		</view>
	</view>
</template>

<script>
	import topBackground from '../../components/common/topBackground.vue'
	import billForm from '../../components/detailModule/billForm.vue'
	import billListSimple from '../../components/detailModule/billListSimple.vue'
	import addBillForm from '../../components/detailModule/addBillForm.vue'
	import ticket from '../../components/detailModule/ticket.vue'
	import config from '../../config.js'
	import keypad from '../../components/basic/keypad.vue'

	export default {
		components: {
			topBackground,
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
				tbHeight: 115,
				biHeight: 'auto',
				kpHeight: 480,
				kpStatus: false,
				kpTop: 0
			}
		},
		onLoad() {},
		beforeMount: function() {
			// this.get_bill(_self)

			// 计算 keypad 位置
			let systemInfo = getApp().globalData.systemInfo
			let windowHeight = systemInfo.windowHeight
			let proportion = systemInfo.proportion
			this.kpTop = windowHeight*proportion - this.kpHeight
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
				this.kpStatus = true
			},
			showModules: function() {
				this.tbHeight = 115
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

	/* .top-background {
		background-color: #3eb575;
		position: sticky;
		top: 0;
		z-index: 100;
	} */

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
	
	.integer-number {
		font-size: 22px;
	}
	
	.decimal-number {
		font-size: 18px;
		padding-top: 2px;
		color: #909090;
	}
	
	.keypad-drawer {
		width: 100%;
		padding: 12rpx 10rpx;
		background-color: red;
		position: fixed;
	}
</style>
