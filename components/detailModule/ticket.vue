<template>
	<view>
		<!-- 小票出口及其阴影 -->
		<view class="ticket-outlet"></view>
		<view class="ticket-outlet-shadow"></view>
		<view @touchmove="ticketTouchMove" @touchstart="ticketTouchStart" @touchend="ticketTouchEnd">
			<view class="ticket-body">
				<view class="ticket-form" :style="{height: ticketContentHeight==='auto'?'auto':ticketContentHeight+'rpx'}">
					<view :style="{height: launchAddBillHeight}" v-if="billFormHeight!=='auto'">
						<view v-if="slideDistance <= launchAddBillHeight">继续下拉创建</view>
						<view v-else>放开创建新账单</view>
					</view>
					<view :style="{height: billFormHeight==='auto'?'auto':billFormHeight+'rpx', overflow: 'hidden'}">
						<slot name="billForm"></slot>
					</view>
				</view>
				<!-- 账单详情 -->
				<view :style="{height: billDetailHeight==='auto'?'auto':billDetailHeight+'rpx'}">
					<slot name="billDetail"></slot>
				</view>
			</view>
			<!-- 小票锯齿 -->
			<view class="sawtooth"></view>
			<view class="sawtooth-shadow"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// launchAddBillHeight 用于判断滑动是否达到指定距离
			launchAddBillHeight: {
				type: Number,
				default: 100
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
				billFormHeight: 0,
				billDetailHeight: 'auto',
				// 滑动的距离
				slideDistance: 0,
				// 计算 rpx/px 比例
				proportion: 0,
				launchTouch: true,
				screenHeight: 0
			}
		},
		beforeMount: function() {
			const systemInfo = getApp().globalData.systemInfo
			this.screenHeight = systemInfo.windowHeight
			this.proportion = systemInfo.proportion

			if (this.testMode) {
				this.ticketContentHeight = 'auto'
			}
		},
		methods: {
			ticketTouchStart: function(e) {
				this.touchStartPageY = e.touches[0].pageY
				this.initTouch()
				if (!this.launchTouch) return
			},
			ticketTouchMove: function(e) {
				if (!this.launchTouch) return

				// 向上滑动时不出现
				if (this.touchStartPageY > e.touches[0].pageY) return
				this.touchMovePageY = e.touches[0].pageY
				this.slideDistance = (this.touchMovePageY - this.touchStartPageY) * this.proportion

				// 滑动是否达到指定距离
				if (this.slideDistance <= this.launchAddBillHeight) {
					this.ticketContentHeight = this.touchStartPageY + this.slideDistance
				}
			},
			ticketTouchEnd: function(e) {
				if (!this.launchTouch) return

				// 滑动是否达到指定距离
				if (this.slideDistance >= this.launchAddBillHeight) {
					this.initAddBill()
				} else {
					this.ticketContentHeight = 0
				}
			},
			initAddBill: function() {
				this.ticketContentHeight = 'auto'
				this.billFormHeight = 'auto'
				this.billDetailHeight = 0
				// 禁止滑动 ticket
				this.launchTouch = false
				this.$emit('launchAddBill')
			},
			exitAddBill: function() {
				this.ticketContentHeight = 0
				this.billFormHeight = 0
				this.billDetailHeight = 'auto'
				this.launchTouch = true
			},
			initTouch: function() {
				if (this.testMode) {
					this.launchTouch = false
				}
				// 点击位置不超过一屏高度才能下拉
				if (this.touchStartPageY > this.screenHeight) {
					this.launchTouch = false
				}
			},
		}
	}
</script>

<style scoped>
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
		background-color: #FFFFFF;
	}

	.ticket-body {
		box-shadow: 0 10px 5px -3px #7d7d7d;
		width: calc(100% - 20rpx);
		margin-left: 10rpx;
		background-color: #FFFFFF;
		overflow: hidden;
		height: auto;
	}

	.ticket-form {
		width: calc(100% - 20rpx);
		margin-left: 10rpx;
		position: relative;
		overflow: hidden;
		background-color: #FFFFFF;
	}

	.sawtooth {
		width: calc(100% - 20rpx);
		height: 10rpx;
		margin-left: 10rpx;
		position: relative;
		background-color: #FFFFFF;
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
		background-color: #FFFFFF;
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
