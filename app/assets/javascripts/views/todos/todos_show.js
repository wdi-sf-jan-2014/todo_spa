SpaApp.Views.TodosShow = Backbone.View.extend({
  id: 'todo',

  template: HandlebarsTemplates['todos/show'],

   events: {
  //   'click input[type="checkbox"]': 'complete',
     'click #removeTodo': 'removeTodo'
   },

  render: function() {
    $(this.el).html(this.template(this.model));

    return this;
  },

  removeTodo: function() {
    _this = this;
    var id = this.model.id;

    $.ajax({
      type: 'delete',
      url: '/todos/' + id
    })
      .done(function (data) {
        _this.$el.remove();
      });
  }

});
