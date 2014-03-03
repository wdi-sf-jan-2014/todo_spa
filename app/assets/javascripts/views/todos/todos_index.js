SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    'submit #addTodo': 'newTodo',
    'click #todo_completed': 'editTodo',
    'click #removeTodo': 'deleteTodo'
  },

  newTodo: function(){
    event.preventDefault();
    data = { title: $("#todo_title").val() };

    $.ajax({
      type: 'post',
      url: '/todos.json',
      data: { todo: data },
      context: this
    }).done(function(response){
      console.log(response);
      var todoHTML = HandlebarsTemplates['todos/show'](response);
      this.$el.append(todoHTML);
    });
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
