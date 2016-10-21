//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    todos: [],
    tmp: "",
    loaded: false,
    editing_todo_id: null,
    editing_text: ""
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
      todos.push({
        done: false, 
        content: this.data.tmp,
        id: (new Date()).valueOf()})

      this.change_todos(todos)
      this.setData({
        tmp: ""
      })
    }
  },
  bind_check_change: function(e){
    var id = e.currentTarget.dataset.todoId
    var todos = this.data.todos
    for(var i = 0; i < todos.length; i++){
      var todo = todos[i]
      if(todo.id.toString() == id){
        todo.done = !todo.done
        break;
      }
    }
    this.change_todos(todos)
  },
  bind_delete: function(e){
    var todo_id = e.currentTarget.dataset.todoId
    this.delete_todo(todo_id)
  },
  bind_longtap: function(e){
    var todo_id = e.currentTarget.dataset.todoId
    this.setData({
      editing_todo_id: parseInt(todo_id)
    })
  },
  bind_update: function(e){
    var todo_id = this.data.editing_todo_id
    if(todo_id){
      var todos = this.data.todos
      var content = this.data.editing_text
      for(var i = 0; i < todos.length; i++){
        var todo = todos[i]
        if(todo.id.toString() == todo_id.toString()){
          todo.content = content
          break;
        }
      }
      this.change_todos(todos)
      this.setData({
        editing_text: "",
        editing_todo_id: null // 关闭编辑
      })
    }
  },
  bind_editing_change: function(e){
    this.setData({
      editing_text: e.detail.value
    })
  },
  delete_todo: function(todo_id){
    var todos = this.data.todos
    var index = -1
    for(var i = 0; i < todos.length; i++){
      var todo = todos[i]
      if(todo.id.toString() == todo_id.toString()){
        index = i;
        break;
      }
    }
    if(index >=0){
      todos.splice(index, 1)
      this.change_todos(todos)
    }
  },
  change_todos: function(todos){
      this.setData({
        todos: todos,
      })
      app.save_todos(todos)
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
