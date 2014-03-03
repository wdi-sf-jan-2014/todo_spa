SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    'submit #addTodo':        'addTodo',
    'click .todo':            'removeOrCheckTodo' // this may be refactored further
  },

  render: function() {
    $(this.el).html(this.template());

    _.each(this.collection, function (someTodo) {
      var todoHTML = HandlebarsTemplates['todos/show'](someTodo);
      this.$el.append(todoHTML);
    }, this);

    return this;
  },

  addTodo: function(event) {
    // Callback on form submit

    // canceling the event on the page
    event.preventDefault();
    console.log("Form submitted");
    
    // create a newTodo using the
    //  todo_title out of the form
    //  and setting completed 
    //  false
    var newTodo = {
      title: $("#todo_title").val(),
      completed: false
    };

    // log the newTodo in console
    console.log(newTodo);

    // Saved         
    $.post('/todos.json', {
      todo: newTodo
    })
      .done(function (data) {
        console.log(data);
        var todoHTML = HandlebarsTemplates['todos/show'](data);
        $("#todos").append(todoHTML);
      });
  },

  // this function may be refactored further if we make subviews
  removeOrCheckTodo: function(event) {
    var _this = event.currentTarget;
    var id = _this.dataset.id;

    if (event.target.id === "todo_completed") {
      var checkbox = event.target;

      var updated_todo = {};
      updated_todo.completed = checkbox.checked;
      updated_todo.id = id;

      // Let's write a update request
      $.ajax({
        type: 'patch',
        url: '/todos/' + updated_todo.id + '.json',
        data: {
          todo: updated_todo
        }
      }).done(function (data) {
        $(_this).toggleClass("done-true");
      });
    }
    if (event.target.id === "removeTodo") {
      _this = event.currentTarget;

      $.ajax({
        type: 'delete',
        url: '/todos/' + id
      })
        .done(function (data) {
          $(_this).remove();
        });
    }
  }
});
