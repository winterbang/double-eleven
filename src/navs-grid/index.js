Component({
  properties: {
    navs: {
      type: Array,
      value: [
        {
          icon: '../assets/label.svg',
          label: 'grid1',
          to: '/url',
        },
        {
          icon: '../assets/label.svg',
          label: 'grid2',
          to: '',
        },
        {
          icon: '../assets/label.svg',
          label: 'grid5',
          to: '',
        },
        {
          icon: '../assets/label.svg',
          label: 'grid3',
          to: '',
        },
        {
          icon: '../assets/label.svg',
          label: 'grid4',
          to: '',
        },
      ],
    },
    title: {
      type: String,
      value: '一个标题'
    }
  },
  data: {},
})
