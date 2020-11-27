# 微信记账小程序

#### todo
不同设备的 modal 高度不一，目前以 iPhone 4 效果为主

#### 开发说明
Alt+Shift+F 默认格式化快捷键

#### 开发问题集合
1. scroll-view 穿透问题。
  > 解决办法：
  > 1 事件触发，在组件内添加 @touchmove.stop.prevent
  > 2 事件触发，给 body 元素设置 height、overflow: hidden(底下页面可能会回到起点)
2. 无法使用 $refs。
  > 解决办法：
  > 微信小程序要使用 wx.createSelectorQuery() 
  > (非H5端只能用于获取自定义组件，不能用于获取内置组件实例,如：view、text)，详见 uniapp 跨端兼容
3. 预览出错 
  > 错误：app-service.js: TypeError: Cannot read property 'getElementsByTagName' of undefined
  > 试验：1 与其他 iconfont 字体同文件夹下会报此错误，其他位置不报错
  >      2 与其他 iconfont 字体同文件夹下，其他命名不执行，iconfont.js 必执行
  >      3 搜索字体文件没有关于 iconfont.js 的引用
  > 猜测：可能是 iconfont 文件使用了其他方式调用

#### 参考
[导航栏凸起参考](https://blog.csdn.net/weixin_45788691/article/details/107672635)
[DCLOUD 社区](https://ask.dcloud.net.cn/docs/#)
[uni-app](https://uniapp.dcloud.io/)   
[uni-app 插件市场](https://ext.dcloud.net.cn/)
[vue.js 官网](https://cn.vuejs.org/v2/guide/)
[uniapp Vue 特性兼容问题](https://uniapp.dcloud.io/use?id=vue%e7%89%b9%e6%80%a7%e6%94%af%e6%8c%81%e8%a1%a8)
[uniapp 跨端兼容](https://uniapp.dcloud.io/platform?id=%e8%b7%a8%e7%ab%af%e5%85%bc%e5%ae%b9)
[ucharts](http://doc.ucharts.cn/)