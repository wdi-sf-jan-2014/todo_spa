SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    'submit #addTodo': 'create'
  },

  render: function() {
    $(this.el).html(this.template());

    var todoView;
    _.each(this.collection, function (someTodo) {
      todoView = new SpaApp.Views.TodosShow({ model: someTodo} );
      this.$el.append(todoView.render().el);
    }, this);

    return this;
  },

  create: function(event) {
    event.preventDefault();
    var newTodo = {
      title: $("#todo_title").val(),
      completed: false
    };

    var todoView;
    $.ajax({
      type: "POST",
      url: '/todos.json',
      data: {todo: newTodo}
    }).done(function (atodo) {
      // todoView = new SpaApp.Views.TodosShow({ model: atodo });
      // this.$el.append($('atodo'));
    });
    return this;
  }
});
