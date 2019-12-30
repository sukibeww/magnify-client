import React, { useContext , useState} from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { MediaContext }  from '../../context/mediaContext'
import { EmployeeContext } from '../../context/employeeContext'
import CategorySelect from '../CategorySelect/CategorySelect'
import BioTextbox from '../TextBoxes/BioTextbox'
import SaveButton from '../Button/SaveButton'


const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.media ? "10vh 25vw" : "5vh 5vw"};
  border: solid 3px #283593;
  border-radius: 10px;
  padding: 5vh 5vw;
`

const ProfilePicture = styled.img`
  border-radius: 100%;
  width: ${(props) => props.media ? "30vh" : "20vh"};
  height: ${(props) => props.media ? "30vh" : "20vh"};
  color: #283593;
`

const DisplayName = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  margin-top: 3vh;
  font-weight: 400;
  color: #283593;
`

const Email = styled.h3`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  font-weight: 300;
  color: #000000;
  opacity: 0.5;
`

const EmployeeProfileEdit = () => {
  const { media } = useContext(MediaContext);
  const { user, handleUpdate } = useContext(EmployeeContext)
  const [category, setCategory] = useState(user.category)
  const [biography, setBiography] = useState(user.bio)
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
      <ProfileWrapper media={media ? media.toString() : null}>
        <ProfilePicture src={user.photos} alt="profile-pic" media={media ? media.toString() : null}/>
        <DisplayName>{user.displayName}</DisplayName>
        <Email>{user.email}</Email>
        <CategorySelect current={user.category} handleChange={setCategory}></CategorySelect>
        <BioTextbox current={user.bio} handleChange={setBiography}></BioTextbox>
        <SaveButton handleClick={handleClick}/>
      </ProfileWrapper>
    </>
  )
}

export default EmployeeProfileEdit