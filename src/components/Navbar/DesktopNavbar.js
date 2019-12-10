import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton, Badge, useMediaQuery} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navButton : {
    marginRight: theme.spacing(8)
  }
}));

const DesktopNavbar = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  const theme = useTheme();
  const handleLogin = () => {
    setAuth(()=> true)
  }
  const handleLogout = () => {
    setAuth(()=> false)
  }
  return(
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Magnify
          </Typography>
          {!auth && <Button onClick={handleLogin} color="inherit">Login</Button> }
          {auth && (
            <div>
              <Badge variant="dot" color="secondary" className={classes.navButton}>
                <Button color="inherit">
                  Survey
                </Button>
              </Badge>
              <Badge variant="dot" color="secondary" className={classes.navButton}>
                <Button color="inherit">
                  Result
                </Button>
              </Badge>
              <Badge variant="dot" color="secondary" className={classes.navButton}>
                <Button color="inherit">
                  Interview
                </Button>
              </Badge>
              <Badge variant="dot" color="secondary" className={classes.navButton}>
                <Button color="inherit">
                  Vacancy
                </Button>
              </Badge>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge variant="dot" color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Button onClick={handleLogout} color="inherit">Log out</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default DesktopNavbar;