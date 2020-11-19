<template>
	<view class="bill-form" @touchmove.stop.prevent>
		<!-- 类型选择 -->
		<view class="text-white bill-type" @tap="showModal" data-target="billTypeModal">
			<span>全部类型</span>
			<span class="split-line"> | </span>
			<text class="cuIcon-list more-type"></text>
		</view>
		<!-- 类型选择模态框 -->
		<view class="cu-modal bottom-modal" :class="modalName=='billTypeModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-blue" @tap="hideModal">取消</view>
					<view class="action text-green">确定</view>
				</view>
				<view class="padding-xl bill-type-modal-body">
					<scroll-view scroll-y="true" class="scroll-Y bill-type-modal-scroll">
						<view class="bill-type-card" @click="selectedAllBill"
							:class="incomeSelected.length === 0 && spendingSelected.length === 0
								?'bill-type-selected':'bill-type-no-selected'"
						>全部类型</view>
						<view v-for="(item, index) in billTypes" :key="index">
							<view class="bill-type-value">{{item['value']}}</view>
							<view class="bill-type-layout">
								<view v-for="(item1, index1) in billTypes[index]['type']" :key="index1" :data-type="index" :id="item1['type']" @click="selectBill">
									<view class="bill-type-card" 
										:class="index === 'income' && incomeSelected.indexOf(item1['type']) !== -1 
										 || index === 'spending' && spendingSelected.indexOf(item1['type']) !== -1?
										 'bill-type-selected':'bill-type-no-selected'"
									>{{item1['value']}}</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view> 
			</view>
		</view>

		<!-- 时间选择 账单统计 -->
		<view class="text-white bill-total">
			<view style="display: inline-block;">
				<date-time-picker></date-time-picker>
			</view>
			<span class="bill-spending">
				总支出 <text class="text-price">546</text>
			</span>
			<span class="bill-income">
				总收入<text class="text-price">546</text>
			</span>
		</view>	
	</view>
</template>

<script>
	import billTypes from '../common/billTypes.js'
	import dateTimePicker from './basic/dateTimePicker.vue'

	export default {
		components: {
			dateTimePicker
		},
		data() {
			return {
				modalName: '',
				billTypes: {},
				incomeSelected: [],
				spendingSelected: [],
				curDate: '2020-11-19'
			};
		},
		computed: {},
		beforeMount: function() {
			this.billTypes = billTypes
		},
		methods: {
			selectBill: function(e) {
				let billType = e.currentTarget.dataset.type
				let key = e.currentTarget.id

				if (billType === 'income') {
					let index = this.incomeSelected.indexOf(key)
					if (index === -1) {
						this.incomeSelected.push(key)
					} else {
						this.incomeSelected.splice(index, 1)
					}
				} else if (billType === 'spending') {
					let index = this.spendingSelected.indexOf(key)
					if (index === -1) {
						this.spendingSelected.push(key)
					} else {
						this.spendingSelected.splice(index, 1)
					}
					
				}
			},
			selectedAllBill: function() {
				this.spendingSelected = []
				this.incomeSelected = []
			},
			showModal: function(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal: function(e) {
				this.modalName = null
			}
		}
	}
</script>

<style scoped>
	.bill-form {
		background-color: #3eb575;
		height: 150rpx;
		width: auto;
	}

	.more-type {
		font-size: 30rpx;
	}

	.split-line {
		padding: 25rpx;
		font-weight: 100;
		font-size: 1rpx;
		color: #8ad6ae;
	}

	.bill-type {
		width: 230rpx;
		padding: 15rpx 15rpx 15rpx 20rpx;
		margin-left: 25rpx;
		margin-top: 20rpx;
		height: 60rpx;
		font-size: 26rpx;
		background-color: #51bc83;
		border-radius: 10rpx;
	}

	.bill-total {
		font-size: 27rpx;
		margin-top: 28rpx;
		padding: 5rpx;
		margin-left: 40rpx;
	}

	.bill-spending,
	.bill-income {
		display: inline-block;
		margin-left: 12rpx;
		color: #ceecdc;
	}

	.bill-type-card {
		width: 215rpx;
		height: 105rpx;
		
		text-align: center;
		
		font-size: 32rpx;
		padding-top: 30rpx;
		border-radius: 2rpx;
	}
	
	.bill-type-selected {
		background-color: #3eb575;
		color: #FFFFFF;
	}
	
	.bill-type-no-selected {
		background-color: #FFFFFF;
		color: black;
	}
	
	.bill-type-value {
		text-align: left;
		color: #848484;
		font-size: 25rpx;
		padding-top: 32rpx;
	}
	
	.bill-type-layout {
		display: flex;
		flex-wrap: wrap;
	}

	.cu-modal.bottom-modal .cu-dialog {
		border-radius: 20rpx;
	}
	
	.bill-type-modal-body {
		height: 650rpx;
	}
	.bill-type-modal-scroll {
		height: 500rpx;
	}
</style>
