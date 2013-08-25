require_relative '../../app/services/name_concatenator'

describe NameConcatenator do
  describe ".concatenate" do
    it "concatenates the first and last name" do
      nameable = double :model, first_name: 'John', last_name: 'Doe'
      expect(NameConcatenator.full_name(nameable)).to eq('John Doe')
    end
  end
end
