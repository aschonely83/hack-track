class ActivitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :tee_time, :hole_numb, :tee_marker, :par, :score, :course_id, :course
  #belongs_to :player
  #belongs_to :course  
end
