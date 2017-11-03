class User < ApplicationRecord
  validates :name, :url, presence: true
  validates :url, uniqueness: true


  attr_reader :user_intervals

  has_many :intervals
  after_create :http_parse

  def user_intervals
    @user_intervals ||= HTTParty.get(self.url).parsed_response["intervals"]
  end

  def http_parse
    json_data = HTTParty.get(self.url).parsed_response
    User.create_intervals(self.id, json_data["intervals"])
    nil
  end

  def self.create_intervals(user_id, intervals)
    intervals.each_with_index do |interval, idx|
      new_interval = Interval.new(user_id: user_id, mapped_id: idx)
      new_interval.save!
    end
  end

end
