require 'spec_helper'

describe WelcomeController do
  describe "#index" do
    it "assigns all the active, published foos" do
      abe = Foo.create!(first_name: 'Abe', last_name: 'Peters', published: true,  active: true)
      bob = Foo.create!(first_name: 'Bob', last_name: 'Smith',  published: true,  active: false)
      joe = Foo.create!(first_name: 'Joe', last_name: 'Schmoe', published: false, active: true)
      sue = Foo.create!(first_name: 'Sue', last_name: 'Clark',  published: true,  active: true)

      get :index, active: 1

      assigns(:foos).should include(abe)
      assigns(:foos).should include(sue)
      assigns(:foos).should_not include(joe)
      assigns(:foos).should_not include(bob)
    end

    it "assigns all the inactive, published foos" do
      abe = Foo.create!(first_name: 'Abe', last_name: 'Peters', published: true,  active: true)
      bob = Foo.create!(first_name: 'Bob', last_name: 'Smith',  published: true,  active: false)
      joe = Foo.create!(first_name: 'Joe', last_name: 'Schmoe', published: false, active: true)
      sue = Foo.create!(first_name: 'Sue', last_name: 'Clark',  published: true,  active: true)

      get :index, active: 0

      assigns(:foos).should_not include(abe)
      assigns(:foos).should_not include(sue)
      assigns(:foos).should_not include(joe)
      assigns(:foos).should include(bob)
    end
  end
end
