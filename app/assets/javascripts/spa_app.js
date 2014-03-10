window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // this code obviously belongs in a model or collection
    // but, we're not talking about models or collections just yet :)
   
      // initialize the index view with the fetched data


    this.router = new SpaApp.Routers.Main();
    Backbone.history.start({pushState: true});


  }
};

$(document).ready(function(){
  SpaApp.initialize();
});
