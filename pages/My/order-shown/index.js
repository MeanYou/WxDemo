// pages/My/order-shown/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carDetail: {
      url: 'http://pic31.photophoto.cn/20140629/0022005835563835_b.jpg',
      name: '日产轩逸2018款320自动旗舰版',
      much: '￥1.0',
      many: 'x 1'
    },
    comment: {
      id: 1,
      avatar: 'http://img3.a0bi.com/upload/ttq/20140813/1407915088900.jpg',
      username: '李***5',
      stars: '5',
      date: '2018.04.30',
      content: '价格很划算，比其他4S店价格要优惠，而且还送了我2000的油卡。很开心很开心很开心很开心很开心很开心很开心很开心',
      carType: '日产轩逸',
      pics: [
        'http://pic31.photophoto.cn/20140629/0022005835563835_b.jpg',
        'http://pic31.photophoto.cn/20140629/0022005835563835_b.jpg'
      ]
    }
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
   * 领取礼品
   */
  getGift: function() {
    wx.navigateTo({
      url: '/pages/My/get-gift/index',
    })
  }
})