import React from 'react'
import Fab from '@material-ui/core/Fab'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Link } from 'react-router-dom'

const SurveyButton = () => {
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