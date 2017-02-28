Rails.application.routes.draw do
  root 'landing_page#page1'

  get 'landing_page/page2'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
