<template>
	<view>
		<view :style="{height: cHeight+'px', width: cWidth+'px'}">
			<view v-for="(item, index) in chartInfo" :key="index">
				<view class="charts">
					<uu-charts :canvas-id="item.id" :chartType="item.chartType" :ref="item.id" :c-width="cWidth" :c-height="cHeight"
					:opts="item.opts" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/static/js/u-charts.js';
	import uuCharts from '@/components/basic/uuchart.vue';
	import {
		isJSON
	} from '@/common/checker.js';
	var _self;
	var canvaRing = null;

	export default {
		props: {
			chartInfo: {
				type: Array, 
				default: [{
					id: 'ringChart',
					chartType: 'ring',
					opts: {
						categories: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'],
						"series": [{
							"name": "一班",
							"data": 500
						},
						{
							"name": "二班",
							"data": 30
						},
						{
							"name": "三班",
							"data": 20
						},
						{
							"name": "四班",
							"data": 18
						},
						{
							"name": "五班",
							"data": 8
						}]
					}
				}]
			}
		},
		components: {
			uuCharts
		},
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				textarea: ''
			}
		},
		beforeMount: function() {
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(400);
		},
		methods: {
			changeData() {
				if (isJSON(_self.textarea)) {
					let newdata = JSON.parse(_self.textarea);
					canvaRing.updateData({
						series: newdata.series,
						categories: newdata.categories
					});
				} else {
					uni.showToast({
						title: '数据格式错误',
						image: '../../../static/images/alert-warning.png'
					})
				}
			}
		}
	}
</script>

<style scoped>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 400upx;
		/* background-color: #FFFFFF; */
	}

	.charts {
		width: 750upx;
		height: 400upx;
		/* background-color: #FFFFFF; */
	}
</style>
