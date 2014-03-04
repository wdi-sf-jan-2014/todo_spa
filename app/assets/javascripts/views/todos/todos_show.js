SpaApp.Views.TodosShow = Backbone.View.extend({
  template: HandlebarsTemplates['todos/show'],

  events: {
    'click #todo_completed': 'editTodo',
    'click #removeTodo': 'deleteTodo'
  },

  render: function(){
    $(this.el).html(this.template(this.model));

    return this;
  },

  editTodo: function(event){
    var checkbox = event.target;

    this.model.completed = checkbox.checked;

    $.ajax({
      type: 'patch',
      url: '/todos/' + this.model.id + '.json',
      context: this,
      data: {todo: this.model}
    }).done(function(todo){
      this.$el.toggleClass("done-true");
    });

  },

  deleteTodo: function(){
    $.ajax({
      type: 'delete',
      url: '/todos/' + this.model.id + '.json',
      context: this
    }).done(function(data){
      this.remove();
    });


  }
});