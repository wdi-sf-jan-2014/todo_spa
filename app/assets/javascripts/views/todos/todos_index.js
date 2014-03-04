SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    "submit #addTodo": "addTodo",
    "click #removeTodo": "removeTodo",
    "click #todo_completed": "checkTodo"
  },

  addTodo: function(event) {
    event.preventDefault();
    console.log("new todo submitted");
    var newTodo = { todo: {
      title: $('#todo_title').val(),
      completed: false }
    };
    // could do context: this then you can do this.$el.append(html)
    var todo = this;
    $.ajax({type: "POST", url: "/todos.json", data: newTodo}).done(function(response) {
      console.log(response);
      var html = HandlebarsTemplates['todos/show'](response);
      todo.$el.append(html);
    });
  },

  checkTodo: function(event){
   var updated_todo = {};
   updated_todo.id = $(event.target).closest('.todo').data().id;
   updated_todo.completed = event.target.checked;
   $(event.target).closest('.todo').toggleClass('done-true');

   $.ajax({type: 'patch', url: '/todos/' + updated_todo.id + '.json', data: { todo: updated_todo}});
  },

  removeTodo: function(event) {
    event.preventDefault();
    var id = $(event.target).closest('.todo').data().id;
    $(event.target).closest('.todo').remove();
    $.ajax( { type: 'delete', url: "/todos/"+id + ".json" } );
  },


  render: function() {
    $(this.el).html(this.template());

    _.each(this.collection, function (someTodo) {
      var todoHTML = HandlebarsTemplates['todos/show'](someTodo);
      this.$el.append(todoHTML);
    }, this);

    return this;
  }

});
