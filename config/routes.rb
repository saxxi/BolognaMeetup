Rails.application.routes.draw do

  root to: 'application#empty'

  get '*path' => 'application#empty', constraints: lambda { |req| req.format != :json }

  resources :events do
    collection do
      get :search
    end
  end

end
