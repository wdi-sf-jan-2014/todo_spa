SpaApp.Views.TodosDescription = Backbone.View.extend({
  id: 'TodoDescription',

  template: HandlebarsTemplates['todos/description'],

  render: function() {
   $(this.el).html(this.template());

    var todoView;
    _.each(this.collection, function (someTodo) {
      todoView = new SpaApp.Views.TodosShow({ model: someTodo} );
      this.$el.append(todoView.render().el);
    }, this);

    return this;
  },

});