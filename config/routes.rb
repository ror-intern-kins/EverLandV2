Rails.application.routes.draw do
  resources :categories

  #Add action new 5.3
  resources :users do
    resources :posts, only: [:new, :edit, :update, :destory, :create]  do
      resources :images,only: [:create, :edit, :update, :show, :destory]
    end
  end
  
  #add a collection search - Q
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
