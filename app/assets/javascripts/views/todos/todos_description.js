SpaApp.Views.TodosDescription = Backbone.View.extend({

  template: HandlebarsTemplates['todos/description'],

  render: function() {
    $(this.el).html(this.template(this.model));

    return this;
  }

});