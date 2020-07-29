class AppContainer{

    BASE_URL = "http://localhost:3000";
   
    
    
    getPlayers() {
      return fetch(this.BASE_URL + '/players')
      .then(resp => resp.json())
      }    
    
    renderPlayers() {
      this.getPlayers()
      .then(players => {
      players.forEach(player => {
        this.makePlayersList(player)
      })  
      });
    }  
    
    makePlayersList(player) {
      
      const playerList = document.getElementById('player-list')
      const playerElement = document.createElement('h4')
      playerElement.id = `player-name-${player.id}`
      playerElement.innerText = player.name
      playerList.appendChild(playerElement)
    }
        
}