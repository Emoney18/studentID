import StudentCourseReg from './studentcourseReg.mjs'
import Course from './course.mjs'

let course1 = new Course(
  '124',
  'Intro to Biology',
  'BIO 124',
  '3',
  'Dr Ajayi',
  1
)

let course2 = new Course('125', 'Zoology', 'BIO 125', '3', 'Mr Lawani', 1)

let course3 = new Course(
  '126',
  'Animal Science',
  'Bio 126',
  '2',
  'prof Wale',
  0
)

let array = [course1, course2, course3]
let studentCourse1 = new StudentCourseReg(
  'first',
  '2020',
  'BIO/2020/001',
  'Faculty of Science',
  'Biology',
  array
)

console.log(studentCourse1.totalCourse())
console.log(studentCourse1.totalCompulsory())
console.log(studentCourse1.totalElective())
