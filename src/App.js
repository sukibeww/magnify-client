import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DesktopNavbar from './components/Navbar/DesktopNavbar'
import DrawerNavbar from './components/Navbar/DrawerNavbar'
import { orange } from '@material-ui/core/colors';
import { useMediaQuery } from '@material-ui/core'


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
  const large = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <ThemeProvider theme={theme}>
      { large && <DesktopNavbar /> } 
      { !large && <DrawerNavbar /> }
    </ThemeProvider>
  );
}

export default App;
