SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    'submit #addTodo': 'addTodo'
  },

  render: function() {
    $(this.el).html(this.template());

    var todoView;
    _.each(this.collection, function (someTodo) {
      todoView = new SpaApp.Views.TodosShow({ model: someTodo });
      this.$el.append(todoView.render().el);
    }, this);

    return this;
  },

  addTodo: function(event){
    event.preventDefault();
    var data = { title: $("#todo_title").val(), completed: false };
    // var _this = this;

    $.ajax({
      type: 'POST',
      url: '/todos.json',
      data: { todo: data },
      context: this
    }).done(function(response){
      console.log(response);
      var todoView = new SpaApp.Views.TodosShow({ model: response});
      this.$el.append(todoView.render().el);
    });
  }

});
