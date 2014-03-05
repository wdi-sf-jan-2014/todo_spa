SpaApp.Views.TodosShow = Backbone.View.extend({
  className: function() {
    if (this.model.completed) {
      return 'done done-true';
    } else {
      return 'done';
    }
  },
  
  show_temp: HandlebarsTemplates['todos/show'],
  description_temp: HandlebarsTemplates['todos/description'],

  events: {
    'click input[type="checkbox"]':   'complete',
    'click .removeTodo':              'removeTodo',
    'click a':                        'description' 
  },

  render: function() {
    $(this.el).html(this.show_temp(this.model));
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

  description: function() {
    event.preventDefault();
    var path = event.target.pathname;
    SpaApp.router.navigate(path, {trigger: true});
  
  }

});
