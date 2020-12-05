<template>
	<canvas v-if="canvasId" :id="canvasId" :canvasId="canvasId" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
	 @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @error="error">
	</canvas>
</template>

<script>
	import uCharts from '@/static/js/u-charts.js';
	var canvases = {};
	
	export default {
		props: {
			chartType: {
				required: true,
				type: String,
				default: 'column'
			},
			opts: {
				required: true,
				type: Object,
				default () {
					return null;
				},
			},
			canvasId: {
				type: String,
				default: 'u-canvas',
			},
			cWidth: {
				default: 375,
			},
			cHeight: {
				default: 250,
			},
			pixelRatio: {
				type: Number,
				default: 1,
			},
		},
		mounted() {
			this.init();
		},
		methods: {
			init: function() {
				switch (this.chartType) {
					case 'column':
						this.initColumnChart();
						break;
					case 'line':
						this.initLineChart();
						break;
					default:
						break;
				}
			},
			initLineChart: function() {
				canvases[this.canvasId] = new uCharts({
					$this: this,
					canvasId: this.canvasId,
					type: 'line',
					fontSize: 11,
					padding: [15, 15, 0, 15],
					legend: {
						show: false
					},
					colors: ['#FFFFFF'],
					dataLabel: false,
					dataPointShape: true,
					pixelRatio: this.pixelRatio,
					categories: this.opts.categories,
					series: this.opts.series,
					animation: true,
					enableScroll: false,
					xAxis: {
						type: 'grid',
						disableGrid: true,
						gridColor: '#CCCCCC',
						gridType: 'dash',
						itemCount: 7,
						scrollShow: false,
						axisLine: false
					},
					yAxis: {
						disabled: true,
						disableGrid: true,
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
						min: 10,
						max: 180,
						format: (val) => {
							return val.toFixed(0) + '元'
						}
					},
					width: this.cWidth * this.pixelRatio,
					height: this.cHeight * this.pixelRatio,
					extra: {
						line: {
							type: 'straight'
						}
					}
				});
			},
			// 这里仅作为示例传入两个参数，cid为canvas-id,newdata为更新的数据，需要更多参数请自行修改
			changeData(cid,newdata) {
				canvases[cid].updateData({
					series: newdata.series,
					categories: newdata.categories
				});
			},
			touchStart: function(e) {
				// canvases[this.canvasId].showToolTip(e, {
				// 	format: function(item, category) {
				// 		return category + ' ' + item.name + ':' + item.data
				// 	}
				// });
				// canvases[this.canvasId].scrollStart(e);
			},
			touchMove: function(e) {
				// canvases[this.canvasId].scroll(e);
			},
			touchEnd: function(e) {
				// canvases[this.canvasId].scrollEnd(e);
			},
			error: function(e) {
				console.log(e)
			}
		},
	};
</script>

<style scoped>
	.charts {
		width: 100%;
		height: 100%;
		flex: 1;
		/* background-color: #FFFFFF; */
	}
</style>
