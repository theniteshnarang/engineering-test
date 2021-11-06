import React from "react"
import { RolllStateType } from "shared/models/roll"
import { RollStateIcon } from "staff-app/components/roll-state/roll-state-icon.component"
import {Person} from "shared/models/person"
import {useStaff} from '../../context/staff-provider'
import {updateStudentWithNewRole} from '../../context/actions/staff-actions'

interface Props {
  initialState?: RolllStateType
  size?: number
  onStateChange?: (newState: RolllStateType) => void
  student : Person
}
export const RollStateSwitcher: React.FC<Props> = ({ size = 40, student}) => {
  const {state,dispatch} = useStaff()
  const {students} = state

  const rollState = students.find((s: Person)=> s.type === student.type).type

  const nextState = () => {
    const states: RolllStateType[] = ["present", "late", "absent"]
    if (rollState === "unmark" || rollState === "absent") return states[0]
    const matchingIndex = states.findIndex((s) => s === rollState)
    return matchingIndex > -1 ? states[matchingIndex + 1] : states[0]
  }
 
  const onClick = () => {
    const next = nextState()
    dispatch(updateStudentWithNewRole({type: next, id: student.id}))
  }

  return <RollStateIcon type={rollState} size={size} onClick={onClick} />
}
