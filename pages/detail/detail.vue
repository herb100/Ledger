<template>
	<view class="content" ref="detail_page">
		<view class="top-background">
			<top-background></top-background>
			<bill-form></bill-form>
		</view>
		<add-bill-form></add-bill-form>
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
	import billForm from '../../components/detailModule/billForm.vue'
	import billList from '../../components/detailModule/billList.vue'
	import addBillForm from '../../components/detailModule/addBillForm.vue'
	import config from '../../config.js'

	export default {
		components: {
			topBackground,
			billForm,
			billList,
			addBillForm
		},
		data() {
			return {
				title: 'this is detail page',
				billInfo: []
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
</style>
