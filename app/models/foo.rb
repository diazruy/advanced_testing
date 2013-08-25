class Foo < ActiveRecord::Base
  attr_accessible :first_name, :last_name
  def full_name
    NameConcatenator.full_name(self)
  end
end
