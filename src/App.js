import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import DesktopNavbar from './components/Navbar/DesktopNavbar'
import DrawerNavbar from './components/Navbar/DrawerNavbar'
import SurveyA from './components/SurveyA/SurveyA'
import SurveyB from './components/SurveyB/SurveyB'
import SurveyC from './components/SurveyC/SurveyC'
import SurveyD from './components/SurveyD/SurveyD'
import { useMediaQuery } from '@material-ui/core'
import UserContextProvider from './context/user'

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#283593'
      },
      secondary: {
        main: '#ffa726'
      },
      viewPort: 'small'
    }
  })
  const large = useMediaQuery(theme.breakpoints.up('lg'))
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        {large && <DesktopNavbar />}
        {!large && <DrawerNavbar />}
        <SurveyA />
        {/* <SurveyB />
      <SurveyC />
      <SurveyD /> */}
      </UserContextProvider>
    </ThemeProvider>
  )
}

export default App
