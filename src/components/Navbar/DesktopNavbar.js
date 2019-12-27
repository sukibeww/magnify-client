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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navButton: {
    marginRight: theme.spacing(8)
  }
}))

const DesktopNavbar = () => {
  const employeeContext = useContext(EmployeeContext)
  const { user, handleLogin, handleLogout } = employeeContext

  const classes = useStyles()
  useTheme()

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'white',
              flexGrow: 1
            }}
          >
            <Typography variant="h6" className={classes.title}>
              Magnify
            </Typography>
          </Link>
          {!user.email && (
            <Button onClick={handleLogin} color="inherit">
              Login
            </Button>
          )}
          {user.email && (
            <div>
              <Badge
                variant="dot"
                color="secondary"
                className={classes.navButton}
              >
                <Button color="inherit">Survey</Button>
              </Badge>
              <Badge
                variant="dot"
                color="secondary"
                className={classes.navButton}
              >
                <Button color="inherit">Result</Button>
              </Badge>
              <Badge
                variant="dot"
                color="secondary"
                className={classes.navButton}
              >
                <Button color="inherit">Interview</Button>
              </Badge>
              <Badge
                variant="dot"
                color="secondary"
                className={classes.navButton}
              >
                <Button color="inherit">Vacancy</Button>
              </Badge>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge variant="dot" color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Link to="/profile" style={{color: "white"}}>
                <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit">
                <AccountCircle />
              </IconButton>
              </Link>
              <Button onClick={handleLogout} color="inherit">
                Log out
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default DesktopNavbar
