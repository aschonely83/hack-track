BASE_URL = "http://localhost:3000"
ACTIVITIES_URL = `${BASE_URL}/activities`

document.addEventListener("DOMContentLoaded", () => {
  getActivities()

 
 
})
 
function getActivities() {
  fetch(ACTIVITIES_URL)
  .then(resp => resp.json())    
  .then(activities => {
    activities.data.forEach(activity => {
    
      const activitiesMarkup = `
       <div data-id=${activity.id}>
        <p>Name: ${activity.attributes.player.name}</p>
        <p>Course Name: ${activity.attributes.course.name}</p>
         
        <label for="holes">Choose a hole:</label>
        <select name="holes" id="holes">
          <option value="hole-">
          Tee Time: ${activity.attributes.tee_time}
          # ${activity.attributes.hole_numb} 
          Tees: ${activity.attributes.tee_marker}
          Par: ${activity.attributes.par}
          Score: ${activity.attributes.score}</option>
        </select>
      </div><br>
        <input type="text" name="name" placeholder="Add Hole">
        <button type="submit id="add-hole">Add Hole</button>
      `
       document.querySelector('#activity-container').innerHTML += activitiesMarkup
    })
  })
}

function createActivity(event) {
  event.preventDefault();
  const form = event.target;
  fetch(ACTIVITIES_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      tee_time: form.tee_time.value,
      hole_numb: form.hole_numb.value,
      tee_marker: form.tee_marker.value,
      par: form.par.value,
      score: form.score.value
    })  
  })
  .then(resp => resp.json())
  .then(data => data)
  .then(location.reload());
}

function addOptions() {
  let x = document.getElementById("holes");
  if (x.selectedIndex >= 0) {
    let option = document.createElement("option");
    option.text = "";
    let sel = x.options[x.selectedIndex];
    x.add(option, sel);
}
}

