class CourseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name
  has_many :activities
end
