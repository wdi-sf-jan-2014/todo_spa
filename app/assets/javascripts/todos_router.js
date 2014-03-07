SpaApp.Routers.Main = Backbone.Router.extend({
  routes: {
    "": "main",
    "display/:id": "display",
    "*other": "defaultRoute"
  },

  main: function() {
    // this code obviously belongs in a model or collection
    // but, we're not talking about models or collections just yet :)
    $.get("/todos.json"
    ).done(function (data) {
      // initialize the index view with the fetched data
      var view = new SpaApp.Views.TodosIndex({ collection: data });
      $('#container').html(view.render().el);
    });
  },

  display: function(id) {
    $.get("/todos/"+id+".json"
    ).done(function (data) {
      var view = new SpaApp.Views.TodosDisplay({ model: data });
      $('#container').html(view.render().el);
    });
  },

  defaultRoute: function() {
    console.log('default');
  }
});
