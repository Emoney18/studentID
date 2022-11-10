import Academic from "./academic.mjs";

class StudentReg extends Academic {
  constructor(semester, year, studentid, faculty, department) {
    super(semester, year, studentid, faculty, department);

    this.studentid = studentid;
    this.faculty = faculty;
    this.department = department;
  }
  StudentId = "";
  Faculty = "";
  Department = "";
}
export default StudentReg;
