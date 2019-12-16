import React from 'react'
import DesktopNavbar from '../components/Navbar/DesktopNavbar'
import DrawerNavbar from '../components/Navbar/DrawerNavbar'
import SurveyList from '../components/Survey/SurveyList'
import EmployeeContextProvider from '../context/employeeContext'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Landing from '../components/Landing/Landing'

function AppEmployee(props) {
  const large = props.large
  return (
    <EmployeeContextProvider>
      <Router>
        {large && <DesktopNavbar />}
        {!large && <DrawerNavbar />}
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/survey" component={SurveyList}></Route>
        </Switch>
      </Router>
    </EmployeeContextProvider>
  )
}

export default AppEmployee
