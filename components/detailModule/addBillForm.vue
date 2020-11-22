<template>
	<view>
		<view class="bill-info">
			<view class="bill-type-tag-group">
				<view class="bill-type-tag" @tap="selectBillType" data-type="spending" :class="billTypeSelected==='spending'?'bill-type-tag-select':''">支出</view>
				<view class="bill-type-tag" @tap="selectBillType" data-type="income" :class="billTypeSelected==='income'?'bill-type-tag-select':''">收入</view>
			</view>
			<view class="cu-tag round bill-datetime-group">
				<date-time-picker></date-time-picker>
			</view>
		</view>
		<form>
			<view class="cu-form-group">
				<text class='money-price text-black'></text>
				<input name="money"></input>
				<text class="add-comment">添加备注</text>
			</view>
			<view class="input-solid-buttom"></view>
		</form>
	</view>
</template>

<script>
	import dateTimePicker from '../basic/dateTimePicker.vue'
	import keypad from '../basic/keypad.vue'

	export default {
		components: {
			keypad,
			dateTimePicker
		},
		data() {
			return {
				modalName: '',
				billTypeSelected: 'spending'
			}
		},
		methods: {
			selectBillType(e) {
				this.billTypeSelected = e.target.dataset.type
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
	.bill-info {
		display: flex;
		justify-content: space-between;
	}
	.bill-type-tag-group {
		margin-left: 10rpx;
	}
	.bill-datetime-group {
		margin-right: 10rpx;
	}
	
	.bill-type-tag{
		display: inline-flex;
		background-color: #f1f1f1;
		color: #aaaaaa;
		vertical-align: middle;
		position: relative;
		padding: 0rpx 16rpx;
		border-radius: 20rpx;
		font-size: 24rpx;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		height: 48rpx;
		font-family: Helvetica Neue, Helvetica, sans-serif;
		white-space: nowrap;
	}
	.bill-type-tag-select{
		color: #FFFFFF;
		background-color: #006690;
	}
	.money-price{
		font-size: 45rpx;
		margin-right: 30rpx;
	}
	.money-price::before{
		content: "¥ ";
		font-size: 80%;
		margin-right: 4rpx;
	}
	.input-solid-buttom {
		width: 65%;
		    background-color: #d0d0d0;
		    height: 1rpx;
		    margin-top: -20rpx;
		    margin-left: 73rpx;
	}
	.add-comment {
		color: #7686a8;
		text-align: right;
	}
</style>
