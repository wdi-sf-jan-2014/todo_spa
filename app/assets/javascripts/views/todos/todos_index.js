SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

    events: {
        "submit #addTodo": "add",
        "click #todo_completed": "update",
        "click #removeTodo": "delete"
    },

  render: function() {
    $(this.el).html(this.template());

    var todoView;
    _.each(this.collection, function (someTodo) {
      var todoHTML = HandlebarsTemplates['todos/show'](someTodo);
      this.$el.append(todoHTML);
    }, this);

    return this;
    },

// The add todo function
    add: function(event) {
        event.preventDefault();

        var newTodo = {
            title: $("#todo_title").val(),
            completed: false
        }
        $.post('/todos.json', {
            todo: newTodo
        })
            .done(function (data) {
                var todoHTML = HandlebarsTemplates.todo(data);
                $("#todos").append(todoHTML);
            });
        return this;
    }
});
