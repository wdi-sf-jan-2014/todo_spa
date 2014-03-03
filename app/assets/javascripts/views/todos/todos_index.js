SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    'submit #addTodo': 'newTodo'
  },

  render: function() {
    $(this.el).html(this.template());

    _.each(this.collection, function (someTodo) {
      var todoHTML = new SpaApp.Views.TodosShow({model:someTodo});
      this.$el.append(todoHTML.render().el);
    }, this);

    return this;
  },

  newTodo: function () {
    var newTodo = {
      title: $('#todo_title').val(),
      completed: false
    };

    var _this = this;   
    
    $.ajax({
      type: 'post',
      url: '/todos.json',
      data: { todo: newTodo },
      context: this
    }).done(function (data) {
      var todoHTML = new SpaApp.Views.TodosShow({model:data});
      _this.$el.append(todoHTML);
    });
  }


});

// .done(function (data) {
//       var todoHTML = HandlebarsTemplates['todos/show'](data);
//       this.$el.append(todoHTML);
//     })

  // removeTodo: function () {

  // },