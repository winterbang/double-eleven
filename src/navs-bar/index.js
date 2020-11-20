Component({
  properties: {
    navs: {
      type: Array,
      value: [
        {
          icon: '../assets/label.svg',
          label: '账单',
          text: '账单',
          to: '/url'
        }, {
          icon: '../assets/label.svg',
          label: '总资产',
          text: '总资产',
          to: ''
        }, {
          icon: '../assets/label.svg',
          label: '余额',
          to: ''
        }
      ]
    }
  },
  data: {
  }
})
