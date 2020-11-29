<template>
	<view class="content">
		<view v-if="!ifScopeUserInfo">
			<!-- #ifdef MP-WEIXIN -->
			<button class="login-button" open-type="getUserInfo" @getuserinfo="userInfoHandler"/>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<button class="login-button" @click="loginWx"></button>
			<!-- #endif -->
		</view>
		<view v-if="ifScopeUserInfo" class="my-account">
			<view class="title">账户</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item single">
					<view class="cu-avatar round lg" :style="{backgroundImage: 'url('+userInfo.avatarUrl+')'}"></view>
					<view class="content">
						<view class="text-white account-name">{{userInfo.nickName}}</view>
						<view class="text-gray flex account-email">
							<view class="text-cut">
								{{userInfo.email}}
							</view>
						</view>
					</view>
					<view class="action">
						<text class="lg text-gray cuIcon-right"></text>
					</view>
				</view>
			</view>
		</view>
		<view v-if="ifScopeUserInfo" class="my-general">
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
		<view v-if="ifScopeUserInfo" class="my-data">
			<view class="title">数据</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item start">
					<view class="text-white backup">备份数据</view>
				</view>
				<view class="cu-item end">
					<view class="text-white backup">同步数据</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'this is setting page',
				ifScopeUserInfo: false,
				userInfo: {
					avatarUrl: '',
					nickName: '',
					email: ''
				}
			}
		},
		beforeMount: function() {
			let _self = this
			
			try {
			    const userInfo = uni.getStorageSync('userInfo')

			    if (userInfo) {
					_self.ifScopeUserInfo = true
					_self.userInfo.avatarUrl = userInfo.avatarUrl || ''
					_self.userInfo.nickName = userInfo.nickName || ''
			    } else {
					uni.getSetting({
						success:function(res){
							if ('scope.userInfo' in res.authSetting && res.authSetting['scope.userInfo']) {
								_self.ifScopeUserInfo = true
								_self.initData(_self)
							}
						}
					})
				}
			} catch (e) {
			    // error
			}
		},
		methods: {
			userInfoHandler: function(e) {
				if (!('rawData' in e.detail)) {
					return
				}
				this.ifScopeUserInfo = true
				let data = JSON.parse(e.detail.rawData)
				this.userInfo['avatarUrl'] = data.avatarUrl || ''
				this.userInfo['nickName'] = data.nickName || ''

				uni.setStorage({
					key: 'userInfo',
					data: this.userInfo
				})
				
			},
			initData: function(_self) {
				try {
				    const userInfo = uni.getStorageSync('userInfo')
				
				    if (userInfo) {
						_self.ifScopeUserInfo = true
						_self.userInfo.avatarUrl = res.data.avatarUrl || ''
						_self.userInfo.nickName = res.data.nickName || ''
				    }
				} catch (e) {
				    uni.showToast({
				    	title:'get user info error',
				    	duration: 2000,
				    	icon: 'loading'
				    })
				}
			}
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
	
	.login-button {
		background-color: grey;
		width: 100%;
		height: 120rpx;
	}
	
	.login-button::before {
		content: '登录';
		color: #FFFFFF;
		font-size: 14px;
		font-weight: 100;
		text-align: center;
	}

	.cu-list.menu-avatar>.cu-item {
		background-color: grey;
		height: 120rpx;
		margin: 2rpx 0rpx;
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
