const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/players`

document.addEventListener("DOMContentLoaded", () => {
  getPlayers()    
})

function getPlayers() {
  fetch(PLAYERS_URL)
  .then(resp => resp.json())
  .then(players => console.log(players))    
}