BASE_URL = "http://localhost:3000"
ACTIVITIES_URL = `${BASE_URL}/activities`

document.addEventListener("DOMContentLoaded", () => {
  getActivities()

 
 
})
 
function getActivities() {
  fetch(`${BASE_URL}/activities`)
  .then(resp => resp.json())    
  .then(activities => {
    activities.data.forEach(activity => {
    
      const activitiesMarkup = `
       <div data-id=${activity.id}>
        <p>Name: ${activity.attributes.player.name}</p>
        <p>Course Name: ${activity.attributes.course.name}</p>
        <p>Tee Time: ${activity.attributes.tee_time}
          # ${activity.attributes.hole_numb}
          Tees: ${activity.attributes.tee_marker}
          Par: ${activity.attributes.par}
          Score: ${activity.attributes.score}</p>
               
      </div><br>
       
      `
       document.querySelector('#activity-container').innerHTML += activitiesMarkup
   })
 })
}