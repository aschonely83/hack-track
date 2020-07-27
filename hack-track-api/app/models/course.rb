class Course < ApplicationRecord
  has_many :activities
  has_many :players, through: :activities     
end
