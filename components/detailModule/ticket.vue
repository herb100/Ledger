<template>
	<view>
		<view class="ticket-outlet"></view>
		<view class="ticket-outlet-shadow" :style="{backgroundColor: '#FFFFFF'}"></view>
		<view @touchmove="ticketTouchMove" @touchstart="ticketTouchStart" @touchend="ticketTouchEnd">
			<view class="ticket-content" id="ticketContent" :style="{backgroundColor: '#FFFFFF', height: ticketContentHeight==='auto'?'auto':ticketContentHeight+'rpx'}">
				<view :style="{height: addBillFormHeight}">
					<slot name="billForm"></slot>
				</view>
			</view>
			<slot name="billDetail"></slot>
			<view class="sawtooth" :style="{backgroundColor: '#FFFFFF'}"></view>
			<view class="sawtooth-shadow" :style="{backgroundColor: '#FFFFFF'}"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// addBillFormHeight + addBillFormMoreHeight 用于判断滑动是否达到指定距离
			// 表单的高度
			addBillFormHeight: {
				type: Number,
				default: 200
			},
			// 用于下拉后回弹的距离
			addBillFormMoreHeight: {
				type: Number,
				default: 50
			},
			testMode: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				touchStartPageY: 0,
				touchMovePageY: 0,
				// ticket 内容高度
				ticketContentHeight: 0,
				// 滑动的距离
				slideDistance: 0,
				// 计算 rpx/px 比例
				proportion: 0,
			}
		},
		beforeMount: function() {
			let _self = this

			uni.getSystemInfo({
				success: function(res) {
					_self.proportion = 750 / res.screenWidth
				}
			})

			if (this.testMode) {
				this.ticketContentHeight = 'auto'
			}
		},
		methods: {
			ticketTouchStart: function(e) {
				this.touchStartPageY = e.touches[0].pageY
			},
			ticketTouchMove: function(e) {
				this.touchMovePageY = e.touches[0].pageY
				this.slideDistance = (this.touchMovePageY - this.touchStartPageY) * this.proportion

				if (this.testMode) {
					return
				}
				// 滑动是否达到指定距离
				if (this.slideDistance <= this.addBillFormHeight + this.addBillFormMoreHeight) {
					this.ticketContentHeight = this.touchStartPageY + this.slideDistance
				}
			},
			ticketTouchEnd: function(e) {
				if (this.testMode) {
					return
				}
				// 滑动是否达到指定距离
				if (this.slideDistance <= this.addBillFormHeight + this.addBillFormMoreHeight) {
					this.ticketContentHeight = 0
				} else {
					this.ticketContentHeight = 'auto'
				}
			}
		}
	}
</script>

<style>
	.ticket {
		position: relative;
	}

	.ticket-outlet {
		border-radius: 10rpx;
		height: 20rpx;
		width: 100%;
		background-color: #006690;
	}

	.ticket-outlet-shadow {
		box-shadow: inset 0 5rpx 9rpx -5rpx black;
		height: 10rpx;
		width: calc(100% - 20rpx);
		margin-top: -10rpx;
		margin-left: 10rpx;
	}

	.ticket-content {
		width: calc(100% - 20rpx);
		margin-left: 10rpx;
		position: relative;
		overflow: hidden;
	}

	.sawtooth {
		width: calc(100% - 20rpx);
		height: 10rpx;
		margin-left: 10rpx;
		position: relative;
	}

	.sawtooth::before {
		display: block;
		content: "";
		position: absolute;
		top: -300%;
		bottom: 0;
		left: 0;
		right: 0;
		height: 10px;
		margin-top: 20px;
		background-size: 10px 20px;
		box-shadow: 0 0 0 0 #007AFF;
		background-image: linear-gradient(-45deg, transparent 70%, #FFFFFF 50%), linear-gradient(45deg, transparent 70%, #FFFFFF 50%);
	}

	.sawtooth-shadow {
		width: calc(100% - 20rpx);
		height: 10rpx;
		margin-left: 10rpx;
		position: relative;
	}

	.sawtooth-shadow::after {
		display: block;
		content: "";
		position: absolute;
		top: -550%;
		bottom: 0;
		left: 50%;
		right: 0;
		height: 10px;
		margin-top: 20px;
		background-size: 10px 20px;
		box-shadow: 0 0 0 0 #007AFF;
		background-image: linear-gradient(-45deg, transparent 70%, #a5a5a5 50%), linear-gradient(45deg, transparent 70%, #a5a5a5 50%);
		transform: translate(0%, 90%) rotate(2deg);
		transform-origin: center center;
		opacity: 0.8;
		z-index: -1
	}

	.sawtooth-shadow::before {
		display: block;
		content: "";
		position: absolute;
		top: -550%;
		bottom: 0;
		left: 0%;
		right: 50%;
		height: 10px;
		margin-top: 20px;
		background-size: 10px 20px;
		box-shadow: 0 0 0 0 #007AFF;
		background-image: linear-gradient(-45deg, transparent 70%, #a5a5a5 50%), linear-gradient(45deg, transparent 70%, #a5a5a5 50%);
		transform: translate(0%, 90%) rotate(-2deg);
		transform-origin: center center;
		opacity: 0.8;
		z-index: -1
	}
</style>
