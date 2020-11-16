Component({
  properties: {
    visible: {
      type: Boolean,
      value: true,
    },
    navs: {
      type: Array,
      value: [
        {
          icon: '../assets/label.svg',
          label: 'nav1',
          to: '/url',
        },
        {
          icon: '../assets/label.svg',
          label: 'nav2',
          to: '',
        },
        {
          icon: '../assets/label.svg',
          label: 'nav5',
          to: '',
        },
        {
          icon: '../assets/label.svg',
          label: 'nav3',
          to: '',
        },
        {
          icon: '../assets/label.svg',
          label: 'nav4',
          to: '',
        },
        {
          icon: '../assets/label.svg',
          label: 'nav6',
          to: '',
        },
        {
          icon: '../assets/label.svg',
          label: 'nav7',
          to: '',
        },
        {
          icon: '../assets/label.svg',
          label: 'nav8',
          to: '',
        },
      ],
    },
  },
  data: {
    scrollWidth: 0,
    wrapWidth: 0
  },
  lifetimes: {
    ready() {
      const query = wx.createSelectorQuery().in(this)
      query.select('.bar').boundingClientRect((res) => {
        // eslint-disable-next-line no-console
        console.log(res.width, 'res =======================')
        this.setData({wrapWidth: res.width})
      }).exec()
      query.selectAll('.nav').boundingClientRect((res) => {
        const width = res.reduce((result, obj) => result + obj.width, 0)
        // eslint-disable-next-line no-console
        console.log(width, 'res.scrollWidth =======================')
        this.setData({scrollWidth: width})
      }).exec()
    }
  },
  methods: {
    dragging(e) {
      const left = e.detail.scrollLeft
      const swiperPosition = left / (this.data.scrollWidth - this.data.wrapWidth)
      // eslint-disable-next-line no-console
      console.log(e)
      // eslint-disable-next-line no-console
      console.log(left, this.data.scrollWidth, this.data.wrapWidth, swiperPosition)
      this.setData({swiperLeft: `${swiperPosition * 42}px`})
    }
  }
})
