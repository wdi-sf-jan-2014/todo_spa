SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  render: function() {
    // renders the add_form template and appends to our view
    $(this.el).html(this.template());

    // looping through each element in our collection
    _.each(this.collection, function (someTodo) {
      var todoHTML = HandlebarsTemplates['todos/show'](someTodo);
      this.$el.append(todoHTML);
    }, this); //final "this" defines the scope of the function

    return this;
  }

});


// @collection.each do |someTodo|
