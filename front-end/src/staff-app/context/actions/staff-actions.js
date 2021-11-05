import { STAFF } from "../action-group";

const storeStudents = (data) => ({
    type: STAFF.STORE_STUDENTS,
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



export { storeStudents, toggleRollMode, toggleByName, toggleByAscending, searchedByName }