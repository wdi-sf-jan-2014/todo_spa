window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  start: function(){
    this.router = new this.Routers.Main();
    Backbone.history.start({pushState: true});
    // this.initialize();
  }

  // makeNav: function(){
  //   var view = new this.Views.Nav();
  //   $('#header').html(view.render().$el);
  // },


  // initialize: function() {
  //   // this code obviously belongs in a model or collection
  //   // but, we're not talking about models or collections just yet :)
  //   $.get("/todos.json").done(function (data) {
  //     // initialize the index view with the fetched data
  //     var view = new SpaApp.Views.TodosIndex({ collection: data });
  //     $('#container').html(view.render().el);
  //   });
  // }
};

$(document).ready(function(){
  SpaApp.start();
});

$(document).on('page:load', function(){
  Backbone.history.stop();
  SpaApp.start();
});