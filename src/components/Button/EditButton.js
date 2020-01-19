import React from 'react'
import { Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import EditIcon from '@material-ui/icons/Edit';

const EditButton = props => {
  const useStyles = makeStyles(theme => ({
    button: {
      backgroundColor: '#DDE6F4',
      boxShadow: "5px 5px 8px rgb(163, 177, 198), -5px -5px 8px #FFFFFF",
      borderRadius: "30px",
      '&:hover':{
        backgroundColor: "#ffa726"
      }
    }
  }))
  const classes = useStyles()
  return (
    <Fab
      onClick={props.handleClick}
      className={classes.button}
      data-testid="edit-button"
    >
      <EditIcon color="primary"/>
    </Fab>
  )
}

export default EditButton
