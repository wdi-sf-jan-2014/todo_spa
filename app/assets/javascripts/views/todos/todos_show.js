SpaApp.Views.TodosShow = Backbone.View.extend({
  template: HandlebarsTemplates['todos/show'],

  render: function() {
    $(this.el).html(this.template(this.model));

    return this;
  }
});
