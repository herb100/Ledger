# 微信记账小程序

#### todo
不同设备的 modal 高度不一，目前以 iPhone 4 效果为主

#### 开发说明
Alt+Shift+F 默认格式化快捷键

#### 开发问题集合
1. scroll-view 穿透问题。
  >解决办法：
  > 1 事件触发，在组件内添加 @touchmove.stop.prevent
  > 2 事件触发，给 body 元素设置 height、overflow: hidden(底下页面可能会回到起点)

#### 参考
[导航栏凸起参考](https://blog.csdn.net/weixin_45788691/article/details/107672635)
[DCLOUD 社区](https://ask.dcloud.net.cn/docs/#)
[uni-app](https://uniapp.dcloud.io/)   
[uni-app 插件市场](https://ext.dcloud.net.cn/)
[vue.js 官网](https://cn.vuejs.org/v2/guide/)