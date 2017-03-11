FactoryGirl.define do
  factory :quote do
    customer_request
    company
    materials_cost_estimate 456.00
    labor_cost_estimate 500.00
    start_date Faker::Date.between(2.days.ago, Date.today)
    completion_date_estimate Faker::Date.between(Date.today, Date.today + 30)
    notes "MyText"
  end
end
