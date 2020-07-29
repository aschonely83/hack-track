class AppContainer{
  BASE_URL = "http://localhost:3000";
     
   
  getPlayers() {
    return fetch(`${this.BASE_URL}/players`)
    .then(resp => resp.json())
    .catch(err => alert(err));
  }    
   
  renderPlayers() {
    this.getPlayers()
    .then(players => {
      players.data.forEach(player => {
      this.buildPlayersList(player)
     })
   });
  }
     
  buildPlayersList(player) {
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
   
  getCourses() {
    return fetch(`${this.BASE_URL}/courses`)
    .then(resp => resp.json())
    .catch(err => alert(err));
    }    
  
  renderCourses() {
    this.getCourses()
    .then(courses => {
      courses.data.forEach(course => {
        this.buildCoursesList(course)
      })
    });
  }
    
  buildCoursesList(course) {
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
    
 
         
} 