import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    border: 'none'
  }
}))

const Textfield = props => {
  const classes = useStyles()
  const handleChange = event => {
    props.handleChange(event.target.value)
  }
  return (
    <TextField
      className={classes.formControl}
      label={props.label}
      onChange={handleChange}
      id="outlined-size-normal"
      variant="outlined"
      fullWidth={true}
      defaultValue={props.defaultValue}
      size={props.size}
    />
  )
}

export default Textfield
