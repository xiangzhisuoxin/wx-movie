// pages/friend2/friend2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animation: {}
  },
  rotate() {
    this.animation.rotate(30).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  getInfo() {
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation
    animation.scale(2,2).rotate(45).step()
    this.setData({
      animation: animation.export()
    })
    setTimeout(function () {
      // console.log('setTimeOut')
      animation.translate(11).step()
      this.setData({
        animation: animation.export()
      })
    }.bind(this), 1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})