// pages/friend/friend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    src: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ]
  },
  videoEnd() {
    wx.showModal({
      title: '提示',
      content: '是否循环播放',
      success: (e) => {
        if(e.confirm) {
          this.videoContext.play()
          // this.videoContext.seek(0)
        }
      }
    })
  },
  inputBlur(e) {
    this.inputValue = e.detail.value
  },
  btnSend() {
    // this.videoContext.sendDanmu({
    //   text: this.inputValue,
    //   color: getRandomColor()
    // })
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  btnVideo1() {
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: (e) => {
        console.log('success')
        this.setData({
          src: e.tempFilePath
        })
      },
      fail: (e) => {
        console.log('fail')
      }
    })
    // var that = this
    // wx.chooseVideo({
    //   sourceType: ['album', 'camera'],
    //   maxDuration: 60,
    //   camera: ['front', 'back'],
    //   success: function (res) {
    //     console.log('success')
    //     that.setData({
    //       src: res.tempFilePath
    //     })
    //   },
    //   fail: function(e) {
    //     console.log('fail')
    //   }
    // })
  },

  /**s
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.videoContext = wx.createAudioContext('myVideo')
    this.videoContext = wx.createVideoContext('myVideo')
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

function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}