const _ = require('./utils')
// bindclose
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    visible: {
      type: Boolean,
      value: true
    },
    navs: {
      type: Array,
      value: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7', 'tab8']
    }
  },
  data: {
    curNav: ''
  },
  methods: {
    close() {
      // const myEventDetail = {} // detail对象，提供给事件监听函数
      // const myEventOption = {}
      this.triggerEvent('close')
    },
    stopPropagation() {}
  },
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: () => {
          this.setData({
            flag: _.getFlag(),
          })
        },
      })
    },
  },
  // observers: {
  //   visible(visible) {
  //     // console.log(visible)
  //     this.setData({visible})
  //   }
  // }
})
