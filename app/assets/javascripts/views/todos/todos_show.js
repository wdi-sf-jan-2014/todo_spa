SpaApp.Views.TodosShow = Backbone.View.extend({
  id: 'todos', 

  template: HandlebarsTemplates['todos/show'],

  events: {
    'click #removeTodo': 'removeTodo',
    'click #todo_completed': 'completed'
  },

  render: function () {
    $(this.el).html(this.template(this.model));
    return this;
  },

  completed: function (event) {
    var checked = event.target;

    $.ajax({
      type: 'patch',
      url: '/todo/' + this.data.id + '.json',
      data: { todo: }
    });
  }

});