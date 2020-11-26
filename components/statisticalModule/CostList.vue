<template>
	<view>
		<view class="total-cost">
			<text class="total-title">Cost</text>
			<view :style="{display: 'inline-block'}">
				<text class="bill-integer-total-number">5811</text>
				<text class="bill-decimal-total-number">.70</text>
			</view>
		</view>
		<view class="split-line"></view>
		<view class="cost-item">
			<view>
				<i class="iconfont icon-canyin"></i>
				<text>Computer</text>
			</view> 
			<view><text>1</text></view>
			<view>
				<text class="bill-integer-number">4,700</text>
				<text class="bill-decimal-number">.00</text>
			</view>
			<view class="split-line"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.total-cost {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 0rpx 40rpx;
	}

	.total-title {
		font-size: 15px;
	}

	.split-line {
		width: 90%;
		height: 1px;
		margin-left: 5%;
		background-color: #afafaf;
	}

	.cost-item {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.bill-integer-total-number {
		font-size: 18px;
	}

	.bill-decimal-total-number {
		font-size: 16px;
		padding-top: 2px;
		color: #909090;
	}

	.bill-integer-number {
		font-size: 14px;
	}

	.bill-decimal-number {
		font-size: 12px;
		padding-top: 2px;
		color: #909090;
	}
</style>
