import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const SaveButton = props => {
  const useStyles = makeStyles(theme => ({
    button: {
      alignSelf: "flex-end",
      marginTop: "2vh",
      color: "#FFFFFF"
    }
  }))
  const classes = useStyles()
  return (
    <Button variant="contained" color="secondary" className={classes.button}>
      Apply
    </Button>
  )
}

export default SaveButton
