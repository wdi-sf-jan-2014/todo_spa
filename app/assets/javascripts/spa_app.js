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
    "": 'main', 
    "detail/:id": "todoDetail",
    "*actions": "defaultRoute"
  }, 

  main: function(){
    $.get("/todos.json").done(function(data){
      var view = new SpaApp.Views.TodoIndex({ collection: data });
      $('#container').html(view.render().$el);
    });
  },

  todoDetail: function(id){
    $.get("/todos/" + id).done(function(data){
      console.log(data);
      var view = new SpaApp.Views.TodoIndex({ collection: data });
      $('#container').html(view.render().$el);
    });
  },

  defaultRoute: function() {
    $('#container').text("Default");
  }


});

$(document).ready(function(){
  SpaApp.start();
});



