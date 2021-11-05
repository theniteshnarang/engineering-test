import { STAFF } from "../action-group"


export const staffReducer = (initState, dispatch) => {

    const { students, sortBy } = initState
    switch (dispatch.type) {
        case STAFF.STORE_STUDENTS: {
            return {
                ...initState,
                students: students.concat(dispatch.payload.students)
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
        default: {
            return initState
        }
    }
}