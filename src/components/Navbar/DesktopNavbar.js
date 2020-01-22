import React, { useContext } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { EmployeeContext } from '../../context/employeeContext'
import { Link } from 'react-router-dom'
import { EmployerContext } from '../../context/employerContext'
import StarsIcon from '@material-ui/icons/Stars'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    color: 'white',
    textDecoration: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navWrapper: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  navButton: {
    marginRight: theme.spacing(8)
  }
}))

const DesktopNavbar = () => {
  const employeeContext = useContext(EmployeeContext)
  const employerContext = useContext(EmployerContext)
  const classes = useStyles()
  useTheme()
  if (employeeContext) {
    const { handleLogout } = employeeContext
    return (
      <>
        <AppBar
          position="static"
          className={classes.root}
          data-testid="employee-navbar"
        >
          <Toolbar>
            <Link
              to="/landing"
              style={{
                textDecoration: 'none',
                color: 'white'
              }}
            >
              <Typography variant="h6" className={classes.title}>
                Magnify
              </Typography>
            </Link>
            <div className={classes.navWrapper}>
                <Link
                  className={classes.navButton}
                  data-testid="navigation-survey"
                  to="/survey"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Button color="inherit">Survey</Button>
                </Link>
                <Link
                  className={classes.navButton}
                  data-testid="navigation-result"
                  to="/result"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Button color="inherit">Result</Button>
                </Link>
                <Link
                  className={classes.navButton}
                  data-testid="navigation-vacancies"
                  to="/vacancies"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Button color="inherit">Vacancy</Button>
                </Link>
              <Link to="/notifications" style={{ color: 'white' }}>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <NotificationsIcon />
                </IconButton>
              </Link>
              <Link to="/profile" style={{ color: 'white' }}>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Link>
              <Button onClick={handleLogout} color="inherit">
                Log out
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </>
    )
  } else {
    const { handleLogout } = employerContext
    return (
      <>
        <AppBar
          position="static"
          className={classes.root}
          data-testid="employer-navbar"
        >
          <Toolbar>
            <Link
              to="/landing"
              style={{
                textDecoration: 'none',
                color: 'white'
              }}
            >
              <Typography variant="h6" className={classes.title}>
                Magnify
              </Typography>
            </Link>
            <div className={classes.navWrapper}>
                <Link
                  data-testid="navigation-companyvacancies"
                  className={classes.navButton}
                  to="/vacancy"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Button color="inherit">Vacancy</Button>
                </Link>
                <Link
                  data-testid="navigation-delegates"
                  to="/delegates"
                  className={classes.navButton}
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Button color="inherit">Delegates</Button>
                </Link>
                <Link
                  data-testid="navigation-premium"
                  className={classes.navButton}
                  to="/premium"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <StarsIcon />
                  <Button color="inherit">Become Premium</Button>
                </Link>
              <Link to="/notifications" style={{ color: 'white' }}>
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge variant="dot" color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Link>

              <Link to="/profile" style={{ color: 'white' }}>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Link>
              <Button onClick={handleLogout} color="inherit">
                Log out
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </>
    )
  }
}

export default DesktopNavbar
