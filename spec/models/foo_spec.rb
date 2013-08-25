require 'spec_helper'

describe Foo do
  describe "#full_name" do

    it "concatenates the first and last name" do
      foo = Foo.new
      foo.first_name = 'John'
      foo.last_name = 'Doe'

      expect(foo.full_name).to eq('John Doe')

    end
  end
end
