<template>
	<view>
		<swiper class="square-dot" :indicator-dots="false" :circular="false" :autoplay="false">
			<swiper-item v-for="(item, index) in arr" :key="index">
				<view class="charts">
					<u-charts :canvas-id="item.id" :chartType="item.chartType" :cWidth="cWidth" :cHeight="cHeight" :opts="item.opts" :ref="item.id"/>
				</view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import uCharts from '@/components/basic/uuchart.vue';
	
	import {
		isJSON
	} from '@/common/checker.js';

	export default {
		props: {
			bgColor: {
				type: String,
				default: '#00acef'
			}
		},
		components: {
			uCharts
		},
		data() {
			return {
				textarea: '',
				cWidth:'',
				cHeight:'',
				arr: []
			}
		},
		beforeMount() {
			this.cWidth=uni.upx2px(850);
			this.cHeight=uni.upx2px(220);
			this.getServerData();
		},
		methods: {
			getServerData() {
				let _self = this
				
				uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data: {},
					success: function(res) {
						let LineA = {
							categories: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'],
							series: [{
								'name': '详细信息',
								'data': [30, 28, 25, 29, 23, 27, 30]
							}]
						};
			
						_self.textarea = JSON.stringify(res.data.data.LineA);
			
						let serverData = [{
							opts: LineA,
							chartType: "line",
							id: "abcc"
						}, {
							opts: LineA,
							chartType: "line",
							id: "bcdd"
						}];
			
						_self.arr = serverData;
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
				});
			},
			changeData() {
				//这里newdata仅做为演示，实际请先获取后台数据，再调用子组件changeData事件
				let newdata = JSON.parse(_self.textarea);
				//'bcdd'为之前后台获取的第二个图表的id，不是固定不变的
				// this.$refs.bcdd[0].changeData('bcdd',newdata)
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 850upx;
		height: 220upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 850upx;
		height: 220upx;
		margin-left: -50upx;
	}
</style>
