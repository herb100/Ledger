<template>
	<view>
		<view class="ticket-outlet" :style="{backgroundColor: outletColor}"></view>
		<view class="ticket-outlet-shadow" :style="{backgroundColor: ticketColor}"></view>
		<view class="ticket-content" :style="{backgroundColor: ticketColor}">
			<slot name="content"></slot>
		</view>
		<view class="sawtooth" :style="{backgroundColor: ticketColor, '--sawtoothShadow': sawtoothShadow}"></view>
		<view class="sawtooth-shadow" :style="{backgroundColor: ticketColor}"></view>
	</view>
</template>

<script>
	export default {
		props: {
			outletColor: {
				type: String,
				default: '#006690'
			},
			ticketColor: {
				type: String,
				default: '#FFFFFF'
			}
		},
		data() {
			return {
				sawtoothShadow: `linear-gradient(-45deg,transparent 70%,${this.ticketColor} 50%), 
					linear-gradient(45deg,transparent 70%,${this.ticketColor} 50%)`,
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
	}

	.ticket-outlet-shadow {
		box-shadow: inset 0 5rpx 9rpx -5rpx black;
		height: 10rpx;
		width: calc(100% - 20rpx);
		margin-top: -10rpx;
		margin-left: 10rpx;
	}

	.ticket-content {
		height: 150rpx;
		width: calc(100% - 20rpx);
		margin-left: 10rpx;
		box-shadow: 0rpx 4rpx 10rpx -4rpx #777777;
		-webkit-box-shadow: 0rpx 4rpx 10rpx -7rpx #777777;
		position: relative;
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
		background-image: var(--sawtoothShadow);
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
