import Person from "./person.mjs";

class Student extends Person {
  constructor(firstname, lastname, gender, studentid) {
    super(firstname, lastname, gender);
    this.studentId = studentid;
  }
  studentid = "";
}

export default Student;
