SpaApp.Routers.Main = Backbone.Router.extend({
  routes: {
    "details/:id": "showDescription",
    "*other": "defaultRoute"
  },

  // defaultRoute: function() {
  //   $.get("/todos.json").done(function (data) {
  //     // initialize the index view with the fetched data
  //     var view = new SpaApp.Views.TodosIndex({ collection: data });
  //     $('#container').html(view.render().el);
  //   }); 
  // },

  showDescription: function(id) {
    $.ajax({
      url: "/todos/"+id+".json",
      type: "GET"
    }).done(function(response) {
      // test response in console
      console.log(response.description);
      console.log(response);
      // apend view to #container
      var view = new SpaApp.Views.TodosDetails({ model: response });
      if ($("#description")){$("#description").remove();}
      $("#container").append(view.render().el);
    });
  }
});