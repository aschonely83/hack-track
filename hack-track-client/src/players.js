class Player {
  
  constructor(data) {
    this.id = data.id
    this.name = data.name
    Player.all.push(this)    
  }    
}

Player.all = []