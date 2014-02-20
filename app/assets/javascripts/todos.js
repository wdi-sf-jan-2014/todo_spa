$(function(){
 $('#addTodo').on('submit', function(event){
            // begin callback
            // prevent form submission 
            event.preventDefault();
            
            // display in console a msg.
            console.log("todo was added!", event);
            
            var  newTodo = {completed: false};
            newTodo.title = $("#todo_title").val();
            console.log(newTodo);

            $.post("/todos.json",{todo: newTodo})
            .done(function(data){
                 console.log(data);
                var todoHTML = HandlebarsTemplates.todo(data);
                 $("#todos").append(todoHTML);
            });
    
    });
  
    $("#todos").on("click", ".todo", function(event){
            var _this = this;
            if(event.target.name === "completed"){
                var checkbox = event.target;
                console.log("clicked checkbox!");
               var updated_todo = {id: this.dataset.id}
               updated_todo.completed = checkbox.checked;
               console.log(updated_todo);
               $.ajax({
                    url: "/todos/"+updated_todo.id,
                    method: "PATCH",
                    data: {todo: updated_todo}
               }).done(function(data){
                    $(_this).toggleClass("done-true");  
               });
            }
            else if (event.target.id === "removeTodo") {
                var id = this.dataset.id;
                $.ajax({
                    url : '/todos/' + id,
                    method: 'delete'
                }).done(function(){
                    _this.remove();
                });
            }
     });

      // LOAD ALL TODOS INTO THE PAGE
      $.get("/todos.json").done(function(data){
          $(data).each(function(index, todo){
              var todoHTML = HandlebarsTemplates.todo(todo);
              $("#todos").append(todoHTML);
          });
      });        
  
});
