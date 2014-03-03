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
    // canceling the event on the page
    event.preventDefault();
    
    // create a newTodo using the
    //  todo_title out of the form
    //  and setting completed 
    //  false
    var newTodo = {
      title: $("#todo_title").val(),
      completed: false
    };

    $.post('/todos.json', {
      todo: newTodo
    }).done(function (data) {
      var todoHTML = HandlebarsTemplates['todos/show'](data);
      $("#todos").append(todoHTML);
    });
  }
});
