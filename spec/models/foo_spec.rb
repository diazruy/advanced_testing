require 'spec_helper'

describe Foo do
  describe "#full_name" do
    it "concatenates the first and last name" do
      foo = Foo.new(first_name: 'John', last_name: 'Doe')
      expect(foo).to respond_to :full_name
    end
  end

  describe ".published" do
    it "returns all the published foos" do
      john = Foo.create!(first_name: 'John', last_name: 'Doe', published: true)
      rick = Foo.create!(first_name: 'Rick', last_name: 'Smith', published: false)

      expect(Foo.published).to have(1).item
      expect(Foo.published.first).to eq(john)
    end
  end

  describe ".active" do
    it "returns all the active foos" do
      john = Foo.create!(first_name: 'John', last_name: 'Doe', active: true)
      rick = Foo.create!(first_name: 'Rick', last_name: 'Smith', active: false)

      expect(Foo.active).to have(1).item
      expect(Foo.active.first).to eq(john)
    end
  end
end
