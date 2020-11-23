<template>
	<view>
		<!-- 小票出口及其阴影 -->
		<view class="ticket-outlet"></view>
		<view class="ticket-outlet-shadow"></view>
		<view @touchmove="ticketTouchMove" @touchstart="ticketTouchStart" @touchend="ticketTouchEnd">
			<view class="ticket-body" :style="{height: ticketBodyHeight==='auto'?'auto':ticketContentHeight+'rpx'}">
				<view class="ticket-form" :style="{height: ticketContentHeight==='auto'?'auto':ticketContentHeight+'rpx'}">
					<view :style="{height: launchAddBillHeight}">
						<view v-if="slideDistance <= launchAddBillHeight">继续下拉创建</view>
						<view v-else>放开创建新账单</view>
						<slot name="billForm"></slot>
					</view>
				</view>
				<!-- 账单详情 -->
				<slot name="billDetail"></slot>
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
				ticketBodyHeight: 'auto',
				// ticket 内容高度
				ticketContentHeight: 0,
				// 滑动的距离
				slideDistance: 0,
				// 计算 rpx/px 比例
				proportion: 0,
				launchTouch: true,
				screenHeight: 0
			}
		},
		beforeMount: function() {
			let _self = this

			uni.getSystemInfo({
				success: function(res) {
					_self.screenHeight = res.windowHeight
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
				}
				this.ticketContentHeight = 0
			},
			initAddBill: function() {
				this.hiddenTicketBody()
				this.$emit('launchAddBill')
			},
			hiddenTicketBody: function() {
				this.ticketBodyHeight = 0
			},
			showTicketBody: function() {
				this.ticketBodyHeight = 'auto'
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
		background-color: #FFFFFF;
	}

	.ticket-body {
		box-shadow: 0 10px 5px -3px #7d7d7d;
		width: calc(100% - 20rpx);
		margin-left: 10rpx;
		background-color: #FFFFFF;
		overflow: hidden;
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
