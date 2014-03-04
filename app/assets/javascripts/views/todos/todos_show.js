SpaApp.Views.TodosShow = Backbone.View.extend({
  id: 'todo',

  template: HandlebarsTemplates['todos/show'],

  // events: {
  //   'click input[type="checkbox"]': 'complete',
  //   'click .removeTodo': 'removeTodo'
  // },

  render: function() {
    $(this.el).html(this.template(this.model));

    return this;
  }

});