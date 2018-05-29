// pages/My/show-order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderInfo: {
      orderId: '234314343535235',
      img: 'http://pic31.photophoto.cn/20140629/0022005835563835_b.jpg'
    },
    level: 5,
    stars: [1,2,3,4,5],
    comment: '',
    hidePic: false
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
   * 更改用户评分
   */
  changeLevel: function(e) {
    this.setData({
      level: e.target.dataset.index
    });
    console.log(this.data.level)
  },

  /**
   * 用户输入评论
   */
  changeComment: function(e) {
    this.setData({
      comment: e.detail.value
    })
  },

  /**
   * 切换是否隐藏图片
   */
  toggleHidePic: function() {
    this.setData({
      hidePic: !this.data.hidePic
    });
  },

  /**
   * 提交评价
   */
  submit: function() {
    wx.navigateTo({
      url: '/pages/My/order-shown/index',
    });
  }
})