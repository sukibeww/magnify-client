import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import AppEmployee from './pages/AppEmployee.js'
import MediaContextProvider from './context/mediaContext'

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
  return (
    <ThemeProvider theme={theme}>
      <MediaContextProvider>
        <AppEmployee />
      </MediaContextProvider>
    </ThemeProvider>
  )
}
export default App
