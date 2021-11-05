import { Person, Sort} from "shared/models/person";
export const getSortedStudents = (students : Person[], sortBy : Sort) => {
    let firstName;
    let secondName;
    const key = sortBy.firstName ? "first_name" : "last_name"
    return [...students].sort((a,b) => {
      if(sortBy.ascending){
        firstName = a[key]
        secondName = b[key]
      }else {
        firstName = b[key]
        secondName = a[key]
      }
      if(firstName > secondName){
        return 1
      } 
      if(firstName < secondName){
        return -1
      }
      return 0
    })
  }