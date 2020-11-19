<template>
	<view class="content" ref="detail_page">
		<view class="top-background">
			<top-background></top-background>
			<bill-form></bill-form>
		</view>
		<!-- 添加账单 -->
		<view class="add-bill" @tap="showModal" data-target="addBillModal"></view>
		<!-- 添加账单模态框 -->
		<view class="cu-modal bottom-modal" :class="modalName=='addBillModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-green">确定</view>
					<view class="action text-blue" @tap="hideModal">取消</view>
				</view>
				<view class="padding-xl">
					Modal 内容。
				</view>
			</view>
		</view>
		<!-- 账单列表 -->
		<view class="bill-list">
			<bill-list></bill-list>
			<bill-list></bill-list>
			<bill-list></bill-list>
			<bill-list></bill-list>
			<bill-list></bill-list>
			<bill-list></bill-list>
		</view>
	</view>
</template>

<script>
	import topBackground from '../../components/common/topBackground.vue'
	import billForm from '../../components/billForm.vue'
	import billList from '../../components/billList.vue'
	import config from '../../config.js'

	export default {
		components: {
			'top-background': topBackground,
			'bill-form': billForm,
			'bill-list': billList
		},
		data() {
			return {
				title: 'this is detail page',
				billInfo: [],
				modalName: null
			}
		},
		onLoad() {},
		beforeMount: function() {
			let _self = this
			// this.get_bill(_self)
		},
		mounted: function() {
		},
		methods: {
			controlFlag() {
				this.flag = true
			},
			get_bill: function(_self) {
				uni.request({
					url: config.baseUrl + '/bill',
					header: {},
					data: {},
					method: 'GET',
					success: function(res) {
						// console.log(res)
						// _self.billInfo = res
					},
					fail: function(res) {}
				})
			},
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
	page {
		background-color: #ffffff;
		font-family: 微软雅黑;
	}

	.top-background {
		background-color: #3eb575;
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.content {
		width: 100%;
		position: absolute;
	}

	.bill-list {
		width: 95%;
		margin: 0 2.5%;
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
		position: sticky;
		top: 78%;
		left: 82%;
		z-index: 100;
	}
</style>
