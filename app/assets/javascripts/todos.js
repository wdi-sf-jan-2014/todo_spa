// Wait for document.ready or window.onload 
$(function () {

  // listen for sumbit on #addTodo
  $("#addTodo").on("submit", function (event) {
    // Callback on form submit

    // canceling the event on the page
    event.preventDefault();
    console.log("Form submitted");

    // create a newTodo using the
    //  todo_title out of the form
    //  and setting completed 
    //  false
    var newTodo = {
      title: $("#todo_title").val(),
      completed: false
    };

    // log the newTodo in console
    console.log(newTodo);

    // Saved         
    $.post('/todos.json', {
      todo: newTodo
    })
      .done(function (data) {
        console.log(data);
        var todoHTML = HandlebarsTemplates.todo(data);
        $("#todos").append(todoHTML);
      });

  });

  // We are doing a delegate on the #todos div
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

      // Let's write an update request
      $.ajax({
        type: 'patch',
        url: '/todos/' + updated_todo.id + '.json',
        data: {
          todo: updated_todo
        }
      }).done(function (data) {
        $(_this).toggleClass("done-true");
      });
    }
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
});



// $(function(){
//   // Begin with thinking about our form with id="addTodo"
//   // where we grab the title and submit `created` false
//   // We need to start by listening for a submit and then we need to preventDefault


//   // Wait for document.ready or window.onload
//   $('#addTodo').on('submit', function (event) {
//     console.log("Form Submitted");
//     event.preventDefault();
    
//     // Start a newTodo and grab the todo_title from form
//     // with completed:false
//     var newTodo = {
//       title: $('#todo_title').val(),
//       completed: false
//     };
//     console.log(newTodo);
    
//     // Now we save the information with an AJAX post request
//     $.ajax({
//       type: 'post', //can use method or type
//       url: '/todos.json',
//       data: {todo: newTodo}
//     }).done(function (data) {
//       console.log(data); //need to folow AJAX request with .done(<stuff>)
//       // Line 18 - 24 can be written 
//       // `$.post('/todos.json', {todo: newTodo}).done(<stuff>);
//       // create div on page
//       var todoHTML = HandlebarsTemplates.todo(data);
//       $('#todos').append(todoHTML);
//     });

//   });

//   // Disply all of the todos on a page
//   $.ajax({
//     type: 'get',
//     url: '/todos.json',
//   }).done(function (data) {
//     $(data).each(function (index, some_todo) {
//       var todoHTML = HandlebarsTemplates.todo(some_todo);
//       $('#todos').append(todoHTML);
//     });
//   });
  
//   // Listening for updates
//   // We're doing a delegate on #todos div
//   $('#todos').on('click', '.todo', function (event) {
//     console.log(event);
//     console.log(event.target);
//     if(event.target.id === "todo_completed") {
//       var checkbox = event.target;
//       var updated_todo = {};
//       var _this = this;
//       updated_todo.completed = checkbox.checked; //returns true if checkbox is checked
//       updated_todo.id = this.dataset.id; //dataset refers to the defined datasets in html tags in todo.hbs
//                                          //like data-id or data-foo=bar
//       //Update Request
//       $.ajax({
//         type: 'patch',
//         url: '/todos/' + Number(updated_todo.id) + '.json',
//         data: {todo: updated_todo}
//       }).done(function (data) {
//         $(_this).toggleClass("done-true");
//       });
//     }
//   });

//   $('#todos').on('click', '.todo', function (event) {
//     console.log(event);
//     console.log(event.target);
//     if(event.target.id === "removeTodo") {
//       var _this = this;
//       var id = this.dataset.id;

//       $.ajax({
//         type: 'delete',
//         url: '/todos/' + id
//       }).done(function (event) {
//         $(_this).remove();
//       });
//     }
//   });

