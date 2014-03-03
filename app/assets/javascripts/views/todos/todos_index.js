SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

    events: {
    'submit #addTodo': 'add',
    'click #removeTodo': 'delete',
    'click input[type="checkbox"]' : 'update'

  },

  template: HandlebarsTemplates['todos/index'],

  render: function() {
    $(this.el).html(this.template());

    _.each(this.collection, function (someTodo) {
      var todoHTML = HandlebarsTemplates['todos/show'](someTodo);
      this.$el.append(todoHTML);
    }, this);

    return this;
  },

  add: function(event) {
    event.preventDefault();
    var newTodo = {
      title: $("#todo_title").val(),
      completed: false
    };

    $.post('/todos.json', {
      todo: newTodo
    })
      .done(function (data) {
        console.log(data);
        var todoHTML = HandlebarsTemplates.todo(data);
        $("#todos").append(todoHTML);
      });
      console.log("New todo was added");
      return this;
  },

  delete: function() { $("#removeTodo").on("click", ".todo", function (event) {
    console.log(event);
    console.log(event.target);
    
    if (event.target.id === "removeTodo") {
      _this = this;
      var id = this.dataset.id;

      $.ajax({
        type: 'delete',
        url: '/todos/' + id
      })
        .done(function (data) {
          $(_this).remove();
        });
    }

  });
 }
});
