<template>
	<view style="position: relative;">
		<view class="bg-circle">
			<view class="dots left-dot"></view>
			<view class="dots middle-dot"></view>
			<view class="dots right-dot"></view>
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
	.bg-circle {
		position: absolute;
		width: 80px;
		height: 80px;
		background: red;
		border-radius: 50%;
	}
	.dots {
		position: absolute;
		width: 10px;
		height: 10px;
		background-color: aquamarine;
		border-radius: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.left-dot {
		left: 25%;
		animation: bounce-up-down 1.5s linear infinite;
	}
	.middle-dot {
		left: 50%;
		animation: bounce-up-down 1.5s linear 0.25s infinite;
	}
	.right-dot {
		left: 75%;
		animation: bounce-up-down 1.5s linear 0.5s infinite;
	}

	@keyframes bounce-up-down {
		0% {
			transform: translate(-50%, -50%);
		}
		10% {
			transform: translate(-50%, -80%);
		}
		20% {
			transform: translate(-50%, -100%);
		}
		30% {
			transform: translate(-50%, -80%);
		}
		40% {
			transform: translate(-50%, -50%);
		}
	}
</style>
