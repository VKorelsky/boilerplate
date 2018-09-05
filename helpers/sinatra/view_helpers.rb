module Sinatra
  module ViewHelpers
    def render_partial(template, opts={})
      parts = template.split('/')
      last = "_#{parts.pop}"
      erb([parts, last].flatten.join('/').to_sym, {layout: false}.merge(opts))
    end
  end

  helpers ViewHelpers
end 
