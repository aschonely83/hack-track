BASE_URL = "http://localhost:3000"
//PLAYERS_URL = `${BASE_URL}/players`
COURSES_URL = `${BASE_URL}/courses`

document.addEventListener("DOMContentLoaded", () => {
  //getPlayers();
  //renderPlayers();
  getCourses();
  renderCourses();
  
  
  const addCourse = document.querySelector("#add-course-form");

  addCourse.addEventListener("submit", (e) => {
    
    createCourses(e);
  });

})
  


//function getPlayers() {
//  return fetch(PLAYERS_URL )
//  .then(resp => resp.json())
//  .catch(err => alert(err));
//}    
//   
//function renderPlayers() {
//  this.getPlayers()
//  .then(players => {
//   players.data.forEach(player => {
//   buildPlayersList(player)
//   })
// });
//}
//     
//function buildPlayersList(player) {
//  const div = document.createElement('div')
//  const div1 = document.createElement('div')
//  const h1 = document.createElement('h1')
//     
//  const playerList = document.getElementById('player-list')
//  playerList.append(div)
//  div.append(div1)
//  div.append(h1)
//  div.setAttribute('class', "player-card")
//  div.setAttribute("data-id", `${player.id}`)
//  div1.setAttribute('class', "player-name")
//  h1.setAttribute('class', "player-name")
//  h1.textContent = `${player.attributes.name}`
//}

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
      

      //const holeForm = document.createElement('form')
      //holeForm.id = "hole-form"
      //const timeInput = document.createElement('input')
      //timeInput.type = "text"
      //timeInput.name = "time_input"
      //timeInput.id = "time-input"
      //timeInput.placeholder = "Enter Tee Time"
      //const numbInput = document.createElement('input')
      //numbInput.type = "text"
      //numbInput.name = "numb_input"
      //numbInput.id = "numb-input"
      //numbInput.placeholder = "Enter Hole #"
      //const markerInput = document.createElement('input')
      //markerInput.type = "text"
      //markerInput.name = "marker_input"
      //markerInput.id = "marker-input"
      //markerInput.placeholder = "Enter Tee Marker"
      //const parInput = document.createElement('input')
      //parInput.type = "par"
      //parInput.name = "par_input"
      //parInput.id = "par-input"
      //parInput.placeholder = "Enter Par"
      //const scoreInput = document.createElement('input')
      //scoreInput.type = "text"
      //scoreInput.name = "score_input"
      //scoreInput.id = "score-input"
      //scoreInput.placeholder = "Enter Score"
      //const submitBtn = document.createElement('button')
      //submitBtn.type = "submit"
      //submitBtn.classList.add("add")
      //submitBtn.textContent = "Add Hole"
      //holeForm.append(timeInput, numbInput, markerInput, parInput, scoreInput, submitBtn)
          
      div.append(div1)
      div.append(p)
      div.setAttribute('class', "activity-card")
      div.setAttribute("data-id", `${activity.id}`)
      p.textContent = `Tee Time: ${activity.attributes.tee_time}
        # ${activity.attributes.hole_numb}
        Tees: ${activity.attributes.tee_marker}
        Par: ${activity.attributes.par}
        Score: ${activity.attributes.score}`
    let divId = `${activity.attributes.course_id}`
    const activityList = document.querySelector(`div#activity-div[data-id="${divId}"]`)
    activityList.append(div)
 
    //const addFormHole = document.querySelectorAll('#hole-form')   
    //addFormHole.forEach(form =>  {
    //
    //form.addEventListener("submit", function(event) {
    //  event.preventDefault();
    //  debugger;
    //})
   //
    //}) 
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