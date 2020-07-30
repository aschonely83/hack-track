BASE_URL = "http://localhost:3000"
PLAYERS_URL = `${BASE_URL}/players`
COURSES_URL = `${BASE_URL}/courses`


document.addEventListener("DOMContentLoaded", () => {
  getPlayers();
  renderPlayers();
  getCourses();
  renderCourses();
 
   
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
  div.setAttribute("data-name", player.attributes.name)
  div.setAttribute("data-id", `${player.id}`)
  div1.setAttribute('class', "player-name")
  p.setAttribute('class', "player-name")
  p.textContent = `${player.id} ${player.attributes.name}`
}

function createPlayer(event) {
  event.preventDefault();
  const form = event.target;
  fetch(PLAYERS_URL , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     },
    body: JSON.stringify ( {
      name: form.name.value
     })
   })
  .then(resp => resp.json())
  .then(data => data)
  .then(location.reload())
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
    const p = document.createElement('p')
    
    const courseList = document.getElementById('course-list')
    courseList.append(div)
    div.append(div1)
    div.append(p)

    div.setAttribute('class', "course-card")
    div.setAttribute("data-name", course.attributes.name)
    div.setAttribute("data-id", `${course.id}`)
    div1.setAttribute('class', "course-name")
    p.setAttribute('class', "course-name")
    p.textContent = `${course.id} ${course.attributes.name}`

  }