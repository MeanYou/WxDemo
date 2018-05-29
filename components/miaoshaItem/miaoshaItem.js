// components/miaoshaItem/miaoshaItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "itemDetail": {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
       * 点击车型名称
       */
    loadDetail: function (e) {
      wx.navigateTo({
        url: '/pages/item-detail/index?id=' + e.currentTarget.dataset.id
      });
    }
  }

})
