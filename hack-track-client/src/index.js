BASE_URL = "http://localhost:3000"
COURSES_URL = `${BASE_URL}/courses`

document.addEventListener("DOMContentLoaded", () => {
 
  renderCourses();
  
  
  const addCourse = document.querySelector("#add-course-form");

  addCourse.addEventListener("submit", (e) => {
    
    createCourses(e);
  });

})
  
function getCourses() {
  return fetch(COURSES_URL)
  .then(resp => resp.json())
  .catch(err => alert(err));
  }    

function renderCourses() {
   getCourses()
  .then(courses => {
    courses.data.forEach(course => {
    buildCoursesList(course)
   })
    getActivities();
  });
}
  
function buildCoursesList(course) {
  const div = document.createElement('div')
  const div1 = document.createElement('div')
  const activityDiv = document.createElement('div')
  const p = document.createElement('p')
  
  
  const courseList = document.getElementById('course-list')
  courseList.append(div)
  div.append(div1)
  div.append(p)
  div.setAttribute('class', "course-card")
  div.setAttribute("data-id", `${course.id}`)
  div1.setAttribute('class', "course-name")
  activityDiv.setAttribute('id', "activity-div")
  activityDiv.setAttribute("data-id", `${course.id}`)
  p.setAttribute('class', "course-name")
  p.textContent = `${course.attributes.name}`
  div.append(activityDiv)
}

function getActivities() {
  fetch(`${BASE_URL}/activities`)
  .then(resp => resp.json())    
  .then(activities => {
    activities.data.forEach(activity => {
      const div = document.createElement('div')
      const div1 = document.createElement('div')
      const p = document.createElement('p')
      

      const holeForm = document.createElement('form')
      holeForm.id = "hole-form"
      
      const numbInput = document.createElement('input')
      numbInput.type = "text"
      numbInput.name = "numb_input"
      numbInput.id = "numb-input"
      numbInput.placeholder = "Enter Hole #"
      const scoreInput = document.createElement('input')
      scoreInput.type = "text"
      scoreInput.name = "score_input"
      scoreInput.id = "score-input"
      scoreInput.placeholder = "Enter Score"
      const submitBtn = document.createElement('button')
      submitBtn.type = "submit"
      submitBtn.classList.add("add")
      submitBtn.textContent = "Add Hole"
      holeForm.append(numbInput, scoreInput, submitBtn)
          
      div.append(div1)
      div.append(p, holeForm)
      div.setAttribute('class', "activity-card")
      div.setAttribute("data-id", `${activity.id}`)
      p.textContent = `
        # ${activity.attributes.hole_numb}
        Par: ${activity.attributes.par}
        Score: ${activity.attributes.score}`
    let divId = `${activity.attributes.course_id}`
    const activityList = document.querySelector(`div#activity-div[data-id="${divId}"]`)
    activityList.append(div)
 
    const addFormHole = document.querySelectorAll('#hole-form')   
    addFormHole.forEach(form =>  {
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      debugger;
     })
     }) 
   })
 })
}

function createCourses(e) {
  e.preventDefault();
  const form = e.target;
  fetch(COURSES_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: form.name.value
      
    })
  })
  .then(resp => resp.json())
  .then(data => data)
  .then(location.reload());
}