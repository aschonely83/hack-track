class Activity {
 
  constructor(activity, activityAttributes) {
    this.id = activity.id
    this.hole_numb = activityAttributes.hole_numb      
    this.score = activityAttributes.score
    this.course = activityAttributes.course
    Activity.all.push(this)
    //console.log(this)
  }

  renderActivityCard() {
    return `
    <div class="activity-card">
      <div>
        <div class="hole-card">
          <h4 class="course-name">Course: ${this.course.name}</h4>
          <p class="hole-number">#: ${this.hole_numb}</p>
          <p class="hole-score">Score: ${this.score}</p>
        </div>
      </div>  
    </div>
    `
  }
}

Activity.all = []