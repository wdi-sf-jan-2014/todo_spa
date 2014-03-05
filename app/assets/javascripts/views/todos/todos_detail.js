SpaApp.Views.TodoDetail = Backbone.View.extend({

	template: HandlebarsTemplates['todos/detail'],

	events: {
		"detail/:id": "update" 
	},

	render: function() {
		console.log(this.model);
		this.$el.html(this.template(this.model));
		return this;
	}, 

	update: function(){
		var desc = this.$el.find("#detail");
		var updated_todo = { description: desc.val() };

		$.ajax({
			context: this, 
			type: "patch", 
			url: "/todos" + this.model.id + ".json", 
			data: { todo: updated_todo }
		}).done(function(data){
			desc.val('');
			SpaApp.router.navigate("", { trigger: true });
		});
	} 
});