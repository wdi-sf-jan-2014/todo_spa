SpaApp.Routers.Main = Backbone.Router.extend({

  routes: {
    '': 'main',
    'todo/:id': 'getDescription'
  },

  main: function(){
    var view = new SpaApp.Views.TodosIndex();
    //what is #main doing here? there is no <div id="main"> on the page,
    //and it doesn't seem to be making one either...
    $('#main').html(view.render().$el);
  },

  getDescription: function(id){
    this.$el.append(todoDescription.render().el);
  }

});