<template>
	<view>
		<view class="top-background" :style="{height: tbHeight+'rpx'}">
			<view class="top-title">
				<text>记账本</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tbHeight: {
				type: Number,
				default: 115
			}
		},
		data() {
			return {}
		}
	}
</script>

<style scoped>
	.top-background {
		width: auto;
		background-color: #3eb575;
		/* box-shadow: -2px 1px 2px 0px #728bc1; */
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.top-title {
		display: inline-block;
		font-size: 32rpx;
		margin-top: 35rpx;
		color: #e3f4eb;
	}
</style>
