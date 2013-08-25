require_relative '../../app/services/name_concatenator'

describe NameConcatenator do
  class MockClass
    include NameConcatenator
    attr_accessor :first_name, :last_name
  end

  describe ".concatenate" do
    it "concatenates the first and last name" do
      mock_object = MockClass.new
      mock_object.first_name = 'John'
      mock_object.last_name = 'Doe'
      expect(mock_object.full_name).to eq('John Doe')
    end
  end
end
