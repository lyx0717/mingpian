// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    circular: true,
    workds: [
      { title: '寄生草',
        logo: '',
        subtitle: '《鲁智深醉闹五台山》', 
        skills: ['漫揾英雄泪，相离处士家。', '谢慈悲，剃度在莲台下。', '没缘法，转眼分离乍。', '赤条条，来去无牵挂。', '那里讨，烟蓑雨笠卷单行？', '一任俺，芒鞋破钵随缘化！']
        },
      {
        title: '寄生草·解偈',
        logo: '',
        subtitle: '《鲁智深醉闹五台山》',
        skills: ['无我原非你，从他不解伊。', '肆行无碍凭来去，茫茫着甚悲愁喜？', '纷纷说甚亲疏密？从前碌碌却因何？', '到如今，回头试想真无趣！']
      },
      {
        title: '寄生草',
        logo: '',
        subtitle: '《鲁智深醉闹五台山》',
        skills: ['漫揾英雄泪，相离处士家。', '谢慈悲，剃度在莲台下。', '没缘法，转眼分离乍。', '赤条条，来去无牵挂。', '那里讨，烟蓑雨笠卷单行？', '一任俺，芒鞋破钵随缘化！']
      }
    ]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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