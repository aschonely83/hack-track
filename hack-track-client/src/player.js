class Player {
  
  constructor(id, name) {
    this.id = id
    this.name = name
    Player.all.push(this)    
  }    
}

Player.all = []