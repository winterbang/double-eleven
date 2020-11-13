Component({
  properties: {
    navs: {
      type: Array,
      value: [
        {
          icon: '',
          label: 'grid1',
          to: '/url',
        },
        {
          icon: '',
          label: 'grid2',
          to: '',
        },
        {
          icon: '',
          label: 'grid5',
          to: '',
        },
        {
          icon: '',
          label: 'grid3',
          to: '',
        },
        {
          icon: '',
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
