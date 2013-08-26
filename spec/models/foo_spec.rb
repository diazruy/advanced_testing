require 'spec_helper'

describe Foo do
  describe "#full_name" do
    it "concatenates the first and last name" do
      foo = Foo.new(first_name: 'John', last_name: 'Doe')
      expect(foo).to respond_to :full_name
    end
  end
end