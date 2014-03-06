

[todo_spa](http://wdi-sf-jan-2014.github.io/todo_spa/)

# SPA App

It's now time to add the final piece to our SPA, backbone models and collections.  Take a look at the code provided in the backbone_models_lab branch in the topa_spa repo linked above.  The goal of using models is to have the model take care of persisting and storing data.  Therefore, you should try to change the todo app code such that there are no more jQuery ajax type calls.

Also, it's very possible to complete this assignment without responding to the model events.  Complete the lab however you see fit, but if you finish early, try to use model events in the view.

__HINT__ Look through all the javascript code provided.  There are some helpful pointers in the comments.

__EXTRA HARD BONUS__  If you are a backbone wizard and this model stuff did not slow you down much, try changing the app so that a user can have many todo lists.  The user should be able to name to todo list, e.g., groceries, work, etc.  The user could then click on a tabbed interface to switch between different lists of todos.  This will require adding a new table to the rails db, handling nested resources on the backbone side and on the rails side, and also adds the ability to create a new todo list to the spa app.








