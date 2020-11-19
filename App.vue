<script>
	import Vue from 'vue'
	import mockApi from './utils/mockApi.js'
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("static/css/colorui-main.css");
	@import url("static/css/colorui-icon.css");
	@import url("static/css/common.css");
	@import url("static/css/iconfont.css");
</style>