import React, { useContext } from 'react'
import { MediaContext }  from '../../context/mediaContext'

const EmployeeProfile = () => {
  const mediaContext = useContext(MediaContext);
  const { media } = mediaContext;
  return (
    <>
      <h1>Profile</h1>
    </>
  )
}

export default EmployeeProfile
