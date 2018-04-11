// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    session: '',
    avatarUrl: '',
    nickName: ''
  },
  getInfo() {
    wx.getUserInfo({
      withCredentials: true,
      success: (res) => {
        console.log(res)
        this.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl
        })
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  check() {
    wx.checkSession({
      success: (res) => {
        wx.showToast({
          title: '已验证',
          icon: 'success'
        })
      },
      fail: (res) => {
        login();
      }
    })
  },
  login() {
    wx.login({
      success: (res) => {
        console.log(res.code)
        wx.request({
          // url: 'http://1.xzsxin.applinzi.com/login.php',
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxec6512a1b528314d&secret=9d3be6e0c38bf2507672a576cc59f1a1&js_code=' + res.code + '&grant_type=authorization_code',
          method: "POST",
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: (res) => {
            this.setData({
              openid: res.data.openid,
              session: res.data.session_key
            })
          }
        })
      }
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