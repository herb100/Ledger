<template>
	<view class="keypad">
		<span class="left-part">
			<span class="common" v-for="(item, index) in leftKeys" :class="item['key']+'-key'">
				{{item['value']}}
			</span>
		</span>
		<span class="right-part">
			<span class="common" v-for="(item, index) in rightKeys" :class="item['key']+'-key'">
				{{item['value']}}
			</span>
		</span>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leftKeys: [
					{value: 'type', key: 'common'},
					{value: '/', key: 'common'},
					{value: '*', key: 'common'},
					{value: 1, key: 'common'},
					{value: 2, key: 'common'},
					{value: 3, key: 'common'},
					{value: 4, key: 'common'},
					{value: 5, key: 'common'},
					{value: 6, key: 'common'},
					{value: 7, key: 'common'},
					{value: 8, key: 'common'},
					{value: 9, key: 'common'},
					{value: 0, key: 'zero'},
					{value: '.', key: 'common'},
				],
				rightKeys: [
					{value: '-', key: 'sub'},
					{value: '+', key: 'add'},
					{value: '确定', key: 'confirm'},
				]
			}
		}
	}
</script>

<style scoped>
	.keypad {
		display: flex;
		flex-wrap: wrap;
		font-weight: 550;
		justify-content: center;
		padding: 0% 1%;
	}
	
	.left-part {
		flex: 7.5;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	
	.right-part {
		flex: 2.5;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	.common {
		display: inline-block;
		border-radius: 6rpx;
		background-color: #FFFFFF;
		border: 1px solid #fafafa;
		text-align: center;
		margin: 1px;
	}
	
	.common-key {
		height: 20.5%;
		line-height: 72rpx;
		/* #ifdef MP-WEIXIN */
		width: 31.5%;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		width: 31.5%;
		/* #endif */
	}
	
	.zero-key {
		height: 20.5%;
		line-height: 72rpx;
		width: 63.5%;
	}
	
	.sub-key {
		height: 20.5%;
		line-height: 72rpx;
		width: 100%;
	}
	
	.add-key {
		width: 100%;
		height: 43.1%;
		line-height: 148rpx;
	}

	.confirm-key {
		background-color: #9cd7b7;
		color: #f6faf8;
		width: 100%;
		height: 43.1%;
		line-height: 148rpx;
	}
</style>
