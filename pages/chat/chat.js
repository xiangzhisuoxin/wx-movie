// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    imgURL: [
      '/images/index.png',
      '/images/index_act.png'
    ],
    autoplay: true,
    showDots: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    wx.setNavigationBarTitle({
      title: 'chat',
    })
    wx.showNavigationBarLoading()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideNavigationBarLoading()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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
  
  },
  
  onPullDownRefresh() {
    this.setData({
      num: 2
    })
  },

  onReachBottom() {
    this.setData({
      num: 1
    })
  },

  onShareAppMessage() {
    return {
      title: 'chat',
      path: '/pages/index/index',
      success: function() {
        wx.showToast({
          title: 'success',
          
        })
      }
    }
  },
  sw1() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  sw2() {
    this.setData({
      showDots: !this.data.showDots
    })
  }
})