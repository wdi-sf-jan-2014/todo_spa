SpaApp.Views.TodosShow = Backbone.View.extend({
  id: 'todo',

  template: HandlebarsTemplates['todos/show'],

   events: {
    'click input[type="checkbox"]': 'complete',
    'click #removeTodo': 'removeTodo'
   },

  render: function() {
    if (this.model.completed) {
      this.$el.addClass("done-true");
    }
    this.$el.html(this.template(this.model));

    return this;
  },

  removeTodo: function(event) {
    event.preventDefault();
    var _this = this;
    var id = this.model.id;

    $.ajax({
      type: 'delete',
      url: '/todos/' + id
    }).done(function(data) {
      _this.$el.remove();
    });
  },

  complete: function() {
    var _this = this;
    var id = this.model.id;
    // toggle model value, then collect updated info to send 
    this.model.completed = !this.model.completed;
    var updatedTodo = {
      completed: this.model.completed
    };

    // issue update request to server
    $.ajax({
        type: 'patch',
        url: '/todos/' + id + '.json',
        data: {
          todo: updatedTodo
        }
    }).done(function(data) {
      _this.$el.toggleClass("done-true");
    });
  }

});
