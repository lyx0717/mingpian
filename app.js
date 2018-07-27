//app.js

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 请求
    // wx.request({
    //   url: '',
    //   data: {},
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   method: 'GET', //（需大写）有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   dataType: 'json',
    //   responseType: 'text',// 设置响应的数据类型。合法值：text、arraybuffer
    //   success: function(res) {
    //     console.log(res.data, '成功')
    //   },
    //   fail: function(res) {
    //     console.log(res, '失败');
    //   },
    //   complete: function (res) {
    //     console.log(res, 'complete');
    //   }// 接口调用结束的回调函数（调用成功、失败都会执行）
    // })

    var that = this;
    wx.login({
      success: function(res){
        var appid = "wxe0c55770c2186407";
        var secret = "1e9b95e7242f4ec48526b91331bb49a0";
        console.log(res);
        if(res.code){
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          // wx.request({
          //   url: 'url',
          //   method: 'POST', // 必须大写
          //   header: {
          //     'content-type': 'application/json'
          //   },
          //   data: {
          //     code: res.code
          //   },
          //   success: function(res){
          //     console.log(res); // 拿到token
          //     that.globalData.token = res.data.data.token;//拿到后将token存入全局变量  以便其他页面使用
          //   }
          // })
        }
      }
    })
  },

// 获取用户信息（已废弃）
  // getUserInfo:function(cb){
  //   var that = this
  //   if(this.globalData.userInfo){
  //     typeof cb == "function" && cb(this.globalData.userInfo)
  //   }else{
  //     //调用登录接口
  //     wx.login({
  //       success: function () {
  //         wx.getUserInfo({
  //           success: function (res) {
  //             that.globalData.userInfo = res.userInfo
  //             typeof cb == "function" && cb(that.globalData.userInfo)
  //           }
  //         })
  //       }
  //     })
  //   }
  // },
  globalData:{
    userInfo: null
  }
})

// 获取token地址
// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxe0c55770c2186407&secret=6bc8dfb2a6030a72e27e06b9ea596a71