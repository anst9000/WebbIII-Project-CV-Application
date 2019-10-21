function getInputValue(element) {
  console.log(element)
  // Selecting the input element and get its value
  let inputVal = document.getElementById(element).value;

  // Displaying the value
  return inputVal
}

const courseList = document.getElementById('course-data')
const courseSingle = document.getElementById('course-data-single')
const allCourseBtn = document.getElementById('allCourse')
const singleCourseBtn = document.getElementById('singleCourse')
const createCourseBtn = document.getElementById('createCourse')
const updateCourseBtn = document.getElementById('updateCourse')
const deleteCourseBtn = document.getElementById('deleteCourse')

allCourseBtn.addEventListener('click', (event) => {
  fetchCourses()
})

singleCourseBtn.addEventListener('click', (event) => {
  let id = getInputValue('courseId')
  console.log('id is ' + id)
  fetchSingleCourse(id)
})

createCourseBtn.addEventListener('click', (event) => {
  var createForm = document.getElementById("createForm");
  let data = {}

  data.name = $('#courseCreateName').val()
  data.code = $('#courseCreateCode').val()
  data.progression = $('#courseCreateProgression').val()
  data.syllabus = $('#courseCreateSyllabus').val()
  console.log(data)
  createCourse(data)
})

updateCourseBtn.addEventListener('click', (event) => {
  var updateForm = document.getElementById("updateForm");
  // Extract Each Element Value
  let data = {}
  data.id = $('#courseUpdateId').val()
  data.name = $('#courseUpdateName').val()
  data.code = $('#courseUpdateCode').val()
  data.progression = $('#courseUpdateProgression').val()
  data.syllabus = $('#courseUpdateSyllabus').val()
  console.log(data)
  updateCourse(data)
})

deleteCourseBtn.addEventListener('click', (event) => {
  let data = {}
  data.id = getInputValue('courseDeleteId')

  deleteCourse(data)
})
