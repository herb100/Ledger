<template>
	<view class="bg-gradual-blue">
		账单小簿
		全部类型
		2020 年 11 月(多选)
		总支出
		总收入
	</view>
</template>

<script>
	import billTypes from '../common/billTypes.js'

	export default {
		data() {
			return {

			};
		},
		beforeMount: function() {
			console.log(billTypes)
		}
	}
</script>

<style>

</style>
