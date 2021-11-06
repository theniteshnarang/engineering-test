import { Person } from "shared/models/person"
export const getFilteredStudents = (students : Person[], type: string) => {
    if(type === "" || type === "all"){
      return students
    }
    return students.filter(student => student.type === type)
  }