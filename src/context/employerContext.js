import React, { createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { linkedin_logout , isRegistered, updateEmployer , getDelegatesByCategory } from './helper/employer'

export const EmployerContext = createContext()

const EmployerContextProvider = props => {
  // const defaultUser = {
  //   email: undefined,
  //   displayName: '',
  //   photos: null,
  //   category: [],
  //   bio: undefined,
  //   survey: {},
  //   current: {}
  // }
  let history = useHistory()
  const [user, setUser] = useState(props.user)
  const [redirectToRegistration, setRedirectToRegistration] = useState(false)

  const handleLogout = () => {
    linkedin_logout()
    props.setGlobalUser(false)  
    history.push('/')
  }

  const handleUpdate = editedEmployer => {
    setUser(() => editedEmployer)
    updateEmployer({ editedEmployer: user })
  }

  const getDelegates = async (category) => {
    const result = await getDelegatesByCategory(category)
    return result
  }

  // useEffect(() => {
  //   // async function fetchData() {
  //   //   const user = await getProfile()
  //   //   if (user) setUser(user)
  //   // }
  //   // fetchData()
  //   if (user) setUser(props.user)
  // }, [])

  // useEffect(() => {
  //   if (user) {
  //     history.push('/landing')
  //   }
  // }, [user, history])

  useEffect(() => {
    if (user) {
      const redirectAfterLogin = () => {
        setRedirectToRegistration(() => {
          return isRegistered(user)
        })
        if (user) {
          redirectToRegistration
            ? history.push('/landing')
            : history.push('/register')
        }
      }
      redirectAfterLogin()
    }
  }, [user, redirectToRegistration, history])

  return (
    <EmployerContext.Provider
      value={{
        user,
        handleLogout,
        setUser,
        handleUpdate,
        getDelegates
      }}
    >
      {props.children}
    </EmployerContext.Provider>
  )
}

export default EmployerContextProvider
