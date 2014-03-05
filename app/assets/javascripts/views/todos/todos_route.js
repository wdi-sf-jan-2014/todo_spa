SpaApp.Routers.Main = Backbone.Router.extend({

  routes: {
    "": "home",
    "/todos/:id": "description"
  },

  home: function(){
    $.get("/todos.json").done(function (data) {
      // initialize the index view with the fetched data
      var view = new SpaApp.Views.TodosIndex({ collection: data });
      $('#container').html(view.render().el);
    });
  },

  description: function(someTodo){
    $.get("/todos/"+ someTodo.id).done(function (data) {
    var view = new SpaApp.Views.TodosDescription({model: data});
    });
  }

});


