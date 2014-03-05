window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  data: {},
  initialize: function() {
    // this code obviously belongs in a model or collection
    // but, we're not talking about models or collections just yet :)
  this.data.mainRouter = new SpaApp.Routers.Main();
  },

  start: function(){
    this.router = new this.Routers.Main();
    Backbone.history.start({pushState: true});
  }
};

$(document).ready(function(){
  SpaApp.start();
  SpaApp.initialize();
});
