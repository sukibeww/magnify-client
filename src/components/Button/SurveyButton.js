import React from 'react'
import Fab from '@material-ui/core/Fab'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

const SurveyButton = () => {
  const useStyles = makeStyles(theme => ({
    button: {
      backgroundColor: '#DDE6F4',
      marginTop: '35px',
      boxShadow: "5px 5px 8px rgb(163, 177, 198), -5px -5px 8px #FFFFFF",
      borderRadius: "30px",
      '&:hover':{
        backgroundColor: "#ffa726"
      }
    }
  }))
  const classes = useStyles()
  return(
    <Link to="/survey">
      <Fab aria-label="join-us" variant="extended" color="secondary">
        Do the survey
        <FavoriteIcon />
      </Fab>
    </Link>
  )
}

export default SurveyButton