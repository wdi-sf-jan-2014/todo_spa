SpaApp.Views.TodosShow = Backbone.View.extend({

  id: this.model.id

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
    'click a':                'showDesc'
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

  showDesc: function(event) {
    event.preventDefault();
    var todoDesc = new SpaApp.Views.TodosDesc({ model: this.model});
    this.$el.append(todoDesc.render().el);   
    var path = event.target.pathname;
    SpaApp.router.navigate(path, {trigger: true});
  },

  
  

});
