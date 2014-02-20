SpaApp::Application.routes.draw do
  root to: 'todos#index'
  get '/todos', to: 'todos#index', as: 'todos'
  post '/todos', to: 'todos#create'
  delete '/todos/:id', to: 'todos#destroy'
  patch '/todos/:id', to: 'todos#update'

end



  ## root 'sites#index'
  ## get '/sites/new', to: 'sites#new', as: 'new_site'
  # post '/sites', to: 'sites#create', as: 'sites'
  # get '/sites/:id', to: 'sites#show', as: 'site'
  # delete '/sites/:id', to: 'sites#destroy'
  # get '/sites', to: 'sites#index'