SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    'submit #addTodo': 'create',
  },

  render: function() {
    // renders the add_form template and appends to our view
    $(this.el).html(this.template());

    _.each(this.collection, function (someTodo) {

      var show = new SpaApp.Views.TodosShow({ model: someTodo });
      show.render();
      this.$el.append(show.el);


    }, this); //final "this" defines the scope of the function

    return this;
  },

  //the callback function should make the post
  create: function()  {
    event.preventDefault();
    //create a new todo
    var newTodo = {
      title: $("#todo_title").val(),
      completed: false
    };
    //add our todo to the DB
    $.ajax({
      url: '/todos.json',
      type: 'post',
      data: { todo: newTodo},
      context: this
    });
  },

});


// @collection.each do |someTodo|
