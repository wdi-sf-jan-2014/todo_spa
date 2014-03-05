SpaApp.Routers.Main = Backbone.Router.extend({
  routes: {
    "todos(/:id)" : "description", 
    "": "main",
    "*actions": "defaultRoute"
  },

   main: function(){
       $.get("/todos.json").done(function (data) {
      // initialize the index view with the fetched data
      var view = new SpaApp.Views.TodosIndex({ collection: data });
      $('#container').html(view.render().el);
    });
  }, 

  defaultRoute: function(){
      this.main();
    },

   description: function(id){
   var desc = new SpaApp.Views.TodosDescription({ model: id });
   $("#description_"+id).slideToggle();
   }




});