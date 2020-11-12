Page({
  data: {
    visible: false,
    visible1: false,
    navs: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7', 'tab8'],
    curNav: '',
  },
  close() {
    this.setData({visible: false})
  },
  showSheet() {
    this.setData({visible: true})
  },
  onNav(e) {
    this.setData({curNav: e.target.dataset.nav})
  },
  showSheet1() {
    this.setData({visible1: true})
  },
  hidSheet() {
    this.setData({visible1: false})
  }
})
