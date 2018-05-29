// pages/miaosha/miaosha.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1000,
    swiperCurrent: 0,
    banners: [
      {
        "id": 1,
        "imgUrl": "https://cdn.it120.cc/apifactory/2017/09/15/145c582252a7a20f21ad9a025ae8c9be.png",
      },
      {
        "id": 2,
        "imgUrl": "https://cdn.it120.cc/apifactory/2017/09/15/73560c511f554eb4afd1dcade9d8ef67.png",
      },
      {
        "id": 3,
        "imgUrl": "https://cdn.it120.cc/apifactory/2017/09/15/5acdd8f65ec85b413ee642dda795d835.png",
      }
    ],
    noticeList: {
      "totalRow": 1,
      "totalPage": 1,
      "dataList": [
        {
          "dateAdd": "1秒前",
          "id": 161,
          "isShow": true,
          "title": "王**已成功参与一元秒杀活动",
          "userId": 951
        },
        {
          "dateAdd": "5秒前",
          "id": 162,
          "isShow": true,
          "title": "李**已成功参与一元秒杀活动",
          "userId": 951
        }
      ]
    },
    miaoshaItems: [
      {
        "id": "20165555",
        "title": "公务员首选",
        "img": "http://pic31.photophoto.cn/20140629/0022005835563835_b.jpg",
        "name": "日产轩逸2018款6XVXCVT尊享豪华限量版",
        "tags": ["到店送好礼", "晒单送油卡", "限时拼团"],
        "guidePrice": "155000",
        "installment": {
          "downPament": "0",
          "monthlySupply": "3150",
          "months": "36"
        }
      },
      {
        "id": "20161111",
        "title": "公务员首选",
        "img": "http://pic31.photophoto.cn/20140629/0022005835563835_b.jpg",
        "name": "日产轩逸2018款6XVXCVT尊享豪华限量版",
        "tags": ["到店送好礼", "晒单送油卡", "限时拼团"],
        "guidePrice": "155000",
        "installment": {
          "downPament": "0",
          "monthlySupply": "3150",
          "months": "36"
        }
      },
      {
        "id": "2035444",
        "title": "公务员首选",
        "img": "http://pic31.photophoto.cn/20140629/0022005835563835_b.jpg",
        "name": "日产轩逸2018款6XVXCVT尊享豪华限量版",
        "tags": ["到店送好礼", "晒单送油卡", "限时拼团"],
        "guidePrice": "155000",
        "installment": {
          "downPament": "0",
          "monthlySupply": "3150",
          "months": "36"
        }
      }
    ],
    endDate: "2018.5.31",
    endDateDetail: {
      day: "0",
      hour: "00",
      minute: "00",
      second: "00"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.baseUrl + 'api/group-buy-service/home',
      method: 'POST',
      success: function(e) {
        if(e.data.code === "1") {
          var data = e.data.data;
          that.setData({
            banners: data.banners
          });
        }
        if(e.data.code === "0") {
          wx.showToast({
            title: e.data.msg,
            icon: 'none'
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.tick();
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
   * 顶端swiper改变
   */
  swiperchange: function (e) {
    //console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  /**
   * 点击banner图片进入某页面
   */
  tapBanner: function (e) {
    if (e.currentTarget.dataset.id != 0) {
      // wx.navigateTo({
      //   url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
      // })
    }
  },

  /**
   * 查看晒单评价
   */
  checkComment: function (e) {
    wx.navigateTo({
      url: "/pages/comment/comment"
    })
  },

  /**
   * 查看下期预告
   */
  checkNextActivities: function(e) {
    wx.navigateTo({
      url: "/pages/next-activities/index"
    })
  },

  /**
   * 查看往期活动
   */
  checkPrevActivities: function() {
    wx.navigateTo({
      url: "/pages/prev-activities/index"
    })
  },

  /**
   * 倒计时，
   */
  tick: function () {
    var endDateArr = this.data.endDate.split('.');
    var endDate = new Date();
    endDate.setFullYear(endDateArr[0]);
    endDate.setMonth(endDateArr[1] * 1 - 1);
    endDate.setDate(1 + 1 * endDateArr[2]);
    endDate.setHours(0);
    endDate.setMinutes(0);
    endDate.setSeconds(0);

    var self = this;
    setInterval(function () {
      var now = new Date();
      var endMillions = endDate.getTime();
      var nowMillions = now.getTime();
      var millions = endMillions - nowMillions;
      var days = Math.floor(millions / (1000 * 60 * 60 * 24));
      var hours = Math.floor((millions - days * 24 * 60 * 60 * 1000) / (1000 * 60 * 60));
      var minutes = Math.floor((millions - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000) / (1000 * 60));
      var seconds = Math.floor(millions / 1000 % 60);

      self.setData({
        endDateDetail: {
          day: days > 9 ? days : '0' + days,
          hour: hours > 9 ? hours : '0' + hours,
          minute: minutes > 9 ? minutes : '0' + minutes,
          second: seconds > 9 ? seconds : '0' + seconds
        }
      });
    }, 1000);

  }
})