import { Person } from "shared/models/person"
import { RolllStateType } from "shared/models/roll"
export const getStudentsCountByType = (students : Person [], type : RolllStateType) : number => students.filter((student: Person)=> student.type === type).length