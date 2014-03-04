SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    'submit #addTodo': 'add',
  },

  render: function() {
    $(this.el).html(this.template());

    _.each(this.collection, function (someTodo) {
      // var todoHTML = HandlebarsTemplates['todos/show'](someTodo);
      var todoShow = new SpaApp.Views.TodosShow({model: someTodo});
      this.$el.append(todoShow.render().el);
    }, this);

    return this;
  },
  add: function(event) {
    event.preventDefault();
    // assemble data object to POST to server
    var data = {
      title: $("#todo_title").val(),
      completed: false
    };
    var _this = this;
    // make POST request to server
    $.ajax({
      url:'/todos',
      type: 'POST',
      data: {todo: data}
    }).done(function(response) {
      // append response to DOM
      // this.$el.append(HandlebarsTemplates['todos/show'](response));
      var todoShow = new SpaApp.Views.TodosShow({model: response});
      $(_this.el).append(todoShow.render().el);
      $("#todo_title").val("");
    });
    return this;
  },

  complete: function() {

  }

});
