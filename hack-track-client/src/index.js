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
      //debugger

      let newActivity = new Activity(activity, activity.attributes)
    
      document.querySelector('.activity-container').innerHTML += newActivity.renderActivityCard()

      const addActivity = document.querySelector(".activity-form")
      addActivity.addEventListener("submit", function(event) {
        event.preventDefault();
        debugger
      })
    })
  })
}


