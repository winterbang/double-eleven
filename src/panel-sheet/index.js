Component({
    options: {
      multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
      show: {
        type: Boolean,
        observer: function(newVal, oldVal) {
          if(newVal) {
            this.setData({
              showActions: newVal,
              sheetMask: newVal
            })
          } else {
            this.setData({showActions: false})
            setTimeout(() => {
              this.setData({sheetMask: false})
            }, 400)
          }
        }
      },
      icon: {
        type: String,
        value: '../../images/icons/picture.png'
      }
    },
    data: {
      showActions: false,
      sheetMask: false
    },
    observers: {
    },
    lifetimes: {
      created: function() {
        this.setData({
          showActions: this.show,
          sheetMask: this.show
        })
      },
      attached: function() {
        // 在组件实例进入页面节点树时执行
      },
      detached: function() {
        // 在组件实例被从页面节点树移除时执行
      },
    },
    methods: {
      hidSheet: function (e) {
        // this.setData({showActions: false})
        // setTimeout(() => {
        //   this.setData({sheetMask: false})
        // }, 500)
        var myEventDetail = {} // detail对象，提供给事件监听函数
        var myEventOption = {} // 触发事件的选项
        this.triggerEvent('hidSheet', myEventDetail, myEventOption)
      },
      stopPropagation: function(e) {}
    }
  })