const BASE_URL = "http://localhost:3000"
const COURSES_URL = `${BASE_URL}/courses`
const ACTIVITIES_URL = `${BASE_URL}/activities`

document.addEventListener("DOMContentLoaded", () => {
  getCourse();
  getActivity();
  
});

function getCourse() {
  fetch(COURSES_URL)
  .then(resp => resp.json())
  .then(courses => {
    courses.data.forEach(course => {
      makeCourseList(course)
    })
  })
 }

function makeCourseList(course) {
    
  const courseList = document.getElementById("course-list")
  const courseElement = document.createElement("h4")
  courseElement.id =`course-name-${course.id}`
  courseElement.innerText = course.attributes.name
  courseList.appendChild(courseElement)

  activityAddButton(course);
     
}    

function activityAddButton(course) {
  const courseElement = document.getElementById(`course-name-${course.id}`)
  const newActivityButton = document.createElement("button")
  newActivityButton.className="buttonClass"
  newActivityButton.innerText = "add new"
  courseElement.appendChild(newActivityButton)

  newActivityButton.onclick = function() {
  const newForm = document.createElement("FORM");
  newForm.setAttribute("id", "activityForm");

  const time = document.createElement("INPUT");
  time.setAttribute("type", "text");
  time.setAttribute("value", "time");
  newForm.appendChild(time);
        
  const number = document.createElement("INPUT");
  number.setAttribute("type", "text");
  number.setAttribute("value", "hole number");
  newForm.appendChild(number);

  const tee = document.createElement("INPUT");
  tee.setAttribute("type", "text");
  tee.setAttribute("value", "tee");
  newForm.appendChild(tee)

  const par = document.createElement("INPUT");
  par.setAttribute("type", "text");
  par.setAttribute("value", "par");
  newForm.appendChild(par)

  const score = document.createElement("INPUT");
  score.setAttribute("type", "text");
  score.setAttribute("value", "score");
  newForm.appendChild(score)

  const submitBut = document.createElement("INPUT"); 
  submitBut.setAttribute('type',"submit");
  submitBut.setAttribute("id", `${course.id}`)
  submitBut.setAttribute('value',"Submit");
  newForm.appendChild(submitBut);
      
  courseElement.appendChild(newForm);
  newForm.addEventListener("submit", submitActivityForm)
 }
}

function getActivity() {
  fetch(ACTIVITIES_URL)
  .then(resp => resp.json())
  .then(activities => {
    activities.data.forEach(activity =>{
      makeActivityList(activity)
    })
  })
  } 

function makeActivityList(activity) {
  const div = document.createElement('div')
  const p = document.createElement('p')
 
  const courseList = document.getElementById("course-list")
  courseList.append(div)
  div.prepend(p)


  div.setAttribute('class', "activity-card")
  div.setAttribute('data-id', `${activity.id}`)
  p.setAttribute('class', "scorecard")
  p.textContent = `
  Tee Time: ${activity.attributes.tee_time} 
  #: ${activity.attributes.hole_numb} 
  Tee: ${activity.attributes.tee_marker} 
  Par: ${activity.attributes.par} 
  Score: ${activity.attributes.score}  `
}

function submitActivityForm(event) {
  event.preventDefault()
  
  const formData = document.getElementById("activityForm")
  
  const teeTime = formData.attributes[0].ownerElement[0].value
  const holeNumber = formData.attributes[0].ownerElement[1].value
  const teeMarker = formData.attributes[0].ownerElement[2].value
  const par = formData.attributes[0].ownerElement[3].value
  const score = formData.attributes[0].ownerElement[4].value
  const courseId = formData.attributes[0].ownerElement[5].id

  const activityData = {
    tee_time: teeTime,
    hole_numb: holeNumber,
    tee_marker: teeMarker,
    par: par,
    score: score,
    course_id: courseId
  }
  const configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(activityData)
  }

  fetch ("http://localhost:3000/courses/:course_id/activities", configObj)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        let newActivity = new Activity(data)
        makeActivityList(newActivity, newActivity.course_id)                       
    })
    .catch(error => console.log(error))
}