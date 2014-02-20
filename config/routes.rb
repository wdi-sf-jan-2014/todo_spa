SpaApp::Application.routes.draw do
  root to: 'todos#index'
  resources :todos, except: [:new, :edit, :show]
end
