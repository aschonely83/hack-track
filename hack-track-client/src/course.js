class Course {
  
  constructor(id, name) {
    this.id = id
    this.name = name
    Course.all.push(this)    
  }    
}

Course.all = []