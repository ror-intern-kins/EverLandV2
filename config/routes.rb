Rails.application.routes.draw do
  root 'welcome#index'
  #error pages
  match '/404', to: 'error/errors#not_found', via: :all, as: 'not_found'
  match '/500', to: 'error/errors#internal_error', via: :all, as: 'internal_error'
  resources :categories

  post '/getcate', to: 'posts#get_category_new', as: 'get_cate'
  post '/getcate_edit', to: 'posts#get_category_edit', as: 'get_cate_edit'
  post '/getdata', to: 'posts#get_data', as: 'get_data'
  #Add action new 5.3
  resources :users do
    resources :posts, only: [:new, :edit, :update, :destroy, :create]  do
      resources :images,only: [:create, :edit, :update, :show, :destroy]
    end
  end

  get '/confirm_password', to: 'users#confirm_old_password'
  post '/change_password', to: 'users#change_password'
  get '/change_password', to: 'users#edit_change_password'
  get '/edit_change_password', to: 'users#edit_change_password'
  # ---------------------change password---------------------
  get '/check_user', to: 'users#check_existed_user' #kiểm tra user tồn tại
  get '/check_login', to: 'sessions#check_login' #kiểm tra user và pass đúng hay chưa
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#destroy'

  get '/index/user/:user_id/posts', to: 'posts#index_user_posts', as: 'index_user_posts' #liệt kê toàn bộ các bài viết của user
  
  # add a collection search - Q
  resources :posts, except: [:destroy] do
    collection do
      get 'search'
      get 'result'
    end
  end

  resources :images, except: [:create, :edit, :update, :show, :destroy]

  resources :cities do
    resources :districts, only: [:create, :edit, :update, :show, :destroy] do
      resources :wards, only: [:create, :edit, :update, :show, :destroy] do
        resources :streets, only: [:create, :edit, :update, :show, :destroy]
      end
    end
  end
  resources :districts, except: [:create, :edit, :update, :show, :destroy]
  resources :wards, except: [:create, :edit, :update, :show, :destroy]
  resources :streets, except: [:create, :edit, :update, :show, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
