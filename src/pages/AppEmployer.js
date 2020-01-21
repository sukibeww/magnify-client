import React, { useContext } from 'react'
import { MediaContext } from '../context/mediaContext'
import EmployerContextProvider from '../context/employerContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from '../components/Employer/Landing/Landing'
import DesktopNavbar from '../components/Navbar/DesktopNavbar'
import DrawerNavbar from '../components/Navbar/DrawerNavbar'
import EmployerRegistration from '../components/Employer/Registration/EmployerRegistration'
import Vacancy from '../components/Employer/Vacancy/Vacancy'
import Delegates from '../components/Employer/Delegates/Delegates'
import Stripe from '../components/Employer/Stripe/stripe.js'
import { makeStyles } from '@material-ui/core'
import EmployerProfile from '../components/Employer/Profile/EmployerProfile'
import EmployerProfileEdit from '../components/Employer/Profile/EmployerProfileEdit'

const useStyles = makeStyles({
  container: {
    minHeight: "95vh",
    width: "100%",
    backgroundColor: "#ffffff",
    overflow: "scroll",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%236d6deb' fill-opacity='0.07'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `
  }
})
function AppEmployer(props) {
  const classes = useStyles()
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  return (
    <Router>
      {props.user ? (
        <Switch>
          <EmployerContextProvider
            user={props.user}
            setGlobalUser={props.setGlobalUser}
          >
            {media ? <DesktopNavbar /> : <DrawerNavbar user={props.user} />}
            <Route path="/landing" component={Landing}></Route>
            <Route path="/register" component={EmployerRegistration}></Route>
            <Route path="/vacancy" component={Vacancy}></Route>
            <Route path="/delegates" component={Delegates}></Route>
            <Route path="/employees" component={Stripe}></Route>
            <Route exact path="/profile" component={EmployerProfile}></Route>
            <Route
              exact
              path="/profile/edit"
              component={EmployerProfileEdit}
            ></Route>
          </EmployerContextProvider>
        </Switch>
      ) : null}
    </Router>
  )
}

export default AppEmployer
