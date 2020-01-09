import React, { createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  linkedin_login,
  linkedin_logout,
  getProfile,
  isRegistered,
  updateEmployer
} from './employerContext_helper'

export const EmployerContext = createContext()

const EmployerContextProvider = props => {
  const defaultEmployer = {
    email: undefined,
    displayName: '',
    photos: null,
    linkedin_id: '',
    companyName: '',
    address: '',
    creditCard: 0
  }
  let history = useHistory()
  const [employer, setEmployer] = useState(defaultEmployer)
  const [redirectToRegistration, setRedirectToRegistration] = useState(false)
  const employerLogin = () => {
    linkedin_login()
  }

  const handleLogout = () => {
    linkedin_logout()
    setEmployer(defaultEmployer)
  }

  const handleUpdate = editedEmployee => {
    setEmployer(() => editedEmployee)
    updateEmployer({ editedEmployee: employer })
  }


  useEffect(() => {
    async function fetchData() {
      const user = await getProfile()
      if (user) setEmployer(user)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const redirectAfterLogin = () => {
      setRedirectToRegistration(() => {
        return isRegistered(employer)
      })
      if (employer.companyName) {
        redirectToRegistration ? history.push('/') : history.push('/register')
      }
    }
    redirectAfterLogin()
  }, [employer, redirectToRegistration, history])

  
  return (
    <EmployerContext.Provider
      value={{
        employer,
        employerLogin,
        handleLogout,
        handleUpdate
      }}
    >
      {props.children}
    </EmployerContext.Provider>
  )
}

export default EmployerContextProvider
