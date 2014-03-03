SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    'submit #addTodo':                'addTodo'
  },

  initialize: function() {
    this._todoViews = [];
  },

  render: function() {
    $(this.el).html(this.template());

    var todoView;
    _.each(this.collection, function (someTodo) {
      todoView = new SpaApp.Views.TodosShow({ model: someTodo} );
      this._todoViews.push(todoView.render());
      this.$el.append(todoView.el);
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
