Rails.application.routes.draw do

  resources :categories

  resources :users do
    resources :posts, only: [:create, :edit, :update, :destory]  do
      resources :images,only: [:create, :edit, :update, :show, :destory]
    end
  end
  get '/signup', to: 'users#new'
  get '/login', to: 'sessions#new'
  get '/session_home', to: 'sessions#home'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # add a collection search - Q
  resources :posts, except: [:create, :edit, :update,:destory] do
    collection do
      post 'search'
    end
  end

  resources :images, except: [:create, :edit, :update, :show, :destory]

  resources :cities do
    resources :districts, only: [:create, :edit, :update, :show, :destory] do
      resources :wards, only: [:create, :edit, :update, :show, :destory] do
        resources :streets, only: [:create, :edit, :update, :show, :destory]
      end
    end
  end
  resources :districts, except: [:create, :edit, :update, :show, :destory]
  resources :wards, except: [:create, :edit, :update, :show, :destory]
  resources :streets, except: [:create, :edit, :update, :show, :destory]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
