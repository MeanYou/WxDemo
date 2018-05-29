// pages/item-detail/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    curImg: 1,
    imgs: [
      "https://cdn.it120.cc/apifactory/2017/09/15/145c582252a7a20f21ad9a025ae8c9be.png",
      "https://cdn.it120.cc/apifactory/2017/09/15/73560c511f554eb4afd1dcade9d8ef67.png",
      "https://cdn.it120.cc/apifactory/2017/09/15/5acdd8f65ec85b413ee642dda795d835.png"
    ],
    noticeList: {
      "totalRow": 1,
      "totalPage": 1,
      "dataList": [
        {
          "dateAdd": "1秒前",
          "id": 161,
          "isShow": true,
          "title": "王**已成功参与秒杀活动",
          "img": "http://img3.a0bi.com/upload/ttq/20140813/1407915088900.jpg",
          "userId": 950
        },
        {
          "dateAdd": "5秒前",
          "id": 162,
          "isShow": true,
          "title": "李**已成功参与秒杀活动",
          "img": "http://img3.a0bi.com/upload/ttq/20140813/1407915088900.jpg",
          "userId": 951
        }
      ]
    },
    detail: {
      fullPrice: '155500',
      name: '日产轩逸2018款6XVXCVT尊享豪华限量版',
      guidePrice: '166600'
    },
    endDate: "2018.5.31",
    endDateDetail: {
      day: "0",
      hour: "00",
      minute: "00",
      second: "00"
    },
    progress: {
      full: 500,
      present: 365
    },
    note: '达至1000人参团，每人均可参团领取500元油卡，购买活动持续，成功支付首付即可领取油卡。',
    showActivityDetail: false,
    activityList: [
      {
        tag: '到店礼',
        content: '活动期间，凡到店均有好礼相送',
        date: '2018.05.06-2018.05.12',
        id: '1'
      },
      {
        tag: '油卡',
        content: '凡买车即送价值2000元的油卡',
        id: '2'
      },
      {
        tag: '油卡',
        content: '凡晒单即送价值1000元的油卡',
        id: '3'
      }
    ],
    showInstallmentDetail: false,
    installment: {
      firstYear: {
        downPayment: "0",
        monthlySupply: "2998",
        months: "12"
      }
    },
    curStore: {
      name: '北京体验店',
      location: '北京市朝阳区东三环锦艺城C区一层VERO MODA旁 西门进入直行30米'
    },
    advantage: {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526039195959&di=a49efac6d839ecd7e7152de3b4964f9e&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F0ff41bd5ad6eddc4fa3fa3fa33dbb6fd536633d2.jpg',
      des: '全新车尾的全新车尾的全新车尾的全新车尾的全新车尾的全新车尾的全新车尾的全新车尾的全新车尾的全新车尾的全新车尾的全新车尾的全新车尾的全新车尾的全新车尾的全新车尾的'
    },
    showGoTop: false,
    installmentScheme: [
      {
        finalPayment: '2.60万',
        monthlyPayment: '2998元',
        months: '12月'
      },
      {
        finalPayment: '3.01万',
        monthlyPayment: '2618元',
        months: '24月'
      },
      {
        finalPayment: '3.67万',
        monthlyPayment: '1998元',
        months: '36月'
      }
    ],
    curInstallmentSchemeIdx: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.tick();
    this.setData({
      progressWidth: this.data.progress.present / this.data.progress.full * 680,
      progressPercent: (this.data.progress.present / this.data.progress.full * 100).toFixed(0) + '%',
      id: options.id
    });
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
    // var pages = getCurrentPages();
    // var currPage = pages[pages.length - 1];
    // if (currPage.data.name) {
    //   this.setData({//将携带的参数赋值
    //     curStore: {
    //       name: currPage.data.name,
    //       location: currPage.data.location
    //     }
    //   });
    // }
    // getCurrentPages()
    // var lastPage = e.getCurrentPage();
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

  bindScroll: function (e) {
    if (e.detail.scrollTop > 500) {
      this.setData({
        showGoTop: true
      });
    } else {
      this.setData({
        showGoTop: false
      });
    }
  },

  /**
   * 滑动顶部图片
   */
  swipeImg: function (e) {
    this.setData({
      curImg: e.detail.current + 1
    });
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

  },

  /**
   * 回到顶部
   */
  gotop: function (e) {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  /**
   * 显示活动详情
   */
  showActivity: function () {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    });
    this.animation = animation;
    animation.translateY(300).step();
    this.setData({
      animationData: animation.export(),
      showActivityDetail: true
    });
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200);
  },

  /**
   * 隐藏活动详情
   */
  hideActivity: function (e) {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    });
    this.animation = animation;
    animation.translateY(300).step();
    this.setData({
      animationData: animation.export(),
    });
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showActivityDetail: false
      })
    }.bind(this), 200);
  },

  /**
   * 显示分期详情
   */
  showInstallment: function () {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    });
    this.animation = animation;
    animation.translateY(300).step();
    this.setData({
      animationData: animation.export(),
      showInstallmentDetail: true
    });
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200);
  },

  /**
   * 隐藏分期详情
   */
  hideInstallment: function (e) {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    });
    this.animation = animation;
    animation.translateY(300).step();
    this.setData({
      animationData: animation.export(),
    });
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showInstallmentDetail: false
      })
    }.bind(this), 200);
  },

  /**
   * 查看车辆详细配置
   */
  checkConfigDetail: function (e) {
    wx.navigateTo({
      url: '/pages/item-config-detail/index?id=' + this.data.id,
    })
  },

  /**
   * 选择分期方案
   */
  selectInstallmentScheme: function(e) {
    this.setData({
      curInstallmentSchemeIdx: e.currentTarget.dataset.index
    });
  },

  /**
   * 显示门店选择页面
   */
  showStore: function() {
    wx.navigateTo({
      url: '/pages/store/store'
    })
  },

  /**
   * 转到创建订单页面
   */
  createOrder: function() {
    wx.navigateTo({
      url: '/pages/create-order/index?id=' + this.data.id,
    })
  }
})