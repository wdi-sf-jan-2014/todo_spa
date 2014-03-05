SpaApp.Views.Description = Backbone.View.extend({
  className: 'descrip',

  template: HandlebarsTemplates['todos/description'],

  render: function(){
    $(this.el).html(this.template(this.model));
    return this;
  }

});