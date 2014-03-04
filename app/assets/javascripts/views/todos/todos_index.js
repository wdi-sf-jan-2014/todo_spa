SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    "submit #addTodo" : "addTodo"
  },

  addTodo: function(event){
    event.preventDefault();
    var title = $('#todo_title').val();
    var params = { todo: { title: title } };
    var _this = this;
    $.ajax({type: 'post', url: "/todos.json", data: params}).done(function(response){
      var todo = new SpaApp.Views.TodosShow({ model: response })
      var html = todo.render().$el;
      _this.$el.append(html);
      $('#todo_title').val("");
    });
  },

  render: function() {
    $(this.el).html(this.template());

    _.each(this.collection, function (someTodo) {
      var viewTodo = new SpaApp.Views.TodosShow({model: someTodo});
      var todoHTML = viewTodo.render().$el;
      this.$el.append(todoHTML);
    }, this);

    return this;
  }

});
