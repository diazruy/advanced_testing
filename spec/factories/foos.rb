FactoryGirl.define do
  factory :foo do
    first_name 'John'
    last_name 'Doe'

    trait :published do
      published true
    end

    trait :unpublished do
      published false
    end

    trait :active do
      active true
    end

    trait :inactive do
      active false
    end
  end
end
