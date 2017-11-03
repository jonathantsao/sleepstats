class Interval < ApplicationRecord
  validates :user_id, :mapped_id, presence: true

  belongs_to :user


end
