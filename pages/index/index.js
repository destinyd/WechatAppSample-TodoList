//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    todos: [{
      done: true,
      content: "测试内容1"
    },
    {
      done: false,
      content: "测试内容2"
    },
    {
      done: false,
      content: "测试内容3"
    },]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  }
})
