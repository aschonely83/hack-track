Player.seed(:id,
  { :id => 1, :name => "Jon" },
  { :id => 2, :name => "Emily" },
  { :id => 3, :name => "Frank" },
  { :id => 4, :name => "Tim" },
  { :id => 5, :name => "Fred" }
)

Course.seed(:id, 
  { :id => 4, :name => "Bella Vista" },
  { :id => 2, :name => "Blackwood" },
  { :id => 3, :name => "Gilbertsville" },
  { :id => 5, :name => "Turtle Creek" },
  { :id => 1, :name => "Twin Ponds" }  
)

Activity.seed(:id, 
  { :id => 1, player_id: 1, course_id: 1, :tee_time => "7:00am", :hole_numb => "1", :tee_marker => "white", :par => "5", :score => "5" },
  { :id => 2, player_id: 2, course_id: 2, :tee_time => "8:00am", :hole_numb => "1", :tee_marker => "white", :par => "4", :score => "6" },
  { :id => 3, player_id: 3, course_id: 3, :tee_time => "9:00am", :hole_numb => "1", :tee_marker => "blue", :par => "4", :score => "3" },
  { :id => 4, player_id: 4, course_id: 4, :tee_time => "10:00am", :hole_numb => "1", :tee_marker => "black", :par => "4", :score => "5" },
  { :id => 5, player_id: 5, course_id: 5, :tee_time => "11:00am", :hole_numb => "1", :tee_marker => "white", :par => "4", :score => "5" }  
)