BASE_URL = "http://localhost:3000"
ACTIVITY_URL = `${BASE_URL}/activities`

document.addEventListener("DOMContentLoaded", () => {
 
  getActivity();
    
});

function getActivity() {
  fetch(ACTIVITY_URL)
  .then(resp => resp.json())
  .then(activities => {
    activities.data.forEach(activity => {
      
      let newActivity = new Activity(activity, activity.attributes)
    
      document.querySelector('.activity-container').innerHTML += newActivity.renderActivityCard()

      const addActivity = document.getElementById("activity-form")
      addActivity.addEventListener("submit", (e) => createForm(e))

    })
  })
}

function createForm(e) {
  e.preventDefault()
  
  const formData = document.getElementById("activity-form")
  const holeInput = formData.attributes[0].ownerElement[0].value
  const scoreInput = formData.attributes[0].ownerElement[1].value
  const courseId = formData.attributes[0].ownerElement[2].id
  
  const activityData = {
    hole: holeInput,
    score: scoreInput,
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

  fetch(ACTIVITY_URL, configObj)
  .then(function(resp) {
    return resp.json()
  })
  .then(function(activityData) {
    let newActivity = new Activity(activityData)
    renderActivityCard(newActivity, newActivity.course_id)
  })
}


