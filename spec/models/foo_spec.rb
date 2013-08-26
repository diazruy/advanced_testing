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
      john = create :foo, :published
      rick = create :foo, :unpublished

      expect(Foo.published).to have(1).item
      expect(Foo.published.first).to eq(john)
    end
  end

  describe ".active" do
    it "returns all the active foos" do
      john = create :foo, :active
      rick = create :foo, :inactive

      expect(Foo.active).to have(1).item
      expect(Foo.active.first).to eq(john)
    end
  end
end
