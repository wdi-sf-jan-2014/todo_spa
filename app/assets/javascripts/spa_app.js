window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // this code obviously belongs in a model or collection
    // but, we're not talking about models or collections just yet :)

    var this.router = new SpaApp.Routers.Main;
    Backbone.history.start({pushState: true});
    
    $.get("/todos.json").done(function (data) {
      // initialize the index view with the fetched data
      var view = new SpaApp.Views.TodosIndex({ collection: data });
      $('#container').html(view.render().el);
    });    

  }
};

$(document).ready(function(){
  SpaApp.initialize();
});

SpaApp.Routers.Main = Backbone.Router.extend({
  routes: {
    "": "main",
    "/details/:description": "showDescription",
    "*other": "defaultRoute"
  },

  main: function() {

  },

  showDescription: function(desc) {
    this.navigate("/details/" + desc)
  }
});