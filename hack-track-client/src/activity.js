class Activity {
 
  constructor(activity, activityAttributes) {
    this.id = activity.id
    this.hole_numb = activityAttributes.hole_numb      
    this.score = activityAttributes.score
    this.course_id = activityAttributes.course_id
    this.course = activityAttributes.course
    Activity.all.push(this)
    //console.log(this)
  }

  renderActivityCard() {
    return `
    <div class="activity-card">
      <div class="hole-card" data-id="${this.course.id}">
        <h4 class="course-name">Course: ${this.course.name}</h4>
        <p class="hole-number">#: ${this.hole_numb}</p>
        <p class="hole-score">Score: ${this.score}</p>
        <form id="activity-form">
          <label for="name">Hole</label>
          <input type="text" id="hole-input" name="hole">
          <label for="name">Score</label>
          <input type="text" id="score-input" name="score">
          <input type="submit" id="${this.course.id}" value="Add" class="hole-btn">
        </form>
      </div>
    </div>
    `
  }
}

Activity.all = []