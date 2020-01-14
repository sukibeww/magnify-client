import React, { useContext , useState } from 'react'
import { MediaContext }  from '../../../context/mediaContext'
import styled from 'styled-components'
import SaveButton from '../../Button/SaveButton'
import { EmployerContext } from '../../../context/employerContext'
import { useHistory } from "react-router-dom"
import Textfield from '../../TextBoxes/Textfield'

const RegisterationBackground = styled.div`
  height: 100vh;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: ${(props)=> props.media ? "0 20vw" : "0 5vw"};
  background-color: #EAEFF7;
`

const RegistrationFormWrapper = styled.div`
  border: solid #283593;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5vh auto;
  border-radius: 10px;
  height: auto;
  width: 70%;
  min-width: 320px;
  max-width: max-content;
  min-height: 50vh;
  padding: 5vh 3vw;
`

const RegisterHeader = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 3em;
  margin: 3vh 0;
`

const EmployerRegistration = (props) => {
  const mediaContext = useContext(MediaContext)
  const employerContext = useContext(EmployerContext)
  const [companyName, setCompanyName] = useState('')
  const [address, setAddress] = useState('')
  const { media } = mediaContext;
  const { user, handleUpdate } = employerContext
  let history = useHistory()
  const handleClick = () => {
    const editedUser = user
    console.log(companyName)
    console.log(address)
    if(companyName.length && address.length){
      editedUser.companyName = companyName
      editedUser.address = address
      handleUpdate(editedUser)
      history.push('/profile')
    }
  }
  return (
    <>
      <RegisterationBackground>
        <RegistrationFormWrapper media={media ? media.toString() : null}>
          <RegisterHeader>Almost there...</RegisterHeader>
          <Textfield label="Company Name" handleChange={setCompanyName}/>
          <Textfield label="Address" handleChange={setAddress}/>
          <SaveButton handleClick={handleClick}/>
        </RegistrationFormWrapper>
      </RegisterationBackground>
    </>
  )
}

export default EmployerRegistration