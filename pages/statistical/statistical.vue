<template>
	<view class="content">
		<top-line-chart :tbHeight="tlcHeight"></top-line-chart>
	</view>
</template>

<script>
	import topLineChart from '../../components/common/topLineChart.vue'
	
	export default {
		components: {
			topLineChart
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
	.content {
		width: 100%;
	}
</style>
