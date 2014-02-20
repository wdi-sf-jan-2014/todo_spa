SpaApp::Application.routes.draw do

  root to: 'todos#index'
  get '/todos', to: 'todos#index', as: 'todos'
  post '/todos', to: 'todos#create'
  patch '/todos/:id', to: 'todos#update', as: 'todo'
  delete '/todos/:id', to: 'todos#destroy'

end


# reference:
#     root GET    /                         todos#index
#     todos GET    /todos(.:format)          todos#index
#           POST   /todos(.:format)          todos#create
#           GET    /todos(.:format)          todos#index
#           POST   /todos(.:format)          todos#create
#  new_todo GET    /todos/new(.:format)      todos#new
# edit_todo GET    /todos/:id/edit(.:format) todos#edit
#      todo GET    /todos/:id(.:format)      todos#show
#           PATCH  /todos/:id(.:format)      todos#update
#           PUT    /todos/:id(.:format)      todos#update
#           DELETE /todos/:id(.:format)      todos#destroy