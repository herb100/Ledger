<template>
	<view style="margin-top: 70px;position: relative;">
		<view class="envelope">
			<view class="heart left-heart"></view>
			<view class="heart right-heart"></view>
		</view>
		<view class="progress-bar">
			<view class="progress-content" :style="{width: progressContentWidth+'%'}"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				progressContentWidth: 100
			};
		}
	}
</script>

<style scoped>
	.envelope {
		display: block;
		width: 55px;
		height: 40px;
		margin-bottom: 10px;
		border: 2px solid #FFFFFF;
		border-radius: 6px;
		background-color: #007AFF;
	}
	.envelope::before{
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		bottom: 0;
		top: 38px;
		left: 18px;
		right: 0;
		border-right: 10px solid transparent;
		border-left: 10px solid transparent;
		border-top: 10px solid #FFFFFF;	
	}
	.envelope::after{
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		bottom: 0;
		top: 37px;
		left: 21px;
		right: 0;
		border-right: 7px solid transparent;
		border-left: 7px solid transparent;
		border-top: 7px solid #007AFF;
	}
	.heart {
		width: 20px;
		height: 12px;
		border-radius: 6px;
		margin: 8px 13px;
		position: absolute;
		background-color: red;
	}
	.left-heart {
		transform: rotate(45deg);
		transform-origin: 7px 7px;
	}
	.right-heart{
		transform: rotate(-45deg);
		transform-origin: 16px 0px;
	}
 .progress-bar {
	 width: 100%;
	 height: 6px;
	 border-radius: 3px;
	 border: 1px solid black;
	 position: relative;
 }
 .progress-content{
	 height: 100%;
	 background-color: red;
	 position: absolute;
	 right: 0;
 }
</style>
