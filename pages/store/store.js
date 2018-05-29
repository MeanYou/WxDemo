// pages/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: 6,
    storeList: [
      {
        isSelfSupport: true,
        name: '郑州体验店',
        location: '河南省郑州市东三环锦艺城C区一层VERO MODA西门进入直行30米',
        distance: '1.56km'
      },
      {
        isSelfSupport: true,
        name: '郑州体验店',
        location: '河南省郑州市郑东新区东三街与商务内环交叉口中储粮大厦副楼妙优车',
        distance: '2.56km'
      }, 
      {
        isSelfSupport: true,
        name: '中牟体验店',
        location: '河南省郑州市中牟区锦艺城C区一层VERO MODA西门进入直行30米',
        distance: '5.99km'
      },
      {
        isSelfSupport: true,
        name: '新郑体验店',
        location: '河南省郑州市新郑市龙湖大街和双湖大道交叉口购物城进入直行30米',
        distance: '9.51km'
      },
      {
        isSelfSupport: true,
        name: '郑州体验店',
        location: '河南省郑州市长湖区东三环东风路购物城C区一层西门进入直行30米',
        distance: '11.32km'
      },
      {
        isSelfSupport: true,
        name: '郑州体验店',
        location: '河南省郑州市东三环锦艺城C区一层VERO MODA西门进入直行30米',
        distance: '21.56km'
      }
    ]
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
   * 选择门店后执行
   */
  selectStore: function(e) {
    var name = e.currentTarget.dataset.name;
    var location = e.currentTarget.dataset.location;

    var pages = getCurrentPages();
    var lastPage = pages[pages.length - 2];
    lastPage.setData({
      curStore: {
        name: name,
        location: location
      }
    });
    wx.navigateBack();
  }
})