SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    "submit #addTodo": "addTodo",
    "click #removeTodo": "removeTodo",
    "click #todo_completed": "updateTodo"
  }, 

  addTodo: function(event) {
    event.preventDefault();
    var title = $('#todo_title').val();
    var params = { todo: { title: title } };
    var _this = this;
    $.ajax({type: 'post', url: "/todos.json", data: params}).done(function(response){
      var html = HandlebarsTemplates['todos/show'](response);
      _this.$el.append(html);
    });
  },

  removeTodo: function(event) {
    event.preventDefault();
    $(event.target).closest('.todo').remove();
    var id = $(event.target).closest('.todo').data('id');
    $.ajax({type: 'delete', url: "/todos/"+id+".json"}).done(function(response){
    });
  },

  updateTodo: function(event) {
    var id = $(event.target).closest('.todo').data('id');
    if ($(event.target).is(':checked')) {
      var params = { todo: { completed: true } };
      $.ajax({type: 'patch', url: "/todos/"+id+".json", data: params}).done(function(response){
        $(event.target).closest('.todo').toggleClass('done-true');  
      });
    }
    else {
      var params = { todo: { completed: false } };
      $.ajax({type: 'patch', url: "/todos/"+id+".json", data: params}).done(function(response){
        $(event.target).closest('.todo').toggleClass('done-true'); 
      });  
    }  
      

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
