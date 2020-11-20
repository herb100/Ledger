<template>
	<view @touchmove.stop.prevent>
		<!-- 添加账单 -->
		<view class="add-bill" @tap="showModal" data-target="addBillModal"></view>
		<!-- 添加账单模态框 -->
		<view class="cu-modal bottom-modal" :class="modalName=='addBillModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-green">确定</view>
					<view class="action text-blue" @tap="hideModal">取消</view>
				</view>
				<view class="padding-xl form-body">
					<view>
						<view class="cu-tag round text-gray">支出</view>
						<view class="cu-tag round text-gray">收入</view>
						<view class="cu-tag round">
							<date-time-picker></date-time-picker>
						</view>
					</view>
					<form>
						<view class="cu-form-group solid-bottom">
							<text class='text-price text-black'></text>
							<input placeholder="" name="input"></input>
						</view>
					</form>
					<view class="add-comment">
						<text>添加备注</text>
					</view>
					<keypad></keypad>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import dateTimePicker from '../basic/dateTimePicker.vue'
	import keypad from '../basic/keypad.vue'

	export default {
		components: {
			keypad,
			dateTimePicker
		},
		data() {
			return {
				modalName: ''
			}
		},
		methods: {
			showModal: function(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal: function(e) {
				this.modalName = null
			}
		}
	}
</script>

<style scoped>
	.form-body {
		background-color: #FFFFFF;
	}

	.add-comment {
		color: #7686a8;
		text-align: right;
	}

	.add-bill {
		width: 85rpx;
		height: 85rpx;
		background-color: #FFFFFF;
		background-image: url(../../static/img/add-bill.png);
		background-size: 55% 55%;
		background-position: center;
		background-repeat: no-repeat;
		box-shadow: 0 0 26rpx -6rpx #6f6f6f;
		border-radius: 50%;
		float: left;
		position: fixed;
		top: 78%;
		left: 82%;
		z-index: 2;
	}
</style>
