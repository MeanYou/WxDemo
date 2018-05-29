// pages/My/get-gift/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    tel: '',
    addr: '',
    addrDetail: ''
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
   * 用户输入更改
   */
  inputChange: function(e) {
    console.log(e)
    switch(e.target.dataset.name)
    {
      case 'name':
        this.setData({
          name: e.detail.value
        });
        break;
      case 'tel':
        this.setData({
          tel: e.detail.value
        });
        break;
      case 'addr':
        e.detail.value[0] === e.detail.value[1] ? e.detail.value[0] = '' : 0;
        e.detail.value[1] === '县' ? e.detail.value[1] = '' : 0;
        this.setData({
          addr: e.detail.value.join('')
        });
        break;
      case 'addrDetail':
        this.setData({
          addrDetail: e.detail.value
        });
        break;
    }
  }
})