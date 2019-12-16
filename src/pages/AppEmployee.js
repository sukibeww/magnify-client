import React from 'react'
import DesktopNavbar from '../components/Navbar/DesktopNavbar'
import DrawerNavbar from '../components/Navbar/DrawerNavbar'
import SurveyList from '../components/Survey/SurveyList'
import EmployeeContextProvider from '../context/employeeContext'

function AppEmployee(props) {
  const large = props.large
  return (
    <EmployeeContextProvider>
      {large && <DesktopNavbar />}
      {!large && <DrawerNavbar />}
      <SurveyList />
    </EmployeeContextProvider>
  )
}

export default AppEmployee
