import React from 'react'
import DesktopNavbar from '../components/Navbar/DesktopNavbar'
import DrawerNavbar from '../components/Navbar/DrawerNavbar'
import EmployeeContextProvider from '../context/employeeContext'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import VacanciesList from '../components/Vacancy/VacanciesList/VacanciesList'
import VacancyInfo from '../components/Vacancy/VacancyInfo/VacancyInfo'
import VacancyForm from '../components/Vacancy/VacancyForm/VacancyForm'

function AppEmployee(props) {
  const large = props.large
  return (
    <EmployeeContextProvider>
      <Router>
        {/* {large && <DesktopNavbar />}
        {!large && <DrawerNavbar />} */}
        <Switch>
          <Route exact path="/vacancies" component={VacanciesList}></Route>
          <Route exact path="/vacancyInfo" component={VacancyInfo}></Route>
          <Route exact path="/vacancyForm" component={VacancyForm}></Route>
        </Switch>
      </Router>
    </EmployeeContextProvider>
  )
}

export default AppEmployee
