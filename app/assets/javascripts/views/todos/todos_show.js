SpaApp.Views.TodosShow = Backbone.View.extend({

  className: 'todos',

  template: HandlebarsTemplates['todos/show'],

  events: {
    "click #removeTodo" : 'removeTodo', 
    "click #todo_completed" : "checkTodo"
  },

  checkTodo: function(event){
    var updated_todo = {};
    updated_todo.id = $(event.target).closest('.todo').data().id;
    updated_todo.completed = event.target.checked;
    $(event.target).closest('.todo').toggleClass('done-true');

    $.ajax({type: 'patch', url: '/todos/' + updated_todo.id + '.json', data: { todo: updated_todo}});
  },

  removeTodo: function(event){
    event.preventDefault();
    var id = $(event.target).closest('.todo').data().id;
    $(event.target).closest('.todos').remove();
    $.ajax({type: 'delete', url: "/todos/"+id + ".json"  });

  },

  render: function() {
    var todoHTML = this.template(this.model);
    this.$el.html(todoHTML);
    return this;
  }


});