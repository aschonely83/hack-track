BASE_URL = "http://localhost:3000"
PLAYERS_URL = `${BASE_URL}/players`
COURSES_URL = `${BASE_URL}/courses`

document.addEventListener("DOMContentLoaded", () => {
  getPlayers();
  renderPlayers();
  getCourses();
  renderCourses();
  getActivities();
})

function getPlayers() {
  return fetch(PLAYERS_URL )
  .then(resp => resp.json())
  .catch(err => alert(err));
}    
   
function renderPlayers() {
  this.getPlayers()
  .then(players => {
   players.data.forEach(player => {
   buildPlayersList(player)
   })
 });
}
     
function buildPlayersList(player) {
  const div = document.createElement('div')
  const div1 = document.createElement('div')
  const p = document.createElement('p')
     
  const playerList = document.getElementById('player-list')
  playerList.append(div)
  div.append(div1)
  div.append(p)
  div.setAttribute('class', "player-card")
  div.setAttribute("data-id", `${player.id}`)
  div1.setAttribute('class', "player-name")
  p.setAttribute('class', "player-name")
  p.textContent = `${player.attributes.name}`
}

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
      
      const activityList = document.getElementById('activity-div').dataset.id
      debugger;
      activityList.append(div)
      div.append(div1)
      div.append(p)
      div.setAttribute('class', "activity-card")
      div.setAttribute("data-id", `${activity.id}`)
      p.textContent = `Tee Time: ${activity.attributes.tee_time}
        # ${activity.attributes.hole_numb}
        Tees: ${activity.attributes.tee_marker}
        Par: ${activity.attributes.par}
        Score: ${activity.attributes.score}`
        
   })
 })
}