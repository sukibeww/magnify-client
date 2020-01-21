import React, { useContext } from 'react'
import DesktopNavbar from '../components/Navbar/DesktopNavbar'
import DrawerNavbar from '../components/Navbar/DrawerNavbar'
import SurveyList from '../components/Employee/Survey/SurveyList'
import EmployeeContextProvider from '../context/employeeContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from '../components/Employee/Landing/Landing'
import Result from '../components/Employee/Result/Result'
import EmployeeProfile from '../components/Employee/EmployeeProfile/EmployeeProfile'
import { MediaContext } from '../context/mediaContext'
import RegistrationPage from '../components/Employee/Register/RegistrationPage'
import EmployeeProfileEdit from '../components/Employee/EmployeeProfile/EmployeeProfileEdit'
import VacanciesList from '../components/Employee/VacancyList/VacancyList'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    minHeight: "95vh",
    width: "100vw",
    backgroundColor: "#ffffff",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%236d6deb' fill-opacity='0.07'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `
  }
})

function AppEmployee(props) {
  const mediaContext = useContext(MediaContext)
  const classes = useStyles()
  const { media } = mediaContext
  return (
    <Router>
      {props.user ? (
        <Switch>
          <EmployeeContextProvider
            user={props.user}
            setGlobalUser={props.setGlobalUser}
          >
            {media ? <DesktopNavbar /> : <DrawerNavbar />}
            <div className={classes.container}>
              <Route path="/landing"component={Landing}></Route>
              <Route path="/survey" component={SurveyList}></Route>
              <Route path="/result" component={Result}></Route>
              <Route exact path="/register" component={RegistrationPage}></Route>
              <Route exact path="/profile" component={EmployeeProfile}></Route>
              <Route
                exact
                path="/profile/edit"
                component={EmployeeProfileEdit}
              ></Route>
              <Route exact path="/vacancies" component={VacanciesList}></Route>
            </div>
          </EmployeeContextProvider>
        </Switch>
      ) : null}
    </Router>
  )
}

export default AppEmployee