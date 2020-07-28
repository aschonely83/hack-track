class CourseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :players, :activities
end
