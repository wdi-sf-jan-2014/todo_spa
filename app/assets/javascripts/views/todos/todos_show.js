SpaApp.Views.TodosShow = Backbone.View.extend({
  className: function() {
    if (this.model.completed) {
      return 'done done-true';
    } else {
      return 'done';
    }
  },
  
  show_temp: HandlebarsTemplates['todos/show'],


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


    SpaApp.Routers.Main = Backbone.Router.extend({
    routes: {
      "todo/:param": "display_d"
      },

      description_temp: HandlebarsTemplates['todos/description'],

      display_d: function(){
      console.log("yes");
      $('#container').append(this.description_temp(this.model));
      }
    });

      SpaApp.router = new SpaApp.Routers.Main();
      event.preventDefault();
      var path = event.target.pathname;
      console.log(path);
      SpaApp.router.navigate(path, {trigger: true});

  }

});
