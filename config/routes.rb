SpaApp::Application.routes.draw do
  root to: 'todos#index'
  get '/todos', to: 'todos#index', as: 'todos'
  delete '/todos/:id', to: 'todos#delete'
  patch '/todos/:id', to: 'todos#update'
  post '/todos', to: 'todos#create'
end
