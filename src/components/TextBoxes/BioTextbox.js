import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    border: 'none'
  }
}))

const BioTextbox = props => {
  const classes = useStyles()
  const handleChange = event => {
    props.handleChange(event.target.value)
  }
  return (
    <>
      <TextField
        data-testid="profile-biotextbox"
        className={classes.formControl}
        id="outlined-multiline-static"
        label={props.label}
        defaultValue={props.current}
        fullWidth={true}
        multiline
        rows="10"
        variant="outlined"
        onChange={handleChange}
      />
    </>
  )
}

export default BioTextbox
