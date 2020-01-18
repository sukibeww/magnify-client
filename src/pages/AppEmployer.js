import React, { useContext } from 'react'
import { MediaContext } from '../context/mediaContext'
import EmployerContextProvider from '../context/employerContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from '../components/Employer/Landing/Landing'
import DesktopNavbar from '../components/Navbar/DesktopNavbar'
import DrawerNavbar from '../components/Navbar/DrawerNavbar'
import EmployerRegistration from '../components/Employer/Registration/EmployerRegistration'
import EmployerProfile from '../components/Employer/Profile/EmployerProfile'
import EmployerProfileEdit from '../components/Employer/Profile/EmployerProfileEdit'

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
          {media ? <DesktopNavbar /> : <DrawerNavbar />}
          <Switch>
            <Route path="/landing" component={Landing}></Route>
            <Route path="/register" component={EmployerRegistration}></Route>
            <Route path="/landing" component={Landing}></Route>
            <Route exact path="/profile" component={EmployerProfile}></Route>
            <Route
              exactpath="/profile/edit"
              component={EmployerProfileEdit}
            ></Route>
          </Switch>
        </EmployerContextProvider>
      ) : null}
    </Router>
  )
}

export default AppEmployer
