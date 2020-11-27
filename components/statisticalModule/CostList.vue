<template>
	<view class="cost-list">
		<view class="total-cost">
			<text class="title">Cost</text>
			<view :style="{display: 'inline-block'}">
				<text class="integer-number">5811</text>
				<text class="decimal-number">.70</text>
			</view>
		</view>
		<view class="split-line"></view>
		<view class="cost-item">
			<view class="cost-item-left">
				<view class="dots" :style="{backgroundColor: '#e478c3'}"></view>
				<i class="iconfont icon-canyin"></i>
				<text class="name">Computer</text>
			</view>
			<view class="cost-item-center"><text>1</text></view>
			<view class="cost-item-right">
				<text class="integer-number">4,700</text>
				<text class="decimal-number">.00</text>
			</view>
		</view>
		<view class="split-line"></view>
		<view class="cost-item">
			<view class="cost-item-left">
				<view class="dots" :style="{backgroundColor: '#e478c3'}"></view>
				<i class="iconfont icon-canyin"></i>
				<text class="name">Computerefefef</text>
			</view>
			<view class="cost-item-center"><text>1</text></view>
			<view class="cost-item-right">
				<text class="integer-number">4,700000000000000000,00</text>
				<text class="decimal-number">.00</text>
			</view>
		</view>
		<view class="split-line"></view>
		<view class="cost-item">
			<view class="cost-item-left">
				<view class="dots" :style="{backgroundColor: '#e478c3'}"></view>
				<i class="iconfont icon-canyin"></i>
				<text class="name">puter</text>
			</view>
			<view class="cost-item-center"><text>1</text></view>
			<view class="cost-item-right">
				<text class="integer-number">4,700</text>
				<text class="decimal-number">.00</text>
			</view>
		</view>
		<view class="split-line"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.cost-list {
		padding: 0rpx 40rpx;
	}

	.total-cost {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.total-cost .title {
		font-size: 15px;
	}

	.total-cost .integer-number {
		font-size: 18px;
	}

	.total-cost .decimal-number {
		font-size: 16px;
		padding-top: 2px;
		color: #909090;
	}

	.split-line {
		width: auto;
		height: 1px;
		background-color: #afafaf;
	}

	.cost-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 14rpx 0rpx;
	}

	.cost-item-left {
		width: 50%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.cost-item-left .dots {
		display: inline-block;
		width: 15rpx;
		height: 15rpx;
		margin-right: 20rpx;
		margin-bottom: 4rpx;
		border-radius: 50%;
	}

	.cost-item-left .name {
		margin-left: 30rpx;
		color: grey;
	}

	.cost-item-center {
		width: 10%;
	}

	.cost-item-right {
		width: 30%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: right;
	}

	.cost-item-right .integer-number {
		font-size: 14px;
	}

	.cost-item-right .decimal-number {
		font-size: 12px;
		width: 20%;
		padding-top: 2px;
		color: #909090;
	}
</style>
