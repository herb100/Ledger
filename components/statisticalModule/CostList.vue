<template>
	<view class="cost-list">
		<view class="total-cost">
			<text class="title">{{billType}}</text>
			<view :style="{display: 'inline-block'}">
				<text class="integer-number">{{this.billTotal.toFixed(2).toString().split('.')[0]}}</text>
				<text class="decimal-number">.{{this.billTotal.toFixed(2).toString().split('.')[1]}}</text>
			</view>
		</view>
		<view class="split-line"></view>
		<view v-for="(item, key) in billInfo" :key="key">
			<view class="cost-item" @click="showDetail(item['type'])">
				<view class="cost-item-left">
					<view class="dots" :style="{backgroundColor: colors[key%colors.length]}"></view>
					<i class="iconfont icon-canyin" style="display: inline-block;"></i>
					<text class="name">{{item['type']}}</text>
				</view>
				<view class="cost-item-center"><text>{{item['percentage']}}</text></view>
				<view class="cost-item-right">
					<text class="integer-number">{{item['value'].toString().split('.')[0]}}</text>
					<text class="decimal-number">.{{item['value'].toString().split('.')[1]}}</text>
				</view>
			</view>
			<view class="split-line"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			billType: {
				type: String,
				default: 'Cost'
			},
			billTotal: {
				type: Number,
				default: 0.01
			},
			billInfo: {
				type: Array, 
				default: [{
					type: 'Computer',
					icon: 'computer',
					percentage: 1,
					value: '4,700.00'
				}]
			}
		},
		data() {
			return {
				colors: ['#e478c3', 'green', 'red', 'black']
			}
		},
		methods: {
			showDetail: function(type) {
				console.log(type)
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
		flex-wrap: nowrap;
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
