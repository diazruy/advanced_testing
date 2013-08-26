class Foo < ActiveRecord::Base
  include NameConcatenator

  attr_accessible :first_name, :last_name, :published, :active

  scope :published, lambda { where(published: true) }
  scope :unpublished, lambda { where(published: false) }
  scope :active, lambda { where(active: true) }
  scope :inactive, lambda { where(active: false) }
end
