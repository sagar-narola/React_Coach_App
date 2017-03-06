class ClientController < ActionController::Base
  protect_from_forgery with: :exception
  layout 'client'

end
