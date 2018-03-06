Rails.application.routes.draw do
  root 'welcome#index'

  resources :categories

  resources :users do
    resources :posts, only: [:create, :edit, :update, :destory]  do
      resources :images,only: [:create, :edit, :update, :show, :destory]
    end
  end


  # add a collection search - Q
  resources :posts, except: [:destory] do
    collection do
      get 'search'
      get 'result'
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
