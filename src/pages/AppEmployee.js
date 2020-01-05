import React, {useContext} from 'react'
import DesktopNavbar from '../components/Navbar/DesktopNavbar'
import DrawerNavbar from '../components/Navbar/DrawerNavbar'
import SurveyList from '../components/Survey/SurveyList'
import EmployeeContextProvider from '../context/employeeContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from '../components/Landing/Landing'
import EmployeeProfile from '../components/EmployeeProfile/EmployeeProfile'
import LoginPage from './LoginPage'
import { MediaContext }  from '../context/mediaContext'

function AppEmployee(props) {
  const mediaContext = useContext(MediaContext);
  const { media } = mediaContext;
  return (
    <EmployeeContextProvider>
      <Router>
        {media && <DesktopNavbar />}
        {!media && <DrawerNavbar />}
        <Switch>
          <Route exact path="/" render={(props) => <Landing />}></Route>
          <Route exact path="/survey" component={SurveyList}></Route>
          <Route exact path="/profile" component={EmployeeProfile}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
        </Switch>
      </Router>
    </EmployeeContextProvider>
  )
}

export default AppEmployee
