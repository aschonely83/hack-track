BASE_URL = "http://localhost:3000"
COURSES_URL = `${BASE_URL}/courses`
ACTIVITIES_URL = `${BASE_URL}/activities`

document.addEventListener("DOMContentLoaded", () => {
  
  getCourse();
  getActivity();
    
});

function getCourse() {
  fetch(COURSES_URL)
  .then(resp => resp.json())
  .then(courses => {
    courses.data.forEach(course => {
      
      let newCourse = new Course(course, course.attributes)
    
      document.querySelector('.activity-container').innerHTML += newCourse.renderCourseCard()
   })
  })
}

function getActivity() {
  fetch(ACTIVITIES_URL)
  .then(resp => resp.json())
  .then(activities => {
    activities.data.forEach(activity => {
     
      let newActivity = new Activity(activity, activity.attributes)
    
      document.querySelector('.activity-container').innerHTML += newActivity.renderActivityCard()

    })
    const addActivity = document.getElementById("activity-form")
      addActivity.addEventListener("submit", (e) => createForm(e))
  })
}

function createForm(e) {
  e.preventDefault()
  
  const formData = document.getElementById("activity-form")
  const newTeeTime = formData.attributes[0].ownerElement[0].value
  const hole = formData.attributes[0].ownerElement[1].value
  const teeMarker = formData.attributes[0].ownerElement[2].value
  const par = formData.attributes[0].ownerElement[3].value
  const score = formData.attributes[0].ownerElement[4].value
  const courseId = formData.attributes[0].ownerElement[5].id
  debugger
  const activityData = {
      tee_time: newTeeTime,
      hole_numb: hole,
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

  fetch("http://localhost:3000/courses/:course_id/activities", configObj)
  .then(function(resp) {
    return resp.json()
  })
  .then(function(activityData) {
    let newActivity = new Activity(activityData)
    renderActivityCard(newActivity, newActivity.course_id)
  })
}


