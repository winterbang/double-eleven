Component({
  properties: {
    navs: {
      type: Array,
      value: [
        {
          icon: '',
          label: '账单',
          text: '账单',
          to: '/url'
        }, {
          icon: '',
          label: '总资产',
          text: '总资产',
          to: ''
        }, {
          icon: '',
          label: '余额',
          to: ''
        }
      ]
    }
  },
  data: {
  }
})
