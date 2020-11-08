// 获取小程序当前版本信息 https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html
// 自动根据版本切换接口请求地址
const {
  miniProgram: {
    envVersion
  }
} = wx.getAccountInfoSync();
let url = '';

switch (envVersion) {
  case 'develop':
    url = `${defaultConfig.devUrl}${params.url}`;
    break;
  case 'trial':
    url = `${defaultConfig.devUrl}${params.url}`;
    break;
  case 'release':
    url = `${defaultConfig.prodUrl}${params.url}`;
    break;
  default:
    url = `${defaultConfig.baseUrl}${params.url}`;
    break;
}

console.log(url, 'url');
console.log(envVersion, 'envVersion');