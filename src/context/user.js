import React, { createContext, useState, useEffect } from 'react'
import { linkedin_login, linkedin_logout, getProfile } from './user_helper'
import { logicalExpression } from '@babel/types'

export const UserContext = createContext()

const UserContextProvider = props => {
  const [user, setUser] = useState({
    email: undefined,
    displayName: '',
    photos: null,
    category: []
  })

  useEffect(() => {
    async function getdata  () => {
      const user = await getProfile()
      console.log(user)
      if (user) setUser(user)
    }
  }, [])

  return (
    <UserContext.Provider
      value={{ user, setUser, linkedin_login, linkedin_logout }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
