SpaApp.Views.TodosNav = Backbone.View.extend({

	id: 'header', 

	template: HandlebarsTemplates['todos/nav'], 

	events: {
		'click #home': 'makeNav'
	}, 

	render: function(){
		this.$el.html('<a href="/todos" id="home">Home</a>');
		return this;
	},

	makeNav: function(event){
		event.preventDefault();
		var path = event.target.pathname;
		SpaApp.router.navigate(path, { trigger: true });
	}



});