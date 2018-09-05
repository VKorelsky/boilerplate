# add helpers folder to load path
$:.unshift File.expand_path('../helpers', __FILE__)

require 'sinatra'
require "sinatra/view_helpers"
require_relative "config/environment.rb"

set :root, File.dirname(__FILE__)

get '/' do 
  erb :index
end
