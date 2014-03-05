window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  start: function(){
    this.router = new this.Routers.Main();
    Backbone.history.start({pushState: true});
  }
};
SpaApp.Routers.Main = Backbone.Router.extend({
  routes: {
    "": "main",
    "detail/:id": "todoDetail"
  },

  main: function(){
    $.get("/todos.json").done(function (data) {
      var view = new SpaApp.Views.TodosIndex({collection: data});
      $('#container').html(view.render().$el);
    });
  },

  todoDetail: function(param){
    $.get("/todos.json").done(function (data) {
      var view = new SpaApp.Views.TodosIndex({collection: data});
      $('#container').html(view.render(param).$el);
    });
  },

  defaultRoute: function(){
    this.main();
  }
});
$(document).ready(function(){
  SpaApp.start();
});
$(document).on('page:load', function() {
  Backbone.history.stop();
  SpaApp.start();
});