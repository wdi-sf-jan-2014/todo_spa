window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  data: {},
  start: function(){
    SpaApp.router = new this.Routers.Main();
    Backbone.history.start({pushState: true});
  }
};

$(document).ready(function(){
  SpaApp.start();
});
