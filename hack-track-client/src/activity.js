class Activity {
 
  constructor(data) {
    this.tee_time = data.tee_time
    this.hole_numb = data.hole_numb    
    this.tee_marker = data.tee_marker
    this.par = data.par
    this.score = data.score
    this .course_id = data.course_id
    //this.player_id = data.player_id
    Activity.call.push(this)
  }    
}

Activity.all = []