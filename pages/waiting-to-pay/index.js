// pages/waiting-to-pay/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    this.setData(prevPage.data);
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
   * 用户取消订单
   */
  cancelOrder: function () {
    wx.showModal({
      title: '提示',
      content: '确认取消订单吗？',
      success: function (e) {
        if (e.confirm) {
          wx.navigateTo({
            url: '/pages/cancelled/cancelled',
          })
        }
        
      }
    })
  },

  /**
   * 用户点击支付
   */
  pay: function () {
    console.log('个人开发版暂不涉及支付功能');
    wx.navigateTo({
      url: '/pages/paid/paid',
    })
  }
})