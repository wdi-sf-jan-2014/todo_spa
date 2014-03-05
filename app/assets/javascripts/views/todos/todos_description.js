SpaApp.Views.Description = Backbone.View.extend({
  className: 'todoDescription',

  events: {
    'click .viewDesc': 'showDescription'
  },

  showDescription: function(event){
    event.preventDefault();
    console.log("test");
  }


});