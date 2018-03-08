Rails.application.routes.draw do
  root 'welcome#index'

  resources :categories

  resources :users do
    resources :posts, only: [:create, :edit, :update, :destory]  do
      resources :images,only: [:create, :edit, :update, :show, :destory]
    end
  end

  get '/home', to: 'sessions#home'

  get '/check_user', to: 'users#check_existed_user' #kiểm tra user tồn tại
  get '/check_login', to: 'sessions#check_login' #kiểm tra user và pass đúng hay chưa

  post '/login', to: 'sessions#login'
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
