// pages/create-order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderItem: {
      url: 'http://pic31.photophoto.cn/20140629/0022005835563835_b.jpg',
      name: '日产轩逸2018款320自动旗舰版',
      much: '￥1.0',
      many: 'x 1'
    },
    userInfo: {
      name: '赵大宝',
      tel: '13333333333'
    },
    showInstallmentDetail: false,
    installmentFirstYear: {
      downPayment: "0",
      monthlySupply: "2998",
      months: "12"
    },
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
    curInstallmentSchemeIdx: 0,
    curStore: {
      name: '北京体验店',
      location: '北京市朝阳区东三环锦艺城C区一层VERO MODA旁 西门进入直行30米'
    },
    focusName: false,
    focusTel: false
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
   * 用户输入事件
   */
  inputChange: function (e) {
    if (e.target.dataset.type === 'name') {
      this.setData({
        userInfo: {
          name: e.detail.value,
          tel: this.data.userInfo.tel
        }
      });
    }
    if (e.target.dataset.type === 'tel') {
      this.setData({
        userInfo: {
          name: this.data.userInfo.name,
          tel: e.detail.value
        }
      });
    }
  },

  /**
   * 清除用户输入的姓名
   */
  clearName: function () {
    this.setData({
      userInfo: {
        name: '',
        tel: this.data.userInfo.tel
      }
    });
  },

  /**
   * 清除用户输入的电话
   */
  clearTel: function () {
    this.setData({
      userInfo: {
        name: this.data.userInfo.name,
        tel: ''
      }
    });
  },

  /**
   * 显示分期方案
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
   * 选择分期方案
   */
  selectInstallmentScheme: function (e) {
    this.setData({
      curInstallmentSchemeIdx: e.currentTarget.dataset.index
    });
  },

  /**
   * 显示门店选择页面
   */
  showStore: function () {
    wx.navigateTo({
      url: '/pages/store/store'
    });
  },

  /**
   * 显示确认订单页面
   */
  confirmOrder: function() {
    console.log(1)
    if(!this.data.userInfo.name) {
      wx.showToast({
        title: '请填写姓名',
        icon: 'none'
      });
      this.setData({
        focusName: true
      });
      return;
    }
    if (this.data.userInfo.tel.length !== 11) {
      wx.showToast({
        title: '请填写正确的电话号码',
        icon: 'none'
      });
      this.setData({
        focusTel: true
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/confirm-order/index'
    })
  }
})