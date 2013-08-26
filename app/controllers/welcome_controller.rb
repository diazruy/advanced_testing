class WelcomeController < ApplicationController
  def index
    active = params.fetch(:active, "0") == "1"
    @foos = Foo.where(published: true).where(active: active)
  end
end
