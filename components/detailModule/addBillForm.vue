<template>
	<view class="add-bill-form">
		<view class="bill-info">
			<view class="bill-type-tag-group">
				<view class="bill-type-tag" @tap="selectBillType" data-type="spending" :class="billTypeSelected==='spending'?'bill-type-tag-select':''">支出</view>
				<view class="bill-type-tag" @tap="selectBillType" data-type="income" :class="billTypeSelected==='income'?'bill-type-tag-select':''">收入</view>
			</view>
			<view class="cu-tag round bill-datetime-group">
				<picker mode="date" :value="date" :start="picker.startDate" :end="picker.endDate" @change="datePickerChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
				<view class="vertical-line">|</view>
				<picker mode="time" :value="time" :start="picker.startTime" :end="picker.endTime" @change="timePickerChange">
					<view class="picker">
						{{time}}
					</view>
				</picker>
			</view>
		</view>
		<view>
			<swiper class="square-dot icon-swiper" :indicator-dots="true" :circular="true" :autoplay="false">
				<swiper-item class="icon-swiper-item">
					<view v-for="(item,index) in iconList" :key="index" class="swiper-icon-item" @click="iconChange(item['key'])"
					 :class="item['key']===iconSelected?'swiper-no-select':'swiper-selected'">
						<i class="iconfont swiper-icon-icon" :class="'icon-'+item['icon']"></i>
						<span class="swiper-icon-name">{{item['name']}}</span>
					</view>
				</swiper-item>
				<swiper-item class="icon-swiper-item">
					<view v-for="(item,index) in iconList" :key="index" class="swiper-icon-item" @click="iconChange(item['key'])"
					 :class="item['key']===iconSelected?'swiper-no-select':'swiper-selected'">
						<i class="iconfont swiper-icon-icon" :class="'icon-'+item['icon']"></i>
						<span class="swiper-icon-name">{{item['name']}}</span>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<form>
			<view class="cu-form-group">
				<!-- money -->
				<text class='money-price text-black'></text>
				<input name="money" :value="billValue" disabled="disabled"></input>
				<!-- note -->
				<text class="add-note" @tap="showModal" data-target="noteModal">添加备注</text>
				<view class="cu-modal bottom-modal" :class="modalName=='noteModal'?'show':''">
					<view class="cu-dialog">
						<view class="cu-bar bg-white">
							<view class="action text-green" @tap="hideModal" data-button-type='confirm'>确定</view>
							<view class="action text-blue" @tap="hideModal" data-button-type='cancle'>取消</view>
						</view>
						<view class="padding">
							<view class="cu-form-group" style="text-align: left;">
								<textarea maxlength="-1" style="height: 400rpx;" @input="noteInput" :value="noteValue" placeholder="添加您的备注..."></textarea>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="input-solid-buttom"></view>
		</form>
	</view>
</template>

<script>
	export default {
		props: {
			billValue: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				iconList: [{
					name: '餐饮',
					icon: 'canyin',
					key: 'restran'
				}],
				billTypeSelected: 'spending',
				modalName: '',
				date: '',
				time: '',
				noteValue: '',
				iconSelected: '',
				picker: {
					startDate: '1990-01-01',
					endDate: '',
					startTime: '00:00',
					endTime: '23:59'
				}
			}
		},
		beforeMount: function() {
			let today = new Date()
			let year = today.getFullYear()
			let month = today.getMonth() + 1
			let day = today.getDate()
			let hour = today.getHours()
			let minute = today.getMinutes()
			let second = today.getSeconds()

			let curDate = year + '-' + month + '-' + day
			let curTime = hour + '-' + minute
			this.date = curDate
			this.time = curTime
			this.picker.endDate = (year + 5) + '-' + month + '-' + day
		},
		methods: {
			getForm: function() {
				return {

				}
			},
			iconChange: function(key) {
				this.iconSelected = key
			},
			noteInput: function(e) {
				this.noteValue = e.detail.value
			},
			datePickerChange: function(e) {
				this.date = e.detail.value
			},
			timePickerChange: function(e) {
				this.time = e.detail.value
			},
			selectBillType: function(e) {
				this.billTypeSelected = e.target.dataset.type
			},
			showModal: function(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal: function(e) {
				let buttonType = e.target.dataset.buttonType || 'cancle'

				if (buttonType === 'cancle') {
					this.noteValue = ''
				}

				this.modalName = null
			}
		}
	}
</script>

<style scoped>
	.add-bill-form {
		position: relative;
	}

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

	.bill-type-tag {
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

	.bill-type-tag-select {
		color: #FFFFFF;
		background-color: #006690;
	}

	.money-price {
		font-size: 45rpx;
		margin-right: 30rpx;
	}

	.money-price::before {
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

	.add-note {
		color: #7686a8;
		text-align: right;
	}

	.vertical-line {
		margin: 0rpx 10rpx;
	}

	.icon-swiper {
		margin: 20rpx 10rpx -5rpx;
		height: 300rpx;
	}

	.icon-swiper-item {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
	}

	.icon-swiper-item>.swiper-icon-item {
		display: inline-block;
		width: 20%;
		text-align: center;
	}

	.icon-swiper-item>.swiper-icon-item>.swiper-icon-icon {
		display: block;
		width: 100%;
		text-align: center;
		font-size: 27px;
	}

	.icon-swiper-item>.swiper-icon-item>.swiper-icon-name {
		display: block;
		position: relative;
		font-size: 10px;
		bottom: 5rpx;
	}

	.swiper-no-select {
		color: #F1F1F1;
		background-color: #F1F1F1;
	}

	.swiper-selected {
		color: red;
	}
</style>
