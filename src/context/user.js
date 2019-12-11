import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = props => {
  const [user, setUser] = useState({
    email: undefined,
    displayName: '',
    photos: null,
    category: []
  })

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  )
}

export default UserContextProvider
