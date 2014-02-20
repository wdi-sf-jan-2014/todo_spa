SpaApp::Application.routes.draw do
  root to: 'todos#index'
  get '/todos', to: 'todos#index', as: 'todos'
  patch '/todos/:id', to: 'todos#update'
  delete '/todos/:id', to: 'todos#destroy'
  post '/todos', to: 'todos#create'
end
