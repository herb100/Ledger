<template>
	<view class="content">
		<top-line-chart :tbHeight="tlcHeight"></top-line-chart>
		<ring-chart></ring-chart>
	</view>
</template>

<script>
	import topLineChart from '@/components/common/topLineChart.vue'
	import ringChart from '@/components/statisticalModule/ringChart.vue'
	
	export default {
		components: {
			topLineChart,
			ringChart
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
