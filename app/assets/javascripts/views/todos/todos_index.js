SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    "submit #addTodo" : "addTodo", 
    "click #removeTodo" : 'removeTodo', 
    "click #todo_completed" : "checkTodo"
  },

  addTodo: function(event){
    event.preventDefault();
    var title = $('#todo_title').val();
    var params = { todo: { title: title } };
    var _this = this;
    $.ajax({type: 'post', url: "/todos.json", data: params}).done(function(response){
      var html = HandlebarsTemplates['todos/show'](response);
      _this.$el.append(html);
      $('#todo_title').val("");
    });
  },

  checkTodo: function(event){
    var updated_todo = {};
    updated_todo.id = $(event.target).closest('.todo').data().id;
    updated_todo.completed = event.target.checked;
    $(event.target).closest('.todo').toggleClass('done-true');

    $.ajax({type: 'patch', url: '/todos/' + updated_todo.id + '.json', data: { todo: updated_todo}});
  },

  removeTodo: function(event){
    event.preventDefault();
    var id = $(event.target).closest('.todo').data().id;
    $(event.target).closest('.todo').remove();
    $.ajax({type: 'delete', url: "/todos/"+id + ".json"  });

  },

  render: function() {
    $(this.el).html(this.template());

    _.each(this.collection, function (someTodo) {
      var todoHTML = HandlebarsTemplates['todos/show'](someTodo);
      this.$el.append(todoHTML);
    }, this);

    return this;
  }

});
