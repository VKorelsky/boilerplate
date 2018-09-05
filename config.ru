require_relative './app.rb'

if ENV['RACK_ENV'] == 'development'
  # in development fetch the files from the webpack-server
  require 'rack-proxy'

  class WebpackProxy < Rack::Proxy
    def rewrite_env(env)
      env['HTTP_HOST'] = 'localhost:8080'
      env['REQUEST_PATH'] = env['PATH_INFO']
      env
    end
  end

  run Rack::URLMap.new(
    '/bundle' => WebpackProxy.new,
    '/' => Sinatra::Application
  )
else
  # only run the sinatra app in production
  run Sinatra::Application
end
