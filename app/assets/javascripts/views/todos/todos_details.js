SpaApp.Views.TodosDetails = Backbone.View.extend({

  id: "description",

  template: HandlebarsTemplates['todos/description'],

  render: function() {
    this.$el.html(this.template(this.model));
    return this;
  }

});