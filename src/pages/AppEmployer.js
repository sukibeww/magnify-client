import React, { useContext } from 'react'
import { MediaContext } from '../context/mediaContext'
import EmployerContextProvider from '../context/employerContext'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Landing from '../components/Employer/landing.js'

function AppEmployer(props) {
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  return (
    <Router>
      {props.user ? (
        <EmployerContextProvider
          user={props.user}
          setGlobalUser={props.setGlobalUser}
        >
          <Switch>
            <Route path="/landing" component={Landing}></Route>
          </Switch>
        </EmployerContextProvider>
      ) : null}
    </Router>
  )
}

export default AppEmployer
