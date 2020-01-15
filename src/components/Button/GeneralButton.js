import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const GeneralButton = props => {
  const useStyles = makeStyles(theme => ({
    button: {
      marginTop: "30px",
      color: "#FFFFFF"
    }
  }))
  const classes = useStyles()
  return (
    <Button variant="contained" color="secondary" className={classes.button} onClick={props.handleClick}>
      {props.label}
    </Button>
  )
}

export default GeneralButton
