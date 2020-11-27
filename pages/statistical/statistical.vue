<template>
	<view class="content">
		<top-line-chart :tbHeight="tlcHeight"></top-line-chart>
		<ring-chart></ring-chart>
		<cost-list></cost-list>
	</view>
</template>

<script>
	import topLineChart from '@/components/common/topLineChart.vue'
	import ringChart from '@/components/statisticalModule/ringChart.vue'
	import costList from '@/components/statisticalModule/CostList.vue'

	export default {
		components: {
			topLineChart,
			ringChart,
			costList
		},
		data() {
			return {
				tlcHeight: 115,
				title: 'this is statistical page'
			}
		},
		onLoad() {

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
	}
</style>
