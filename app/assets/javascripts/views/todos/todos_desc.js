SpaApp.Views.TodosDesc = Backbone.View.extend({

  template: HandlebarsTemplates['todos/desc'],

  events: {
    'click .hideDesc':                'hideDesc'
  },

  render: function() {
    $(this.el).html(this.template(this.model));

    return this;
  },

  hideDesc: function(event) {
    this.remove();
  }

});
