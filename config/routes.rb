Rails.application.routes.draw do

  devise_for :users, controllers: {sessions: 'users/sessions', registrations: 'users/registrations', passwords: 'users/passwords'}
        devise_scope :user do
          get '/users/sign_out' => 'devise/sessions#destroy'
        end

  get 'hello_world', to: 'hello_world#index'
  get 'static_pages/coach'

  get 'static_pages/login'

  get 'static_pages/register'

  root 'landing_page#page1'

  get 'landing_page/page2'

  get 'static_pages/home'


  namespace :client do
    get 'dashboard/profile'

    get 'dashboard/activity'

    get 'dashboard/activity_library'

    get 'dashboard/payment'

    get 'dashboard/conversation'
  end

  namespace :coach do
    get 'dashboard/profile'

    get 'dashboard/setting'

    get 'dashboard/conversation'

    get 'dashboard/library'

    get 'dashboard/payment'

    get 'dashboard/payment_success'

    get 'dashboard/payment_success_card'

  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
