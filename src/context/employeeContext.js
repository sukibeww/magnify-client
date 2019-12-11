import React, { createContext, useState, useEffect } from 'react'
import {
  linkedin_login,
  linkedin_logout,
  getProfile
} from './employeeContext_helper'

export const EmployeeContext = createContext()

const EmployeeContextProvider = props => {
  const defaultUser = {
    email: undefined,
    displayName: '',
    photos: null,
    category: []
  }
  const [user, setUser] = useState(defaultUser)

  const handleLogin = () => {
    linkedin_login()
  }
  const handleLogout = () => {
    linkedin_logout()
    setUser(defaultUser)
  }

  useEffect(() => {
    async function fetchData() {
      const user = await getProfile()
      if (user) {
        setUser(user)
      }
    }
    fetchData()
  }, [])

  return (
    <EmployeeContext.Provider value={{ user, handleLogin, handleLogout }}>
      {props.children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeContextProvider