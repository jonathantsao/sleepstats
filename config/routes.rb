Rails.application.routes.draw do
  root to: "static_pages#root"


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show]
  end

  get 'api/users/:id/interval/:mapped_id', :to => 'api/users#show_interval'

end
