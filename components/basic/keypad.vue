<template>
	<view class="keypad-part">
		<view class="num-part">
			<span class="common-key" v-for="(item, index) in keys" :class="item!==0?'num-key':'zero-key'">
				{{item}}
			</span>
		</view>
		<view class="opera-part">
			<span class="common-key">delete</span>
			<span class="common-key confirm-key">确认</span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'],
			}
		}
	}
</script>

<style scoped>
	.keypad-part {
		display: flex;
		flex-wrap: wrap;
		font-weight: 550;
	}

	.num-part {
		flex: 3;
	}

	.opera-part {
		flex: 1;
	}

	.common-key {
		display: inline-block;
		width: 159rpx;
		height: 108rpx;
		line-height: 110rpx;
		border-radius: 6rpx;
		background-color: #FFFFFF;
		border: 1px solid #fafafa;
	}

	.num-key {
		height: 108rpx;
	}

	.zero-key {
		width: 319rpx;
	}

	.confirm-key {
		background-color: #9cd7b7;
		color: #f6faf8;
		height: 333rpx;
		line-height: 300rpx;
	}
</style>
