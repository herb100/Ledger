<template>
	<view>
		<view class="bill-item">
			<view class="bill-content">
				<view class="bill-icon">
					<i class="iconfont icon-canyin"></i>
					<text class="bill-type-name">餐饮</text>
				</view>
				<view class="bill-number">
					<text class="bill-integer-number">10</text>
					<text class="bill-decimal-number">.40</text>
				</view>
			</view>
			<view class="solid-bottom-line"></view>
		</view>
		<view class="bill-item">
			<view class="bill-content">
				<view class="bill-icon">
					<i class="iconfont icon-canyin"></i>
					<text class="bill-type-name">餐饮</text>
				</view>
				<view class="bill-number">
					<text class="bill-integer-number">10</text>
					<text class="bill-decimal-number">.40</text>
				</view>
			</view>
			<view class="solid-bottom-line"></view>
		</view>
		<view class="bill-item">
			<view class="bill-content">
				<view class="bill-icon">
					<i class="iconfont icon-canyin"></i>
					<text class="bill-type-name">餐饮</text>
				</view>
				<view class="bill-number">
					<text class="bill-integer-number">10</text>
					<text class="bill-decimal-number">.40</text>
				</view>
			</view>
			<view class="solid-bottom-line"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style scoped>
	.bill-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 14rpx;
	}

	.bill-icon {
		display: flex;
		align-items: center;
	}

	.iconfont {
		color: #77889a;
		font-size: 30px;
	}

	.bill-type-name {
		font-size: 12px;
		color: #a2a2a2bf;
		margin-left: 18rpx;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
	}

	.bill-number {
		display: flex;
		align-items: flex-start;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
	}

	.bill-integer-number {
		font-size: 22px;
	}

	.bill-decimal-number {
		font-size: 18px;
		padding-top: 2px;
		color: #909090;
	}

	.solid-bottom-line {
		background-color: #dad8d8bf;
		height: 1px;
	}
</style>
