import React, { createContext, useState, useEffect, useContext } from 'react'
import { linkedin_logout , isRegistered, updateEmployer , getDelegates, createVacancy, getVacanciesOfCompany, deleteVacancy } from './helper/employer'
import { useHistory } from 'react-router-dom'

export const EmployerContext = createContext()

const EmployerContextProvider = props => {
  let history = useHistory()
  // let history = props.history
  const [user, setUser] = useState(props.user)
  const [redirectToRegistration, setRedirectToRegistration] = useState(false)
  const [companyVacancies, setCompanyVacancies] = useState([])

  const handleLogout = () => {
    linkedin_logout()
    props.setGlobalUser(false)  
    history.push('/')
  }

  const handleUpdate = editedEmployer => {
    setUser(() => editedEmployer)
    updateEmployer({ editedEmployer: user })
  }

  const getAllDelegates = async () => {
    const result = await getDelegates()
    return result
  }

  const getAllVacanciesOfCompany = async (companyId) => {
    const result = await getVacanciesOfCompany(user._id)
    setCompanyVacancies(()=> result)
    return result
  }

  const createNewVacancy = async (newVacancy) => {
    const vacancy = await createVacancy({newVacancy: newVacancy})
    getAllVacanciesOfCompany()
    return vacancy
  }

  const deleteVacancyById = async (vacancyId) => {
    const response = await deleteVacancy(vacancyId)
    return response
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
      getAllVacanciesOfCompany()
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
        companyVacancies,
        handleLogout,
        setUser,
        handleUpdate,
        getAllDelegates,
        createNewVacancy,
        getAllVacanciesOfCompany,
        deleteVacancyById
      }}
    >
      {props.children}
    </EmployerContext.Provider>
  )
}

export const useEmployerContext = () => useContext(EmployerContext)

export default EmployerContextProvider
