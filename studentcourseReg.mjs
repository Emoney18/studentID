import StudentReg from './studentReg.mjs'

class StudentCourseReg extends StudentReg {
  constructor(semesters, year, studentid, faculty, department, course) {
    super(semesters, year, studentid, faculty, department)
    this.course = course
  }
  course = []
  totalCourse() {
    return this.course.length
  }
  totalCompulsory() {
    return this.course.filter((course) => course.type === 1).length
  }
  totalElective() {
    return this.course.filter((course) => course.type === 0).length
  }
}

export default StudentCourseReg
