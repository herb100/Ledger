<template>
	<view class="content">
		<view class="top-line-chart" :style="{height: tlcHeight==='auto'?'auto':tlcHeight+'rpx'}">
			<top-line-chart :chartInfo="billInfo" @getCurClickIndex="getCurClickIndex" @getCurSwiperIndex="getCurSwiperIndex"></top-line-chart>
		</view>
		<view class="bill-info" :style="{height: biHeight==='auto'?'auto':biHeight+'rpx'}">
			<text class="bill-integer-number">10.09</text>
			<view>
				<text class="bill-integer-number"><text class="text-price">361</text></text>
				<text class="bill-decimal-number">.00</text>
			</view>
		</view>
		<view>
			<ticket ref="ticket" @launchAddBill="hiddenModules">
				<template v-slot:billForm>
					<add-bill-form ref="billForm" :billValue="newBillValue"></add-bill-form>
				</template>
				<template v-slot:billDetail>
					<bill-list-simple></bill-list-simple>
				</template>
			</ticket>
		</view>
		<process-bar></process-bar>
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
	import processBar from '@/components/progressBar.vue'

	export default {
		components: {
			topLineChart,
			billForm,
			billListSimple,
			ticket,
			addBillForm,
			keypad,
			processBar
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
				newBillComment: '',
				billInfo: []
			}
		},
		beforeMount: function() {
			this.get_bill()
		},
		methods: {
			getCurClickIndex: function(index) {
				// console.log('click index ', index)
			},
			getCurSwiperIndex: function(index) {
				// console.log('swiper index ', index)
			},
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
			get_bill: function() {
				let LineA = {
					categories: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'],
					series: [{
						'name': '详细信息',
						'data': [300, 28, 25, 29, 23, 27, 30]
					}]
				};
				
				let serverData = [{
					opts: LineA,
					chartType: "line",
					id: "abcc"
				}, {
					opts: LineA,
					chartType: "line",
					id: "bcdd"
				}, {
					opts: LineA,
					chartType: "line",
					id: "efgg"
				}, {
					opts: LineA,
					chartType: "line",
					id: "hijj"
				}]
				
				this.billInfo = serverData
				
				return
				uni.request({
					url: config.baseUrl + '/bill',
					header: {},
					data: {},
					method: 'GET',
					success: function(res) {
						// _self.billInfo = res
					},
					fail: function(res) {
						// _self.tips = "网络错误，小程序端请检查合法域名";
					}
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
		height: 100%;
		position: absolute;
		background-color: #3EB575;
		padding: 0px 2%;
		/* background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607158398176&di=23248863c87b41d0473551140b3975e1&imgtype=0&src=http%3A%2F%2Fbos.pgzs.com%2Frbpiczy%2FWallpaper%2F2013%2F2%2F3%2F897cadfc9409480db13ab11f6f61be21-4.jpg'); */
		/* background-size: 100%; */
	}

	.bill-info {
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		margin: 4px 0px;
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
