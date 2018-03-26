Rails.application.routes.draw do
  root 'welcome#index'
  devise_for :users, :controllers => { 
    :sessions => "user/sessions", 
    :registrations => "user/registrations" ,
    omniauth_callbacks: "callbacks" 
  }
  # get '/auth/:provider/callback', to: 'user/sessions#create'
  # get '/auth/failure', to: 'user/sessions#failure'

  #----------Error page----------
  # match '/404', to: 'error/errors#not_found', via: :all, as: 'not_found'
  # match '/500', to: 'error/errors#internal_error', via: :all, as: 'internal_error'
  #----------Load data ajax-------------
  post '/getcate', to: 'posts#get_category_new', as: 'get_cate'
  post '/getcate_edit', to: 'posts#get_category_edit', as: 'get_cate_edit'
  post '/getdata', to: 'posts#get_data', as: 'get_data'
  #----------Change password-----------
  get '/confirm_password', to: 'users#confirm_old_password'
  post '/change_password', to: 'users#change_password'
  get '/change_password', to: 'users#edit_change_password'
  get '/edit_change_password', to: 'users#edit_change_password'
  #----------Login/ sign up/ logout------------
  get '/check_user', to: 'users#check_existed_user' #kiểm tra user tồn tại
  get '/check_email', to: 'users#check_email' #kiểm tra user tồn tại
  get '/check_login', to: 'users#check_login' #kiểm tra user và pass đúng hay chưa
  #----------Role User >> Post----------
  resources :users, except: [:index] do
    resources :posts, only: [:new, :edit, :update, :destroy, :create]  do
      resources :images,only: [:create, :edit, :update, :show, :destroy]
    end
  end
  get '/index/user/:user_id/posts', to: 'posts#index_user_posts', as: 'index_user_posts' #liệt kê toàn bộ các bài viết của user 
  # add a collection search - Q
  resources :posts, except: [:destroy, :new, :create, :edit, :update] do
    collection do
      get 'search'
      get 'result'
    end
  end
  resources :images, except: [:create, :edit, :update, :show, :destroy]
  
  #resources :categories
  # resources :cities do
  #   resources :districts, only: [:create, :edit, :update, :show, :destroy] do
  #     resources :wards, only: [:create, :edit, :update, :show, :destroy] do
  #       resources :streets, only: [:create, :edit, :update, :show, :destroy]
  #     end
  #   end
  # end
  # resources :districts, except: [:create, :edit, :update, :show, :destroy]
  # resources :wards, except: [:create, :edit, :update, :show, :destroy]
  # resources :streets, except: [:create, :edit, :update, :show, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
