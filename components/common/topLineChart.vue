<template>
	<view>
		<swiper :style="{height: cHeight+'px', width: cWidth+'px'}" :indicator-dots="false" :current="currentIndex" :circular="false"
		 :autoplay="false" @click="chartMaskClick" @change="swiperChange" ref="swiper">
			<swiper-item v-for="(item, index) in chartInfo" :key="index">
				<view class="charts">
					<uu-charts :canvas-id="item.id" :chartType="item.chartType" :ref="item.id" :c-width="cWidth" :c-height="cHeight"
					 :opts="item.opts" />
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import uuCharts from '@/components/basic/uuchart.vue';

	export default {
		props: {
			bgColor: {
				type: String,
				default: '#00acef'
			},
			chartInfo: {
				type: Array, 
				default: [{
					id: 'lineChart',
					chartType: 'line',
					opts: {
						categories: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'],
						series: [{
							'name': '详细信息',
							'data': [0, 0, 0, 0, 0, 0, 0]
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
				textarea: '',
				cWidth: '',
				cHeight: '',
				currentIndex: 0
			}
		},
		beforeMount: function() {
			this.cWidth = uni.upx2px(850);
			this.cHeight = uni.upx2px(200);
		},
		methods: {
			// 由于 uchart 嵌套在 swiper 中，导致 e 错乱从而 getCurrentDataIndex 无效
			// 这个方法通过点击事件将外部的 e 传入对应 uchart 的 getCurrentDataIndex 方法中
			// 从而替换错误的 e 
			chartMaskClick: function(e) {
				let uuchartID = this.chartInfo[this.currentIndex]['id']
				let uuchart = this.$refs[uuchartID][0]
				let index = uuchart.canvases[uuchartID].getCurrentDataIndex(e)
				if (index !== -1) {
					console.log(index)
				}
			},
			changeData: function() {
				let _self = this
				//这里newdata仅做为演示，实际请先获取后台数据，再调用子组件changeData事件
				// _self.textarea = JSON.stringify(res.data.data.LineA);
				let newdata = JSON.parse(_self.textarea);
				//'bcdd'为之前后台获取的第二个图表的id，不是固定不变的
				// this.$refs.bcdd[0].changeData('bcdd',newdata)
			},
			swiperChange: function(e) {
				this.$emit('getCurSwiperIndex', e.detail.current)
			},
			getCurClickIndex: function(e) {
				console.log('getCurClickIndex ', e.touches[0])
				// this.$emit('getCurClickIndex', index)
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 850upx;
		height: 200upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 850upx;
		height: 200upx;
		margin-left: -50upx;
	}
</style>