// });

    // var todos = [];

    // var App = {};
   
    // App.setTemp = function(name){
    //     this.tempName = name;
    //     this.temp = HandlebarsTemplates[this.tempName];
       
    //     return this;
    // };

    // App.setTarget = function(sel){
    //     this.target =  sel;
    //     this.$target = $(sel);
    //     return this;
    // };
    
    
    // App.make = function(item){
    //     this.$el = $(this.temp(item));
    //     return this;
    // };
    
    // App.append = function(){
    //     this.$target.append(this.$el);
    //     return this;
    // };

    // App.use = function(targetSel, tempSel){
    //     return this.setTarget(targetSel).setTemp(tempSel);
    //  };
    // App.render = function(item){
    //   this.make(item).append();
    //   return this;
    // };
    
    // App.doThis = function(fn){
    //     fn.apply(App);
    //     return this;
    //  };

    // App.urls = {
    //   index : { path : '/todos.json', method : 'get' },
    //   create : { path : '/todos.json', method : 'post' },

    //   // An id must be added to the todos path
    //   update : { path : '/todos/', method : 'patch' },
    //   destroy : { path : '/todos/', method : 'delete' } 
    // };
    
    // App.saveItem = function(item, callback){
    //   var data = { todo : item };
    //   $.ajax({ url : this.urls.create.path,
    //            type : this.urls.create.method,
    //            data : data}).done(callback);
    //   return this;
    // };

    // App.getItems = function(callback){
    //   $.ajax({url : this.urls.index.path,
    //           type : this.urls.index.method}).done(callback);
    //   return this;      
    // };


    // App.updateItem = function(item, callback){
    //   // DO SOMETHING HERE
    //   // NOTE: For the url, an id for the item must be added to the path
    //   var data = { todo : item };
    //   $.ajax({
    //     url: this.urls.update.path + item.id + '.json',
    //     method: this.urls.update.method,
    //     data: data
    //   }).done(callback);
    // };

    // App.deleteItem = function(item, callback){
    //   // DO SOMETHING HERE
    //   // NOTE: For the url, an id for the item must be added to the path
    //   var data = { todo : item };
    //   $.ajax({
    //     url: App.urls.destroy.path + item + '.json',
    //     method: App.urls.destroy.method,
    //     data: data
    //   }).done(callback);
    //   };
    
    
    // App.models = todos;

    // App.findModel = function(id){
    //   var model;
    //   $.each(this.models, function(index, item){
    //       if(item.id === id){
    //           console.log("found",item);
    //          model = item;
    //       }
    //   });
    //   console.log(model);
    //   return model;
    // };

    // App.removeModel = function(todo){
    //   var index = this.models.indexOf(todo);
    //   this.models.splice(index,1);
    // };

   
    // // Eventhandler for adding todos
    // App.doThis(function(){
    //    var _this = this;
      
    //    $("#addTodo").on("submit", function(event){
    //     event.preventDefault();
        
    //     var newTodo = {completed: false};
    //     newTodo.title = $("#todo_title").val();
    //     _this.saveItem(newTodo, function(data){
    //         _this.models.push(data);
    //         _this.render(data);
    //      });
    //     this.reset();
    //   });
    // });


    // // Eventhandler for changing todos
    // App.doThis(function(){
    //    var _this = this;
      
    //   // event for CLICK CHECKBOX
    //   $("#todos").on("click", ".todo", function(event){
    //     var id = Number(this.dataset.id);
    //     if(event.target.name === "completed"){
    //       var view = this;
    //       var todo = _this.findModel(id);
    //       console.log(todo);
    //       todo.completed = !todo.completed;

    //       // UPDATE ITEM
    //       _this.updateItem(todo, function(){
    //         $(view).toggleClass("done-true");
    //       });
    //     }

    //     if(event.target.id === "removeTodo"){
    //       var view = this;
    //       var todo = _this.findModel(id);
    //       // DELETE ITEM
    //       _this.deleteItem(id, function(){
    //         _this.removeModel(todo);
    //         console.log(_this.models);
    //         $(view).remove();
    //       });
    //     }
    //   });
    // });

    // App.doThis(function() {
    //   var _this = this;

    //   _this.getItems(function(responseData){
    //     _this.models = _this.models.concat(responseData);
    //     for (var i = 0; i < responseData.length; i++) {
    //       _this.use('#todos', 'todo').render(responseData[i]);
    //     }
    //   });
    // });
