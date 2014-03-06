SpaApp.Views.TodosShow = Backbone.View.extend({
  className: function() {
    if (this.model.get('completed')) {
      return 'done done-true';
    } else {
      return 'done';
    }
  },
  
  template: HandlebarsTemplates['todos/show'],

  events: {
    'click input[type="checkbox"]': 'complete',
    'click .removeTodo':            'removeTodo',
    'click a':                      "linkClicked"
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));

    return this;
  },

  complete: function(event) {
    var checkbox = event.target;

    this.model.set('completed', checkbox.checked);

    $.ajax({
      context: this,
      type: 'patch',
      url: '/todos/' + this.model.get('id') + '.json',
      data: {
        todo: this.model.toJSON()
      }
    }).done(function (data) {
      $(this.el).toggleClass("done-true");
    });
  },

  removeTodo: function(event) {
    $.ajax({
      context: this,
      type: 'delete',
      url: '/todos/' + this.model.get('id')
    }).done(function (data) {
      this.remove();
    });
  },

  linkClicked: function(event){
    event.preventDefault();
    var path = event.target.pathname;
    SpaApp.router.navigate(path, {trigger: true});
  }

});
