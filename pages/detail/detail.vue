<template>
	<view class="content">
		<view>
			账单小簿
			全部类型
			2020 年 11 月(多选)
			总支出
			总收入
		</view>
		<view>
			<scroll-view>
				生活服务 -38.00 21:37 | 致远创想
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import config from '../../config.js'

	export default {
		components: {
		},
		data() {
			return {
				title: 'this is detail page'
			}
		},
		onLoad() {
		},
		beforeMount: function() {
			let _self = this
			this.get_bill()
		},
		methods: {
			get_bill: function() {
				uni.request({
					url: config.baseUrl + '/bill',
					header:{},
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
