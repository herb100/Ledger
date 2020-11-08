# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 项目开发
代码格式化：Shift+Alt+F (默认快捷键)
本地开发：
1 项目根目录下 config.js 配置 mockDebug 为 true
2 在 utils/MockApi.js 配置需要的请求 Url 及响应
3 关闭本地开发的校验 域名合法性 (如果可以忍受报错可以不管)

## 参考文档
- [WeUI 微信小程序组件库](https://github.com/Tencent/weui-wxss/)
- [Mock 使用示例](http://mockjs.com/examples.html)
- [Mock.js](https://github.com/nuysoft/Mock/blob/refactoring/dist/mock.js)
- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

