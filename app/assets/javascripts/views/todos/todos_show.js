SpaApp.Views.TodosShow = Backbone.View.extend({
  id: 'todos',

    events: {
    'click #removeTodo': 'delete',
    'click input[type="checkbox"]' : 'update'

  },

  template: HandlebarsTemplates['todos/show'],

  render: function() {
    $(this.el).html(this.template());

    var todoView;
    _.each(this.collection, function (someTodo) {
     todoView = HandlebarsTemplates['todos/show']({model: someTodo});
      this.$el.append(todoView.render().el);
    }, this);

    return this;
  },

  update: function() {
    $("#todos").on("click", ".todo", function (event) {
    console.log(event);
    console.log(event.target);
    var _this;
    if (event.target.id === "todo_completed") {
      var checkbox = event.target;
      _this = this;

      var updated_todo = {};
      updated_todo.completed = checkbox.checked;
      updated_todo.id = this.dataset.id;

      // Let's write a update request
      $.ajax({
        type: 'patch',
        url: '/todos/' + updated_todo.id + '.json',
        data: {
          todo: updated_todo
        }
      }).done(function (data) {
        $(_this).toggleClass("done-true");
      });
      return this;
    }
},

  delete: function() { $("#removeTodo").on("click", ".todo", function (event) {
    console.log(event);
    console.log(event.target);
    
    if (event.target.id === "removeTodo") {
      _this = this;
      var id = this.dataset.id;

      $.ajax({
        type: 'delete',
        url: '/todos/' + id
      })
        .done(function (data) {
          $(_this).remove();
        });
    }

  });
    return this;
  }
}