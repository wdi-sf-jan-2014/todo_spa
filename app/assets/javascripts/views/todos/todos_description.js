SpaApp.Views.TodosDescription = Backbone.View.extend({

	template: HandlebarsTemplates['todos/description'],
	render: function() {
		console.log(this.model);
	}
});