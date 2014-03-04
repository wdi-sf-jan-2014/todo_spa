SpaApp.Views.TodosShow = Backbone.View.extend({
  class: 'todo',

  template: HandlebarsTemplates['todos/show'],

  events: {
    'click #todo_completed': 'toggleComplete',
    'click #removeTodo': 'deleteTodo'
  },

  render: function() {

    $(this.el).html(this.template(this.model));

    return this;

  },

  toggleComplete: function()  {

    // if(this.model.completed){
    //   this.model.completed = false;
    // }else{
    //   this.model.completed = true;
    // }

    var checkbox = event.target;
    this.model.completed = checkbox.checked;

    $.ajax({
      url: '/todos/'+this.model.id+ '.json',
      type: 'patch',
      data: { todo: this.model},
      context: this
    }).done(function (data) {
      $(this.el).toggleClass("done-true");
    });

  },

  deleteTodo: function()  {

    $.ajax({
      type: 'delete',
      url: '/todos/'+this.model.id+'.json',
      context: this,
      data: { todo: this.model}
    })
      .done(function (data) {
        $(this.el).remove();
      });

  }


});
