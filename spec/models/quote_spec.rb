require 'rails_helper'

RSpec.describe Quote, type: :model do
  describe 'validations' do
    xit 'is invalid if the est complete date is sooner than the start date' do
      quote = build(:quote,
        start_date: Time.now.strftime("%d/%m/%Y"),
        completion_date_estimate: (Time.now - 1).strftime("%d/%m/%Y")
      )
      quote.valid?
      expect(quote.errors[:completion_date_estimate]).to include('dsfasd')
    end
  end
end
