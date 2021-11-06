import { STAFF } from "../action-group"


export const staffReducer = (initState, dispatch) => {

    const { sortBy, students } = initState
    switch (dispatch.type) {
        case STAFF.UPDATE_STUDENTS_WITH_UNMARK_TYPE: {
            return {
                ...initState,
                students: dispatch.payload.students.map(student => ({ ...student, type: "unmark" }))
            }
        }
        case STAFF.TOGGLE_ROLL_MODE: {
            return {
                ...initState,
                isRollMode: dispatch.payload.mode
            }
        }
        case STAFF.TOGGLE_BY_NAME: {
            return {
                ...initState,
                sortBy: {
                    ...sortBy,
                    firstName: !sortBy.firstName
                }
            }
        }
        case STAFF.TOGGLE_BY_ASCENDING: {
            return {
                ...initState,
                sortBy: {
                    ...sortBy,
                    ascending: !sortBy.ascending
                }
            }
        }
        case STAFF.SEARCHED_BY_NAME: {
            return {
                ...initState,
                searchedBy: dispatch.payload.value
            }
        }
        case STAFF.UPDATE_STUDENT_WITH_NEW_ROLE: {
            const { id, type } = dispatch.payload
            const updatedStudentList = students.map(student => student.id === id ? { ...student, type } : student)
            return {
                ...initState,
                students: updatedStudentList
            }
        }
        case STAFF.ADD_ROLL_STATE: {
            return {
                ...initState,
                rollState: dispatch.payload.roll
            }
        }
        default: {
            return initState
        }
    }
}