SpaApp.Views.TodosIndex = Backbone.View.extend({
    className: function() {
        if (this.model.completed) {
        return 'done done-true';
    } else {
        return 'done';
        }
    },

  template: HandlebarsTemplates['todos/show'],

    events: {
        "click #todo_completed": "update",
        "click #removeTodo": "delete"
    },

    render: function() {
        $(this.el).html(this.template());

        _.each(this.collection, function (someTodo) {
        var todoHTML = HandlebarsTemplates['todos/show'](someTodo);
        this.$el.append(todoHTML);
        }, this);

        return this;
});
