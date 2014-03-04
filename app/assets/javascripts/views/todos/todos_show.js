SpaApp.Views.TodosShow = Backbone.View.extend({

  // define 'el'
  className: function() {
    if (this.model.completed) {
    return "done done-true";
    } else {
      return "done";
    }
  },

  template: HandlebarsTemplates['todos/show'],

  events: {
    // event for checkbox
    "click [type='checkbox']": 'check',
    // event for delete
    "click #removeTodo": 'delete'
  },

  render: function() {
    $(this.el).html(this.template(this.model));
    return this;
  },

  check: function(event) {
    // event.preventDefault();
    var checkbox = event.target;
    this.model.completed = checkbox.checked;
    $.ajax({
      url: "/todos/" + this.model.id + ".json",
      type: "PATCH",
      data: {todo: this.model},
      context: this
    }).done(function(response){
      $(this.el).toggleClass("done-true");
    });
    return this;
  },

  delete: function(event) {
    event.preventDefault();
    $.ajax({
      url: "/todos/" + this.model.id + ".json",
      type: "DELETE",
      context: this
    }).done(function(response){
      $(this.el).remove();
    })
  }

});