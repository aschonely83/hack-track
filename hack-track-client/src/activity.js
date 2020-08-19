class Activity {
 
  constructor(tee_time, hole_numb, tee_marker, par, score,course_id) {
    this.tee_time = tee_time
    this.hole_numb = hole_numb    
    this.tee_marker = tee_marker
    this.par = par
    this.score = score
    this .course_id = course_id
    //this.player_id = data.player_id
    Activity.call.push(this)
  }    
}

Activity.all = []