// pages/about/index.js
// var app = getApp()
// var WXBizDataCrypt = require('../../utils/WXBizDataCrypt')/
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobileInfo: {
      model:'', // 手机型号
        pixelRatio: '', // 设备像素比
        language: '', // 微信设置语言
        version: '', // 微信版本
        platform: '', // 客户端平台
    },
    networkType: '', // 网络类型
    wifiList: '', // WiFi列表
    wifiLists: '', // 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  // 获取微信运动信息
  getSprit: function () {
    wx.getWeRunData({
      success(res) {
        const encryptedData = res.encryptedData
        // console.log('解密前 data: ', res)
      },
      fail: function (res) {
        wx.showModal({
          title: '提示',
          content: '开发者未开通微信运动，请关注“微信运动”公众号后重试',
          showCancel: false,
          confirmText: '知道了'
        })
      }
    })
  },

  // 获取设备信息
  getSystemInfo: function () {
    var that = this
    try {
      // 获取设备信息
      wx.getSystemInfo({
        success: function(res) {
          // console.log(res, '设备')
        }
      })
      // 罗盘
      wx.onCompassChange(function (res) {
        // console.log(res.direction, '罗盘')
      })
      // 获取系统信息同步接口
      var res = wx.getSystemInfoSync()

      // 监听加速度数据，频率：5次/秒
      wx.onAccelerometerChange(function(res) {
        console.log(res, '监听加速度数据')
      })

      // 获取网络状态
      wx.getNetworkType({
        success: function(res) {
          // 返回网络类型, 有效值：wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
          that.setData({networkType: res.networkType})
        }
      })
      // 监听网络状态变化。
      wx.onNetworkStatusChange(function(res) {
        // console.log(res.isConnected) // 当前是否有网络连接
        // console.log(res.networkType) // 网络类型
      })
      // wifi
      wx.startWifi({
        success: function(res) {
          that.setData({wifiList: res.errMsg})
        },
        fail: function (res) {
          console.log(res, '初始化 Wi-Fi 模块失败');
        },
      })
      // 请求获取 Wi-Fi 列表，在 onGetWifiList 注册的回调中返回 wifiList 数据。iOS 将跳转到系统的 Wi-Fi 界面，Android 不会跳转。
      wx.getWifiList({
        success: function (res) {
          
        },
        fail: function (res) {
          console.log(res, '获取WiFi失败');
        }
      })
      // 监听在获取到 Wi-Fi 列表数据时的事件，在回调中将返回 wifiList。
      this.setData({wifiLists: []})
      wx.onGetWifiList(function (res) {
        that.setData({wifiLists: res.wifiList})
      })
    } catch (e) {
      // Do something when catch error
    }
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
    this.getSystemInfo();
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