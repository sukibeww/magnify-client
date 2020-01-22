import React from 'react'
import { Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SaveIcon from '@material-ui/icons/Save'

const SaveButton = props => {
  const useStyles = makeStyles(theme => ({
    button: {
      marginTop: '35px',
      boxShadow: 'none',
      borderRadius: '30px',
      '&:hover': {
        backgroundColor: '#ffa726'
      }
    },
    icon: {
      color: '#FFFFFF'
    }
  }))
  const classes = useStyles()
  return (
    <Fab
      color="secondary"
      data-testid="save-button"
      onClick={props.handleClick}
      className={classes.button}
    >
      <SaveIcon className={classes.icon} />
    </Fab>
  )
}

export default SaveButton
