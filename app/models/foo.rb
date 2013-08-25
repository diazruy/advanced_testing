class Foo < ActiveRecord::Base
  include NameConcatenator

  attr_accessible :first_name, :last_name
end
