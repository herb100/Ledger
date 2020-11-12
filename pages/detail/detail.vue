<template>
	<view class="content">
		<top-background></top-background>
		<view>
			<view class="padding radius text-center shadow-blur">
				<view class="text-lg">鎏金</view>
				<view class="margin-top-sm text-Abc">#ff9700 - #ed1c24</view>
			</view>
			<!-- <scroll-view>
				11 月 17 号 星期六  支 收
				生活服务 -38.00 
				21:37 | 致远创想
			</scroll-view> -->
		</view>
	</view>
</template>

<script>
	import topBackground from '../../components/topBackground.vue'
	import config from '../../config.js'

	export default {
		components: {
			'top-background': topBackground
		},
		data() {
			return {
				title: 'this is detail page'
			}
		},
		onLoad() {},
		beforeMount: function() {
			let _self = this
			this.get_bill()
		},
		methods: {
			get_bill: function() {
				uni.request({
					url: config.baseUrl + '/bill',
					header: {},
					data: {},
					method: 'GET',
					success: function(res) {
						console.log(res)
					},
					fail: function(res) {}
				})
			}
		}
	}
</script>

<style scoped>
</style>
