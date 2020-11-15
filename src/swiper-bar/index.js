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
  },
  lifetimes: {
    ready() {
      const query = wx.createSelectorQuery().in(this)
      query.select('.bar').boundingClientRect(function (res) {
        // eslint-disable-next-line no-console
        console.log(res)
      }).exec()
    }
  },
  methods: {
    dragging(detail) {
      // eslint-disable-next-line no-console
      console.log(detail)
    }
  }
})
