// components/commentShown/commentShown.js
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
    stars: '★★★★★',
    unstars: ''
  },

  ready: function () {
    var count = this.properties.itemDetail.stars;
    var stars = '';
    var unstars = '';
    for (var i = 0; i < 5; i++) {
      if (i < count) {
        stars += '★'
      } else {
        unstars += '★'
      }
    }
    this.setData({
      stars: stars,
      unstars: unstars
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
