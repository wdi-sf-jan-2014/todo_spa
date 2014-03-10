SpaApp.Routers.Main = Backbone.Router.extend({

  routes: {
    "todos(/:id)": "description",
    "": "index"
  },

  description: function(id) {
   
    $.get("/todos.json").done(function (data) {
      var view = new SpaApp.Views.TodosIndex({ collection: data });
      view.addDetailView(id);
      $('#container').html(view.render().el);
    });
  },

  index: function(){
    $.get("/todos.json").done(function (data) {
      var view = new SpaApp.Views.TodosIndex({ collection: data });
      $('#container').html(view.render().el);
    });
  }
});