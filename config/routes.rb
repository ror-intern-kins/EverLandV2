Rails.application.routes.draw do
  resources :images
  resources :posts
  resources :streets
  resources :wards
  resources :districts
  resources :cities
  resources :categories
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
