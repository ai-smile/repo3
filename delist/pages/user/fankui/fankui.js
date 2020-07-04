// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:""
  },
  input:function(e){
    this.setData({
        text:e.detail.value
    })
  },
  clear:function(e){
    this.setData({
       text:""
    })
  },
  submit:function(e){
    var that=this;
    wx.showToast({
        title:'提交成功',
        icon:'success',
        duration:1500,
        mask:false,
        success:function(){
            that.setData({
            text:""
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