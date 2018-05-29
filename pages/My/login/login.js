// pages/My/login/login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      tel: '15539188762',
      verifyCode: ''
    },
    focusTel: false,
    focusVerigy: false,
    matchReg: false,
    canSend: true,
    leftMinutes: 10,
    accept: true,
    canSubmit: false
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
   * 用户输入
   */
  inputChange: function (e) {
    switch (e.target.dataset.name) {
      case 'tel':
        var match = /^1\d{10}$/.test(e.detail.value);
        this.setData({
          form: {
            tel: e.detail.value,
            verifyCode: this.data.form.verifyCode
          },
          matchReg: match
        });
        break;
      case 'verifyCode':
        this.setData({
          form: {
            tel: this.data.form.tel,
            verifyCode: e.detail.value
          }
        });
        break;
    }
    console.log(this.data.form);

  },

  /**
   * 清空用户输入
   */
  clearTel: function () {
    this.setData({
      form: {
        tel: '',
        verifyCode: this.data.form.verifyCode
      },
      matchReg: false
    });
  },

  /**
   * 发送获取短信验证码的请求
   */
  sendMsg: function () {
    var that = this;
    if (this.data.matchReg) {
      wx.request({
        url: app.globalData.baseUrl + 'api/user-service/sms/sendCode',
        method: 'POST',
        data: this.data.form.tel,
        success: function (e) {
          if (e.data.code === "0") {
            wx.showToast({
              title: e.data.msg,
              icon: 'none'
            });
          }
          if (e.data.code === "1") {
            wx.showToast({
              title: '发送成功',
              icon: 'none'
            });
            that.setData({
              canSend: false
            });
            var i = 10;
            var interval = setInterval(function () {
              if (i === 0) {
                that.setData({
                  canSend: true
                });
                clearInterval(interval);
              } else {
                that.setData({
                  leftMinutes: --i
                });
              }
            }, 1000);
          }
        }
      });
    }
  },

  /**
   * 是否同意
   */
  checkChange: function (e) {
    if (e.detail.value.length) {
      this.setData({
        accept: true
      });
    } else {
      this.setData({
        accept: false
      });
    }
  },

  /**
   * 提交表单
   */
  submit: function () {
    if (!this.data.matchReg) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      });
      this.setData({
        focusTel: true
      });
      return;
    }
    if (!this.data.form.verifyCode) {
      wx.showToast({
        title: '请输入验证码',
        icon: 'none'
      });
      this.setData({
        focusVerify: true
      });
      return;
    }
    if (!this.data.accept) {
      wx.showToast({
        title: '请阅读并同意“用户协议”和“隐私政策”',
        icon: 'none'
      });
      return;
    }
    var that = this;
    wx.request({
      url: app.globalData.baseUrl + 'api/auth-service/oauth/token',
      method: 'POST',
      data: '{"telephone":"' + this.data.form.tel + '","code":"' + this.data.form.verifyCode + '"}',
      success: function (e) {
        if (e.data.code === "1") {
          try {
            wx.setStorageSync('jwt', e.data.data.token);
            var json = app.parseJwt(e.data.data.token);
            console.log(json);
            app.globalData.login = true;
            // wx.showToast({
            //   title: '登录成功',
            //   icon: 'none'
            // });
            wx.navigateBack();
          } catch (e) {
            wx.showToast({
              title: '登录失败，请重试',
              icon: 'none'
            });
          }
        }
        if (e.data.code === "0") {
          wx.showToast({
            title: e.data.msg,
            icon: 'none'
          })
        }
      },
      fail: function (e) {
        wx.showToast({
          title: '登陆失败，请重试',
          icon: 'none'
        })
      }
    })
  }
})