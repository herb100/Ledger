<template>
	<view class="content">
		<view class="my-account">
			<view class="title">账户</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item single">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
					<view class="content">
						<view class="text-white account-name">我是渣渣辉</view>
						<view class="text-gray flex account-email">
							<view class="text-cut">
								zhazhahui@qq.com
							</view>
						</view>
					</view>
					<view class="action">
						<text class="lg text-gray cuIcon-right"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="my-account">
			<view class="title">通用</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item single">
					<view class="content">
						<view class="text-white account-name">Mickey Yin</view>
						<view class="text-gray flex account-email">
							<view class="text-cut">
								mickeyyin@qq.com
							</view>
						</view>
					</view>
					<view class="action">
						<text class="lg text-gray cuIcon-right"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="my-account">
			<view class="title">数据</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item single">
					<view class="text-white backup">备份数据</view>
				</view>
				<view class="cu-item single">
					<view class="text-white backup">同步数据</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		wxAuth
	} from '@/static/js/common.js'

	export default {
		components: {},
		data() {
			return {
				title: 'this is setting page',
			}
		},
		beforeCreate: function() {
			wxAuth('scope.userInfo')
		},
		methods: {

		}
	}
</script>

<style scoped>
	page {
		background-color: #ededed;
		font-family: 微软雅黑;
	}

	.content {
		width: 100%;
		padding: 0rpx 20rpx;
	}

	.cu-list.menu-avatar>.cu-item {
		background-color: grey;
		height: 120rpx;
	}

	.cu-list.menu-avatar>.single {
		border-radius: 10rpx;
	}

	.cu-list.menu-avatar>.start {
		border-radius: 10rpx 10rpx 0rpx 0rpx;
	}

	.cu-list.menu-avatar>.center {}

	.cu-list.menu-avatar>.end {
		border-radius: 0rpx 0rpx 10rpx 10rpx;
	}

	.cu-avatar.lg {
		width: 75rpx;
		height: 75rpx;
	}

	.my-account>.title {
		color: grey;
	}

	.cu-list.menu-avatar>.cu-item .content {
		margin-left: -40rpx;
	}

	.cu-list.menu-avatar>.cu-item .backup {
		width: 100%;
		text-align: center;
		font-size: 35rpx;
	}

	.cu-list.menu-avatar>.cu-item .content>.account-name {
		font-size: 35rpx;
		font-weight: 100;
	}

	.cu-list.menu-avatar>.cu-item .content>.account-email {
		margin-top: -10rpx;
	}
</style>
