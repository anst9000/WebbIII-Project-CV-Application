const preUrl = 'http://studenter.miun.se/~anst9000/writeable/dt173g/api/course/'

function fetchCourses() {
  let url = preUrl + 'read.php'
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data.records)
      courseList.innerHTML = ""
      let courses = data.records
      courses.forEach(function (course) {
        courseList.innerHTML += `
        <div class="card" data-id=${course.id} style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${course.id}. ${course.name}</h5>
            <p class="card-text">${course.code}</p>
            <p>progression = ${course.progression}</p>
            <p>syllabus = ${course.syllabus}</p>
          </div>
        </div>
        `
      })
    })
}

function fetchSingleCourse(id) {
  let url = preUrl + 'read_single.php?id=' + id

  const parcel = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch(url, parcel)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      courseSingle.innerHTML = ""
      let course = data

      courseSingle.innerHTML += `
        <div class="card" data-id=${course.id} style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${course.id}. ${course.name}</h5>
            <p class="card-text">${course.code}</p>
            <p>progression = ${course.progression}</p>
            <p>syllabus = ${course.syllabus}</p>
          </div>
        </div>
      `
    })
}

function createCourse(data) {
  let url = preUrl + 'create.php'

  const parcel = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  try {
    fetch(url, parcel)
      .then(resp => resp.json())
      .then(resp => {
        console.log('The course was succesfully created ' + JSON.stringify(resp))
      })
  } catch (error) {
    console.log('It was a problem with the create request: ', error.message);
  }
}


function updateCourse(data) {
  let url = preUrl + 'update.php'

  const parcel = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  try {
    fetch(url, parcel)
      .then(resp => resp.json())
      .then(resp => {
        console.log('The course was succesfully updated ' + JSON.stringify(resp))
      })
  } catch (error) {
    console.log('It was a problem with the update request: ', error.message);
  }
}

function deleteCourse(data) {
  let url = preUrl + 'delete.php'

  const parcel = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  try {
    fetch(url, parcel)
      .then(resp => resp.json())
      .then(resp => {
        console.log('It was succesfully deleted ' + JSON.stringify(resp))
      })
  } catch (error) {
    console.log('It was a problem with the delete request: ', error.message);
  }
}