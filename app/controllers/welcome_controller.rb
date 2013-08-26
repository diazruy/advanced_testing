class WelcomeController < ApplicationController
  def index
    @foos = if params.fetch(:active, "0") == "1"
              Foo.published.active
            else
              Foo.published.inactive
            end
  end
end
