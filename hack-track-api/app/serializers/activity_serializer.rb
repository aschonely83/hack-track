class ActivitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :tee_time, :hole_numb, :tee_marker, :par, :score, :player_id, :player, :course_id, :course
  #belongs_to :player
  #belongs_to :course  
end
