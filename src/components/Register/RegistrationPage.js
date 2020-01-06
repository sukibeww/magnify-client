import React, { useContext , useState } from 'react'
import { MediaContext }  from '../../context/mediaContext'
import styled from 'styled-components'
import CategorySelect from '../CategorySelect/CategorySelect'
import SaveButton from '../Button/SaveButton'
import BioTextbox from '../TextBoxes/BioTextbox'
import { EmployeeContext } from '../../context/employeeContext'
import { useHistory } from "react-router-dom";

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
  background-color: #DDE6F4;
  width: 40vw;
  max-height: max-content;
  border-radius: 30px;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 1), -9px -9px 16px #FFFFFF;
  padding-bottom: 5vh;
`

const RegisterHeader = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 3.5em;
  margin: 3vh 0;
`

const RegistrationPage = (props) => {
  const mediaContext = useContext(MediaContext)
  const employeeContext = useContext(EmployeeContext)
  const [category, setCategory] = useState([])
  const [biography, setBiography] = useState('')
  const { media } = mediaContext;
  const { user, handleUpdate } = employeeContext
  let history = useHistory()
  const handleClick = () => {
    const editedUser = user
    if(category.length > 0){
      editedUser.category = category
      editedUser.bio = biography
      handleUpdate(editedUser)
      history.push('/profile')
    }
  }
  return (
    <>
      <RegisterationBackground>
        <RegistrationFormWrapper>
          <RegisterHeader>Register</RegisterHeader>
          <CategorySelect handleChange={setCategory}/>
          <BioTextbox handleChange={setBiography}/>
          <SaveButton handleClick={handleClick}/>
        </RegistrationFormWrapper>
      </RegisterationBackground>
    </>
  )
}

export default RegistrationPage