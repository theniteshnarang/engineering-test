import { PersonHelper, Person} from "shared/models/person"
export const getSearchedStudents = (students : Person[] , searchedBy : string) => {
    if(searchedBy === ""){
      return students
    }
    return students.filter((s) => PersonHelper.getFullName(s).toLowerCase().includes(searchedBy.toLowerCase()) ? s : false)
  }