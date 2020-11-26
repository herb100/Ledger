<template>
	<view class="qiun-columns">
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
			 :style="{'width':cWidth+'px','height':cHeight+'px'}" disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA"
			 @touchend="touchEndLineA"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" disable-scroll=true @touchstart="touchLineA"
			 @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
			<!--#endif-->
		</view>
		<!--#ifdef H5 -->
		<!-- <button class="qiun-button" @tap="changeData()">更新图表</button> -->
		<!--#endif-->
	</view>
</template>

<script>
	import uCharts from '@/static/js/u-charts.js';
	import  { isJSON } from '@/common/checker.js';
	var _self;
	var canvaLineA=null;
   
	export default {
		props: {
			bgColor: {
				type: String,
				default: '#00acef'
			}
		},
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				textarea:''
			}
		},
		mounted() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio>1){
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio =2;
					}
				}
			});
			//#endif
			this.cWidth=uni.upx2px(800);
			this.cHeight=uni.upx2px(220);
			this.getServerData();
		},
		methods: {
			getServerData(){
				uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data:{
					},
					success: function(res) {
						console.log(res.data.data)
						res = { "data": {
							"data": {
								"LineA": {
									"categories":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
									"series":[
										{"name":"成交量C","data":[100,80,95,150,112,132,123]},
									]}
								}
							}
						}
						let LineA={categories:[], series:[]};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						LineA.categories=res.data.data.LineA.categories;
						LineA.series=res.data.data.LineA.series;
						_self.textarea = JSON.stringify(res.data.data.LineA);
						_self.showLineA("canvasLineA",LineA);
					},
					fail: () => {
						_self.tips="网络错误，小程序端请检查合法域名";
					},
				});
			},
			showLineA(canvasId,chartData){
				canvaLineA=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'line',
					fontSize:11,
					padding:[15,15,0,15],
					legend:{
						show:false,
					},
					colors: ['#FFFFFF'],
					dataLabel:false,
					dataPointShape:true,
					dataPointShapeType:'solid',
					background: 'red',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: false,//开启图表拖拽功能
					xAxis: {
						disableGrid:true,
						type:'grid',
						gridType:'dash',
						scrollShow: false,
						itemCount: 7,
						scrollAlign:'left',
						fontColor: '#000000',
						axisLine: false
					},
					yAxis: {
						disabled:true,
						disableGrid:true,
						gridType:'dash',
						splitNumber:8,
						min:10,
						max:180,
						format:(val)=>{return val.toFixed(0)+'元'}//如不写此方法，Y轴刻度默认保留两位小数
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						line:{
							type: 'straight'
						}
					},
				});
			},
			touchLineA(e){
				canvaLineA.scrollStart(e);
				let dataIndex = canvaLineA.getCurrentDataIndex(e);
				console.log('click dataIndex: ' + dataIndex)
			},
			moveLineA(e) {
				canvaLineA.scroll(e);
			},
			touchEndLineA(e) {
				// canvaLineA.scrollEnd(e);
			},
			changeData(){
				if(isJSON(_self.textarea)){
					let newdata=JSON.parse(_self.textarea);
					canvaLineA.updateData({
						series: newdata.series,
						categories: newdata.categories,
						scrollPosition:'right',
						animation:false
					});
				}else{
					uni.showToast({
						title:'数据格式错误',
						image:'../../../static/images/alert-warning.png'
					})
				}
			},
			
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 800upx;
		height: 220upx;
		margin-left: -20upx;
		/* background-color: #FFFFFF; */
	}
	
	.charts {
		width: 800upx;
		height: 220upx;
		/* background-color: #FFFFFF; */
	}
</style>
