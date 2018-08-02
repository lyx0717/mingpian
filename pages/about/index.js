// pages/about/index.js
// var app = getApp()
// var WXBizDataCrypt = require('../../utils/WXBizDataCrypt')/
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    showViewFlag: false,
    userProfile:{
      name:'李永轩',
      job:'前端开发工程师',
      location:'北京',
      profession:'IT开发',
      email:'lyx0717@yeah.net',
      wechat:'LI919112965',
      mobile:'17607140609',
      github:'https://github.com/lyx0717',
      introduction:'欢迎来到我的个人名片！'
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   console.log(userInfo)
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    //   that.setData({
    //     showViewFlag: true
    //   })
    // })
  },
  onShareAppMessage: function () {
    return {
      title: '李狗蛋',
      path: '/pages/about/index?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

// 绑定input 
bindKeyInput: function(e) {
  this.setData({
    inputValue: e.detail.value
  })
},

// 打电话
callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '17607140609', //仅为示例，并非真实的电话号码
      success: function () {
        console.log('打电话成功');
      },
      fail: function () {
        console.log('打电话失败');
      },
    })
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  onGotUserInfo: function(e) {
    this.setData({
      userInfo: e.detail.userInfo
    })
    if (e.detail.userInfo) {
      this.setData({
        showViewFlag: true
      })
    }
    // console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})