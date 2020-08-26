class Activity {
 
  constructor(activity, activityAttributes) {
    this.id = activity.id
    this.tee_time = activityAttributes.tee_time
    this.hole_numb = activityAttributes.hole_numb
    this.tee_marker = activityAttributes.tee_marker
    this.par = activityAttributes.par      
    this.score = activityAttributes.score
    this.course_id = activityAttributes.course_id
    this.course = activityAttributes.course
    Activity.all.push(this)
    //console.log(this)
  }

  renderActivityCard() {
    return `
    <div class="activity-card">
      <div class="hole-card" data-id="${this.course_id}">
        <div class="hole-info"> 
        Tee Time: ${this.tee_time}
        #: ${this.hole_numb}
        Tee: ${this.tee_marker}
        Par: ${this.par}
        Score: ${this.score}</p><br>
        <br><br>
        <form id="activity-form">
          <label for="name">Tee Time</label>
          <input type="text" id="time-input" name="time">
          <label for="name">Hole</label>
          <input type="text" id="hole-input" name="hole">
          <label for="name">Tee Marker:</label>
          <input type="text" id="marker-input" name="marker">
          <label for="name">Par</label>
          <input type="text" id="par-input" name="par">
          <label for="name">Score</label>
          <input type="text" id="score-input" name="score">
          <input type="submit" id="${this.course_id}" value="Add" class="hole-btn">
        </form>
      </div>
    </div>
    `
  }
}

Activity.all = []