// 配置文件

let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
	baseUrl = 'http://127.0.0.1:8090'
} else {
	baseUrl = ''
}

let config = {
	baseUrl: baseUrl,
	mockDebug: true
}

module.exports = config