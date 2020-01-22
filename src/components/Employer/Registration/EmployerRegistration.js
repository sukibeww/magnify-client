import React, { useContext , useState } from 'react'
import { MediaContext }  from '../../../context/mediaContext'
import styled from 'styled-components'
import { EmployerContext } from '../../../context/employerContext'
import { useHistory } from "react-router-dom"
import Textfield from '../../TextBoxes/Textfield'
import BioTextbox from '../../TextBoxes/BioTextbox'
import GeneralButton from '../../Button/GeneralButton'

const RegisterationBackground = styled.div`
  height: 90vh;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RegistrationFormWrapper = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  height: auto;
  min-width: 320px;
  max-width: max-content;
  padding: 3vw;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 1), -9px -9px 16px #FFFFFF;
`

const RegisterHeader = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 2.5em;
  margin: 2vh 0;
`
const EmployerRegistration = (props) => {
  const mediaContext = useContext(MediaContext)
  const employerContext = useContext(EmployerContext)
  const [companyName, setCompanyName] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const { media } = mediaContext;
  const { user, handleUpdate } = employerContext
  let history = useHistory()
  const handleClick = () => {
    const editedUser = user
    if(companyName.length && address.length){
      editedUser.companyName = companyName
      editedUser.address = address
      editedUser.description = description
      handleUpdate(editedUser)
      history.push('/profile')
    }
  }
  return (
    <>
      <RegisterationBackground>
        <RegistrationFormWrapper media={media ? media.toString() : null}>
          <RegisterHeader>Create your account</RegisterHeader>
          <Textfield label="Company Name" handleChange={setCompanyName}/>
          <Textfield label="Address" handleChange={setAddress}/>
          <BioTextbox handleChange={setDescription} label="Company description"/>
          <GeneralButton label="Create Account" handleClick={handleClick}/>
        </RegistrationFormWrapper>
      </RegisterationBackground>
    </>
  )
}

export default EmployerRegistration