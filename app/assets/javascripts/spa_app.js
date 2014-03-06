window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.todos = new this.Collections.Todos();
    
    this.router = new this.Routers.Main();
    Backbone.history.start({pushState: true});

  }
};
SpaApp.Routers.Main = Backbone.Router.extend({
  routes: {
    "todos/:id": "detail",
    "(/)": "index",
  },

  // TODO: have both of these functions handled by a model or the todos
  // collection.  In other words, don't use jQuery ajax methods directly.
  index: function(){
    $.get("/todos.json").done(function (data) {
      // initialize the index view with the fetched data
      var view = new SpaApp.Views.TodosIndex({ collection: data });
      $('#container').html(view.render().el);
    });
  },
  detail: function(id){
    $.get("/todos/" + id + ".json").done(function (data) {
      // initialize the index view with the fetched data
      var view = new SpaApp.Views.TodosDetail({model: data });
      $('#container').html(view.render().el);
    });
  }
});
$(document).ready(function(){
  SpaApp.initialize();
});
