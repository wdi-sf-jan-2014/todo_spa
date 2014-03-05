window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // this code obviously belongs in a model or collection
    // but, we're not talking about models or collections just yet :)
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

SpaApp.Router.Main = Backbone.Router.extend({
routes: {
"(/:param)": "description"
  },
  description: function(param){
    var view = new App.Views.Other({model: param});
    $('#container').html(view.render().$el);
    }
});


