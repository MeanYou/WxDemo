// components/orderItem/orderItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemDetail: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    timeLeft: '23:34'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showOrder: function() {
      wx.navigateTo({
        url: '/pages/My/show-order/index',
      })
    }
  }
})
