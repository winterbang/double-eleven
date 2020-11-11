Page({
  data: {
    visible: true,
  },
  close() {
    console.log("==================close")
    this.setData({ visible: false })
  },
  showSheet() {
    this.setData({visible: true})
  }
})
