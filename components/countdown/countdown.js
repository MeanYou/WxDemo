// components/countdown/countdown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    endDate: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    endDateDetail: {
      day: "0",
      hour: "00",
      minute: "00",
      second: "00"
    }
  },

  /**
   * 组件加载完成首次
   */
  ready: function () {
    this.tick();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
       * 倒计时，
       */
    tick: function () {
      var endDateArr = this.properties.endDate.split('.');
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
  }
})
