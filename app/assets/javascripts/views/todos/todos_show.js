SpaApp.Views.TodosShow = Backbone.View.extend({
  template: HandlebarsTemplates['todos/show'],

  events: {
    'click input[type="checkbox"]':   'complete'
  },

  render: function() {
    $(this.el).html(this.template(this.model));

    return this;
  },

  complete: function(event) {
    var _this = this;
    var checkbox = event.target;

    this.model.completed = checkbox.checked;

    $.ajax({
      type: 'patch',
      url: '/todos/' + this.model.id + '.json',
      data: {
        todo: this.model
      }
    }).done(function (data) {
      $(_this.el).toggleClass("done-true");
    });
  }

});
