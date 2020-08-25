Rails.application.routes.draw do
  resources :courses, except: [:new] do 
    resources :activities, only: [:index, :show, :create]  
  end
  resources :activities, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
