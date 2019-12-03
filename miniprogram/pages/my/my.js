const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    });
    console.log(app.globalData.userInfo)
  },
  //赞赏图
  likeImg() {
    var e = "https://ae01.alicdn.com/kf/H44ab10f1b10642a1a946218a497bb023d.jpg";
    wx.previewImage({
      urls: e.split(",")
    });
  },
  tips(){
    wx.showToast({
      title: '开发中',
    })
  },
  //切换页面
  go(e) {
    var e = e.currentTarget.dataset.to;
    wx.navigateTo({
      url:  e,
    })
  }
})