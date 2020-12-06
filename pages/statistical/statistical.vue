<template>
	<view class="content">
		<view class="top-line-chart" :style="{height: tlcHeight==='auto'?'auto':tlcHeight+'rpx'}">
			<top-line-chart @getCurClickIndex="getCurClickIndex" @getCurSwiperIndex="getCurSwiperIndex"></top-line-chart>
		</view>
		<view>
			<ring-chart></ring-chart>
		</view>
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
				tlcHeight: 'auto',
				title: 'this is statistical page'
			}
		},
		onLoad() {

		},
		methods: {
			getCurClickIndex: function(index) {
				console.log('click index ', index)
			},
			getCurSwiperIndex: function(index) {
				console.log('swiper index ', index)
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
		height: 100%;
		background-color: #3EB575;
	}
	
	.top-line-chart {
		overflow: hidden;
	}
</style>
