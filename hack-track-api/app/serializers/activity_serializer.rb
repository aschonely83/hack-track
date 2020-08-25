class ActivitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :tee_time, :hole_numb, :tee_marker, :par, :score, :status
  belongs_to :course  
end
