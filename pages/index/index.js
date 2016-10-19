//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    todos: [],
    tmp: "",
    loaded: false
  },
  //事件处理函数
  bind_change: function(e){
    this.setData({
      tmp: e.detail.value,
    })
  },
  bind_submit: function(e){
    if(this.data.tmp){
      var todos = this.data.todos
      todos.push({done: false, content: this.data.tmp}) 
      this.setData({
        todos: todos,
        tmp: ""
      })
      app.save_todos(todos)
    }
  },
  bind_check_change: function(e){
    console.log(e)
  },
  hide_loading: function(){
    this.setData({
      loaded: true
    })
  },
  onLoad: function () {
    var todos = app.load_todos()
    this.setData({
      todos: todos
    })
    this.hide_loading()
  }
})
