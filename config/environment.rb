configure :development do 
  require "pry-remote"
  require "better_errors"
  require "sinatra/reloader"

  use BetterErrors::Middleware 
  BetterErrors.application_root = __dir__
end
