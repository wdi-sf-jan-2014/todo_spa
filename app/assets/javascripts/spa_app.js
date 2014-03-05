window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function() {
    this.router = new this.Routers.Main();
    Backbone.history.start({pushState: true});
  }
};

$(document).ready(function(){
  SpaApp.initialize();
});
