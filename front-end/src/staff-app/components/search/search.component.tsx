import { Box, TextField } from '@material-ui/core'
import { Colors } from 'shared/styles/colors'
import React from 'react'
import { useStaff } from 'staff-app/context/staff-provider'
import { searchedByName } from 'staff-app/context/actions/staff-actions'

export const Search = () => {
    const { dispatch} = useStaff()


    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
        dispatch(searchedByName(e.target.value))
    }
    
    return (
        <Box component="form">
            <TextField
                inputProps={{style : { backgroundColor : Colors.neutral.lighter}}}
                size="small"
                variant = "filled"
                label="Search"
                color="primary"
                placeholder="John Morris"
                onChange={handleChange}
            />
        </Box>
    )
}