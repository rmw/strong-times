class Workout < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :user
  has_many :exercises
  has_many :workout_histories
  has_many :exercise_histories, through: :exercises
end