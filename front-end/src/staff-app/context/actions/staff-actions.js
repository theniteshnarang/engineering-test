import { STAFF } from "../action-group";

const updateStudentsWithUnmarkType = (data) => ({
    type: STAFF.UPDATE_STUDENTS_WITH_UNMARK_TYPE,
    payload: { students: data }
})

const toggleRollMode = (mode) => ({
    type: STAFF.TOGGLE_ROLL_MODE,
    payload: { mode }
})

const toggleByName = () => ({
    type: STAFF.TOGGLE_BY_NAME
})

const toggleByAscending = () => ({
    type: STAFF.TOGGLE_BY_ASCENDING
})

const searchedByName = (value) => ({
    type: STAFF.SEARCHED_BY_NAME,
    payload: { value }
})


const updateStudentWithNewRole = ({ type, id }) => ({
    type: STAFF.UPDATE_STUDENT_WITH_NEW_ROLE,
    payload: { type, id }
})

const addRollState = (roll) => ({
    type: STAFF.ADD_ROLL_STATE,
    payload: { roll }
})



export { updateStudentsWithUnmarkType, toggleRollMode, toggleByName, toggleByAscending, searchedByName, updateStudentWithNewRole, addRollState }