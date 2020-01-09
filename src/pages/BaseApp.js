import React, { useContext, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DesktopNavbar from '../components/Navbar/DesktopNavbar'
import DrawerNavbar from '../components/Navbar/DrawerNavbar'
import LoginPage from '../components/Login/LoginPage'
import EmployerContextProvider from '../context/employerContext'
import EmployeeContextProvider from '../context/employeeContext'
import Landing from '../components/Landing/Landing'
import { MediaContext } from '../context/mediaContext'
import SurveyList from '../components/Survey/SurveyList'
import Result from '../components/Result/Result'
import EmployeeProfile from '../components/EmployeeProfile/EmployeeProfile'
import RegistrationPage from '../components/Register/RegistrationPage'
import EmployeeProfileEdit from '../components/EmployeeProfile/EmployeeProfileEdit'

const  BaseApp = (props) => {
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  const [ userType, setUserType ] = useState("Employee") 
  return (
    <Router>
      <Switch>
        <EmployeeContextProvider>
          <EmployerContextProvider>
            {media ? <DesktopNavbar /> : <DrawerNavbar />}  
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/" component={Landing}></Route>
            {(userType === "Employee") ? 
              <> 
                <Route exact path="/survey" component={SurveyList}></Route>
                <Route exact path="/profile" component={EmployeeProfile}></Route>
                <Route exact path="/result" component={Result}></Route>
                <Route
                  exact
                  path="/profile/edit"
                  component={EmployeeProfileEdit}
                ></Route>
                <Route exact path="/register" component={RegistrationPage}></Route>
              </>
              :
              <>
                <h1>Employer</h1>
                <Route exact path="/survey" component={SurveyList}></Route>
                <Route exact path="/profile" component={EmployeeProfile}></Route>
                <Route exact path="/result" component={Result}></Route>
                <Route
                  exact
                  path="/profile/edit"
                  component={EmployeeProfileEdit}
                ></Route>
                <Route exact path="/register" component={RegistrationPage}></Route>
              </>
            }
          </EmployerContextProvider>
        </EmployeeContextProvider>
      </Switch>
    </Router>
  )
}

export default BaseApp
