SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    'submit #addTodo': 'updateOnEnter'
  },

  render: function() {
    $(this.el).html(this.template());

    _.each(this.collection, function (someTodo) {
      var todoHTML = HandlebarsTemplates['todos/show'](someTodo);
      this.$el.append(todoHTML);
    }, this);

    return this;
  },

  updateOnEnter: function(event) {
    // prevent default behavior of reloading page
    event.preventDefault();

    // collect input for new todo
    _this = this;
    var newTodo = {
      title: $('#todo_title').val(),
      completed: false
    };
    // ajax post (update server)
    $.post('/todos.json', {todo: newTodo})
      .done(function(data) {
        // on success (callback), append new todo to view
        var todoHTML = HandlebarsTemplates['todos/show'](data);
        _this.$el.append(todoHTML);
        $('#todo_title').val('');
      });
  }

});
