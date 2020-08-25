Course.seed(:id, 
  { :id => 1, :name => "Twin Ponds" }
)

Activity.seed(:id, 
  { :id => 1, course_id: 1, :tee_time => "7:00am", :hole_numb => "1", :tee_marker => "white", :par => "5", :score => "5" }
)