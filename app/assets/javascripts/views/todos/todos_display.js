SpaApp.Views.TodosDisplay = Backbone.View.extend({
  tagname: 'div',

  events: {
    "click a": "linkClicked"
  },

  template: HandlebarsTemplates['todos/display'],

  render: function(model) {
    this.$el.html(this.template(this.model));
    return this;
  },

  linkClicked: function(event) {
    event.preventDefault();
    var path = event.target.pathname;
    SpaApp.router.navigate(path, {trigger: true});
  }
});
