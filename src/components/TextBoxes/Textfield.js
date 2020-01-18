import React from 'react'
import TextField from '@material-ui/core/TextField'

const Textfield = props => {
  const handleChange = event => {
    props.handleChange(event.target.value)
  }
  return (
    <TextField
      label={props.label}
      onChange={handleChange}
      id="outlined-size-normal"
      variant="outlined"
      fullWidth="true"
      defaultValue={props.defaultValue}
    />
  )
}

export default Textfield
