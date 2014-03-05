SpaApp.Views.TodosShow = Backbone.View.extend({
  className: function() {
    if (this.model.completed) {
      return 'done done-true';
    } else {
      return 'done';
    }
  },
  
  template: HandlebarsTemplates['todos/show'],

  events: {
    'click input[type="checkbox"]':   'complete',
    'click .removeTodo':              'removeTodo',
    'click label':                    'showDescription'
  },

  render: function() {
    $(this.el).html(this.template(this.model));

    return this;
  },

  complete: function(event) {
    var checkbox = event.target;

    this.model.completed = checkbox.checked;

    $.ajax({
      context: this,
      type: 'patch',
      url: '/todos/' + this.model.id + '.json',
      data: {
        todo: this.model
      }
    }).done(function (data) {
      $(this.el).toggleClass("done-true");
    });
  },

  removeTodo: function(event) {
    $.ajax({
      context: this,
      type: 'delete',
      url: '/todos/' + this.model.id
    }).done(function (data) {
      this.remove();
    });
  },

  showDescription: function(event) {
    $.ajax({
      context: this,
      type: 'get',
      url: '/todos/' + this.model.id,
      data: {
        todo: this.model
      }
    }).done(function(todo) {
      $(this.el).append(todo.description);
    });
  }

});
