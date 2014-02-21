SpaApp::Application.routes.draw do
  root to: 'todos#index'
  get '/todos', to: 'todos#index', as: 'todos'
  post '/todos', to: 'todos#create'
  delete '/todos/:id', to: 'todos#destroy'
  patch '/todos/:id', to: 'todos#update'
  
end
