import React from 'react'
import styled from "styled-components"
import { FormControlLabel, FormGroup, Switch} from "@material-ui/core"
import { Search } from '../search/search.component'
import Button from "@material-ui/core/ButtonBase"
import {BorderRadius, FontWeight, Spacing} from "shared/styles/styles"
import { Sort } from 'shared/models/person'
import { Colors } from "shared/styles/colors"
export type ToolbarAction = "roll" | "sort"
export type ToolbarValue = "firstName" | "ascending"
interface ToolbarProps {
  onItemClick: (action: ToolbarAction, value ?: ToolbarValue) => void
  sort : Sort
}

export const Toolbar: React.FC<ToolbarProps> = (props) => {
  const { onItemClick, sort} = props
  const {firstName, ascending} = sort
  return (
    <S.ToolbarContainer>
      <FormGroup>
        <FormControlLabel control={<Switch checked={firstName} onChange={()=> onItemClick("sort" , "firstName")} color="primary" inputProps={{ 'aria-label': 'controlled' }}/>} label= {firstName ? "First Name" : "Last Name "}/>
        <FormControlLabel control={<Switch checked={ascending} onChange={()=> onItemClick("sort" , "ascending")} color="primary" inputProps={{ 'aria-label': 'controlled' }}/>} label= {ascending ? "Ascending" : "Descending"} />
      </FormGroup>
      <Search />
      <S.Button onClick={() => onItemClick("roll")}>Start Roll</S.Button>
    </S.ToolbarContainer>
  )
}


const S = {
    ToolbarContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-color: ${Colors.blue.base};
    padding: 6px 14px;
    font-weight: ${FontWeight.strong};
    border-radius: ${BorderRadius.default};
  `,
  Button: styled(Button)`
  && {
    padding: ${Spacing.u2};
    font-weight: ${FontWeight.strong};
    border-radius: ${BorderRadius.default};
  }
`,
}