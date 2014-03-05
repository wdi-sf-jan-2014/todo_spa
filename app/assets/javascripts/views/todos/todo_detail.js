SpaApp.Views.TodosDetail = Backbone.View.extend({
  template: HandlebarsTemplates['todos/detail'],
  events: {
    'click #submit_description': 'update',
    'click #close_detail': 'close'
  },
  render: function () {
    $(this.el).html(this.template(this.model));
    return this;
  },
  update: function () {
    var desc = this.$el.find('#todo_description');
    var updated_todo = {description: desc.val()};
    $.ajax({
      method: 'patch',
      url   : '/todos/' + this.model.id + '.json',
      data  : {todo: updated_todo}
    }).done(function(data){
      desc.val('');
      SpaApp.router.navigate('', {trigger: true});
    });
  },
  close: function () {
    SpaApp.router.navigate('', {trigger: true});
  }
});