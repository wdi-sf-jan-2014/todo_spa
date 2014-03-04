SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos', //tells us the id of el

  template: HandlebarsTemplates['todos/index'],

  events: {

    'submit #addTodo': 'addTodo',
    'click #removeTodo': 'removeTodo'
  },

  render: function() {
    $(this.el).html(this.template());
  //pass the this template into the html method, to filter html content
  //pass this conent into the TodosIndex element

    _.each(this.collection, function (someTodo) {
  // var view is a new instance of SpaApp.Views.TodosShow(pass in model holding someTodo data)
      var view = new SpaApp.Views.TodosShow({ model: someTodo });

  //render the html content of view, append it to the html content of this (which is TodosIndex)
      $(this.el).append(view.render().el);
    }, this);
    //why the extra this?

    return this;
  },

  

  addTodo: function (event) {
    
    var todoData = {
      // binds todo_title data to title
      title: $("#todo_title").val(),
      completed: false
    };

    var _this = this;

    $.ajax({
      type: 'post',
      url: '/todos.json', //post /todos.json data
      context: this,
      data: { todo: todoData}
      // above needs explaination


    }).done(function (data) {
      //once done then pass data into function, data is in model form
      // this is passed to TodosShow Viewer, held as variable showTodo
      // render only the html of showTodo hold as myHtml
      // append this element to this TodosIndex id, 
      var showTodo = new SpaApp.Views.TodosShow({ model: data });
      var myHtml = showTodo.render().el;
      _this.$el.append(myHtml);

     
    });   
  }

});
