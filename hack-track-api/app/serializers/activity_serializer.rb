class ActivitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :tee_time, :hole_numb, :tee_marker, :par, :score
  belongs_to :player
  belongs_to :course  
end
#, :player_id, :course_id