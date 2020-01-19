import React, { createContext, useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {
  linkedin_logout,
  saveSurvey,
  fetchSubmitSurvey,
  isRegistered,
  updateEmployee
} from './helper/employee'

export const EmployeeContext = createContext()

const EmployeeContextProvider = props => {
  let history = useHistory()
  const [user, setUser] = useState(props.user)
  const [redirectToRegistration, setRedirectToRegistration] = useState(false)
  // let history = props.history
  const handleLogout = () => {
    linkedin_logout()
    props.setGlobalUser(false)
    history.push('/')
  }

  const handleUpdate = editedEmployee => {
    setUser(() => editedEmployee) 
    updateEmployee({ editedEmployee: user })
  }

  const submitSurvey = async survey => {
    const score = await fetchSubmitSurvey(survey)
    if (score) {
      setUser({ ...user, score })
    }
  }
  
  const updateCurrent = async (section, page) => {
    setUser((prevState) => {
      const newUser = prevState
      newUser.current.current_count = page
      newUser.current.current_section = section
      return newUser
    })
  }

  // useEffect(() => {
  //   // async function fetchData() {
  //   //   const user = await getProfile()
  //   //   if (user) setUser(user)
  //   // }
  //   // fetchData()
  //   if (user) setUser(props.user)
  // }, [])

  useEffect(() => {
    if (user) {
      const redirectAfterLogin = () => {
        setRedirectToRegistration(() => {
          return isRegistered(user)
        })
        if (user.email) {
          redirectToRegistration
            ? history.push('/landing')
            : history.push('/register')
        }
      }
      redirectAfterLogin()
    }
  }, [user, redirectToRegistration, history])

  return (
    <EmployeeContext.Provider
      value={{
        user,
        handleLogout,
        saveSurvey,
        submitSurvey,
        handleUpdate,
        updateCurrent
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  )
}

export const useEmployeeContext = () => useContext(EmployeeContext)

export default EmployeeContextProvider
