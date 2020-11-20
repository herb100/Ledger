<template>
	<view class="bill-card">
		<view class="bill-title">
			<view class="bill-time">
				<text>11月17号 星期六</text>
			</view>
			<view class="text-df padding bill-detail">
				<span class="cu-tag bill-icon">支</span><text>1.50</text>
				<span class="tag-split"></span>
				<span class="cu-tag bill-icon">收</span><text>0.00</text>
			</view>
		</view>
		<view class="cu-list menu-avatar">
			<view class="cu-item">
				<view class="cu-avatar round lg" style="background-image: url(../static/img/billType/restaurant.png);"></view>
				<view class="content flex-sub">
					<view class="text-black">餐饮</view>
					<view class="text-gray text-sm flex justify-between">
						21:37 | 致远创想
					</view>
				</view>
				<view class="text-black bill-detail-money">
					<text class="margin-lr-xs">-38.00</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar round lg" style="background-image: url(../static/img/billType/restaurant.png);"></view>
				<view class="content flex-sub">
					<view class="text-black">餐饮</view>
					<view class="text-gray text-sm flex justify-between">
						21:37 | 致远创想
					</view>
				</view>
				<view class="text-black bill-detail-money">
					<text class="margin-lr-xs">-38.00</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		}
	}
</script>

<style scoped>
	.bill-card {
		height: auto;
		box-shadow: 0 0 11rpx -2rpx #888a8c;
		margin-top: 15rpx;
		border-radius: 13rpx;
	}

	.bill-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: baseline;
	}

	.bill-time {
		padding: 20rpx 6rpx 47rpx;
		margin-left: 30rpx;
		margin-top: 28rpx;
		font-size: 28rpx;
		font-weight: 500;
	}

	.cu-tag {
		padding: 0px 6rpx;
		height: 15px;
	}

	.tag-split {
		padding: 15rpx;
	}

	.bill-icon {
		color: #989898;
		margin-right: 4rpx;
	}

	.bill-detail {
		display: flex;
		align-items: baseline;
		margin-right: 5rpx;
		font-size: 17rpx;
	}

	.cu-list.menu-avatar>.cu-item>.cu-avatar {
		width: 75rpx;
		height: 75rpx;
	}

	.cu-list.menu-avatar>.cu-item .content>uni-view:first-child {
		font-size: 14px;
	}

	.cu-list.menu-avatar>.cu-item .content {
		line-height: 1.5em;
	}

	.bill-detail-money {
		margin-bottom: 17rpx;
	}
</style>
