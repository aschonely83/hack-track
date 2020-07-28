class PlayerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :courses, :activities 
end
