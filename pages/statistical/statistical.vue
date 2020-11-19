<template>
	<view class="content">
		<view class="top-background">
			<top-background></top-background>
		</view>
	</view>
</template>

<script>
	import topBackground from '../../components/common/topBackground.vue'
	
	export default {
		components: {
			'top-background': topBackground,
		},
		data() {
			return {
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
