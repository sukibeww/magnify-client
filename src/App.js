import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import AppEmployee from './pages/AppEmployee.js'

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
    </ThemeProvider>
  )
}

export default App
