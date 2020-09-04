class Course {
  
  constructor(data) {
    this.id = data.id
    this.name = data.name
    Course.all.push(this)    
  } 
}

Course.all = []