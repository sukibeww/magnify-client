import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar/Navbar'
import { orange } from '@material-ui/core/colors';


function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#651fff',
      },
      secondary: orange,
      viewPort: 'small'
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
