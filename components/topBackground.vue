<template>
	<view class="top-background">
		<view class="top-title">
			<text>记账本</text>
		</view>
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
	.top-background {
		width: auto;
		height: 115rpx;
		background-color: #3eb575;
		/* box-shadow: -2px 1px 2px 0px #728bc1; */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.top-title {
		display: inline-block;
		font-size: 32rpx;
		margin-top: 35rpx;
		color: #e3f4eb;
	}
</style>
