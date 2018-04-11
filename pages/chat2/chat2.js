// pages/chat2/chat2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phone: ''
  },
  nameBlur(e) {
    this.setData({
      name: e.detail.value
    })
  },
  phoneBlur(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  submit() {
    wx.setStorage({
      key: 'contact',
      data: {
        name: this.data.name,
        phone: this.data.phone
      },
    })
  },
  toChat3() {
    wx.navigateTo({
      url: '/pages/chat3/chat3',
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