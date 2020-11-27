let wxAuth = function(authName) {
	let _self = this

	uni.getSetting({
		complete: function(res) {
			let wxAuth = res.authSetting || {}
			if (!(authName in wxAuth && wxAuth[authName])) {
				uni.authorize({
					scope: 'scope.userInfo'
				})
			}
		}
	})
}

export {
	wxAuth
}
