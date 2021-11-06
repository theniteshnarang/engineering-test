import React, { useEffect } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Spacing } from "shared/styles/styles"
import { CenteredContainer } from "shared/components/centered-container/centered-container.component"
import { Person } from "shared/models/person"
import { useApi } from "shared/hooks/use-api"
import { StudentListTile } from "staff-app/components/student-list-tile/student-list-tile.component"
import { ActiveRollOverlay, ActiveRollAction } from "staff-app/components/active-roll-overlay/active-roll-overlay.component"
import { updateStudentsWithUnmarkType } from "staff-app/context/actions/staff-actions";
import { useStaff } from "staff-app/context/staff-provider"
import { toggleRollMode as changeRollMode, toggleByName, toggleByAscending} from "staff-app/context/actions/staff-actions"
import { ToolbarAction, Toolbar, ToolbarValue} from "staff-app/components/toolbar/toolbar.component"
import { getSearchedStudents, getSortedStudents, getFilteredStudents} from "staff-app/utils"

export const HomeBoardPage: React.FC = () => {
  const { state,dispatch} = useStaff()
  const {isRollMode, students, sortBy, searchedBy, rollState} = state
  const [getStudents, data, loadState] = useApi<{ students: Person[] }>({ url: "get-homeboard-students" })
  useEffect(() => {
    void getStudents()
  }, [getStudents])

  const onToolbarAction = (action: ToolbarAction, value ?: ToolbarValue) => {
    if (action === "roll") {
      dispatch(changeRollMode(true))
    }else if(action === "sort"){
      switch(value){
        case "firstName": return dispatch(toggleByName())
        case "ascending" : return dispatch(toggleByAscending())
        default : return ""
      }
    }
  }
  const onActiveRollAction = (action: ActiveRollAction) => {
    if (action === "exit") {
      dispatch(changeRollMode(false))
    }
  }

  useEffect(()=> {
    if(data){ // if data is not undefined
      dispatch(updateStudentsWithUnmarkType(data.students))
    }
  },[data, dispatch])


  

  const sortedStudents = getSortedStudents(students, sortBy)
  const searchedStudents = getSearchedStudents(sortedStudents, searchedBy)
  const filteredStudents = getFilteredStudents(searchedStudents, rollState)


  return (
    <>
      <S.PageContainer>
        <Toolbar onItemClick={onToolbarAction} sort={sortBy}/>

        {loadState === "loading" && (
          <CenteredContainer>
            <FontAwesomeIcon icon="spinner" size="2x" spin />
          </CenteredContainer>
        )}

        {loadState === "loaded" && (
          <>
            {
              filteredStudents.length > 0
              ?
              filteredStudents.map((s : Person) => ( <StudentListTile key={s.id} isRollMode={isRollMode} student={s} /> ))
              :
              <CenteredContainer>
                <div>No Student Found</div>
              </CenteredContainer>
            }
          </>
        )}

        {loadState === "error" && (
          <CenteredContainer>
            <div>Failed to load</div>
          </CenteredContainer>
        )}
      </S.PageContainer>
      <ActiveRollOverlay isActive={isRollMode} onItemClick={onActiveRollAction} />
    </>
  )
}


const S = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: ${Spacing.u4} auto 140px;
  `
}
