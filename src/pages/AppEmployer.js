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
          {media ? <DesktopNavbar /> : <DrawerNavbar user={props.user} />}
          <Switch>
            <Route path="/landing" component={Landing}></Route>
            <Route path="/register" component={EmployerRegistration}></Route>
            <Route path="/vacancy" component={Vacancy}></Route>
            <Route path="/delegates" component={Delegates}></Route>
            <Route path="/employees" component={Stripe}></Route>
          </Switch>
        </EmployerContextProvider>
      ) : null}
    </Router>
  )
}

export default AppEmployer
