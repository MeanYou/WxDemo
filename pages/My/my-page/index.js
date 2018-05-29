// pages/My/my-page/index.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    login: app.globalData.login,
    userInfo: app.globalData.userInfo
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
  onShow: function (e) {
    var time = new Date().getTime();
    var token = app.getToken();
    if(token) {
      if(time < token.exp * 1000) {
        app.globalData.login = false;
        app.globalData.userInfo = token;
        console.log(token)
      }
    }
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
   * 监测是否登录
   */
  checkLogin: function() {
    if(!this.data.login) {
      this.login();
    }
  },

  /**
   * 转到登录页面
   */
  login: function() {
    wx.navigateTo({
      url: '/pages/My/login/login',
    });
  },

  /**
   * 查看我的订单
   */
  checkOrder: function() {
    if(this.data.login) {
      wx.navigateTo({
        url: '/pages/My/my-order/index',
      });
    } else {
      this.login();
    }
  },

  /**
   * 意见反馈
   */
  giveOpinion: function() {
    wx.navigateTo({
      url: '/pages/My/opinion/opinion',
    });
  }
})