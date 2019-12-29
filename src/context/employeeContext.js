import React, { createContext, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import {
  linkedin_login,
  linkedin_logout,
  getProfile,
  saveSurvey,
  isRegistered,
  updateEmployee
} from './employeeContext_helper'

export const EmployeeContext = createContext()

const EmployeeContextProvider = props => {
  const defaultUser = {
    email: undefined,
    displayName: '',
    photos: null,
    category: [],
    bio: undefined,
    survey: {},
    current: {}
  }
  let history = useHistory()
  const [user, setUser] = useState(defaultUser)
  const [redirectToRegistration, setRedirectToRegistration] = useState(false)
  const handleLogin = () => {
    linkedin_login()
  }

  const handleLogout = () => {
    linkedin_logout()
    setUser(defaultUser)
  }

  const handleUpdate = (editedEmployee) => {
    setUser(()=> editedEmployee)
    updateEmployee({editedEmployee : user})
  }

  useEffect(() => {
    async function fetchData() {
      const user = await getProfile()
      if (user) setUser(user)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const redirectAfterLogin = () => {
      setRedirectToRegistration(() => {
        return isRegistered(user)
      })
      redirectToRegistration ? history.push('/') :  history.push('/register')
    }
    redirectAfterLogin()
  }, [user, redirectToRegistration, history])

  return (
    <EmployeeContext.Provider
      value={{ user, handleLogin, handleLogout, saveSurvey , handleUpdate}}
    >
      {props.children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeContextProvider
