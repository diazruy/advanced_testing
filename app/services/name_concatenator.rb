class NameConcatenator
  def self.full_name(nameable)
    [nameable.first_name, nameable.last_name].join(' ')
  end
end
