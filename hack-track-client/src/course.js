class Course {
  
  constructor(course, courseAttributes) {
    this.id = course.id
    this.name = courseAttributes.name
    Course.all.push(this)    
  } 
  renderCourseCard() {
    return `
    <div class="course-card">
      <div class="card" data-id="${this.id}">
       <h4>Course: ${this.name}</h4>
      </div>
    </div>
    `
  }   
}

Course.all = []