<template>
	<view @click="cancleDelete">
		<view v-for="(item, key) in billInfo" :key="key">
			<view class="bill-item move-item" @longpress="itemLongPress" :data-index="key">
				<view v-if="modalName==='delete-button-group-'+key?true:false" :class="'delete-button-group-'+key" class="delete-button-group">
					<span class="delete-button" @click="deleteItem">X</span>
					<!-- <span class="delete-button">取消</span> -->
				</view>
				<view class="bill-content">
					<view class="bill-icon">
						<i class="iconfont" :class="'icon-'+item['icon']"></i>
						<text class="bill-type-name">{{item['type']}}</text>
					</view>
					<view class="bill-number">
						<text class="bill-integer-number">{{item['value'].toString().split('.')[0]}}</text>
						<text class="bill-decimal-number">.{{item['value'].toString().split('.')[1]}}</text>
					</view>
				</view>
				<view class="solid-bottom-line"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			billInfo: {
				type: Array,
				default: [{
					type: '餐饮',
					key: 'restaurant',
					icon: 'canyin',
					percentage: 1,
					value: '10.04'
				}]
			}
		},
		data() {
			return {
				modalName: null,
				deleteIndex: null
			}
		},
		methods: {
			itemLongPress: function (e) {
				this.deleteIndex = e.currentTarget.dataset.index
				this.modalName = 'delete-button-group-' + e.currentTarget.dataset.index
			},
			deleteItem: function(e) {
				console.log(this.deleteIndex)
				this.$emit('deleteBillInfo', this.deleteIndex)
				this.cancleDelete()
			},
			cancleDelete: function(e) {
				this.modalName = null
				this.deleteIndex = null
			}
		}
	}
</script>

<style scoped>
	.bill-item {
		position: relative;
	}
	
	.delete-button-group {
		position: absolute;
		width: 40px;
		height: 100%;
		right: 0;
		font-size: 12px;
	}

	.delete-button-group > .delete-button {
		line-height: 25px;
		padding: 1px 9px;
		width: 25px;
		height: 25px;
		display: inline-block;
		border-radius: 50%;
		background-color: red;
		margin-top: 3px;
	}
	
	.bill-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 14rpx;
	}
	
	.move-item {
		
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
