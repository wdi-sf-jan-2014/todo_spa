SpaApp.Views.TodosShow = Backbone.View.extend({
  id: 'todos', 

  template: HandlebarsTemplates['todos/show'],

  events: {
    'click #removeTodo': 'removeTodo'
  },

  
})