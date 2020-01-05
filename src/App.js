import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import AppEmployee from './pages/AppEmployee.js'
import AppEmployer from './pages/AppEmployer.js'
import VacanciesList from './components/Vacancy/VacanciesList/VacanciesList'
import VacancyInfo from './components/Vacancy/VacancyInfo/VacancyInfo'
import VacancyForm from './components/Vacancy/VacancyForm/VacancyForm'

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
      <AppEmployee large={large} />
      <AppEmployer large={large} />
      {/* ----------to be removed---------- */}
      {/* <VacanciesList />
      <VacancyInfo />
      <VacancyForm /> */}
      {/* ---------------------------------- */}
    </ThemeProvider>
  )
}

export default App
