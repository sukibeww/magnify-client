import React, { useContext , useState} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { MediaContext }  from '../../../context/mediaContext'
import { EmployeeContext } from '../../../context/employeeContext'
import CategorySelect from '../CategorySelect/CategorySelect'
import BioTextbox from '../../TextBoxes/BioTextbox'
import SaveButton from '../../Button/SaveButton'
import CloseIcon from '@material-ui/icons/Close';
import GeneralButton from '../../Button/GeneralButton';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 0;
`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  width: ${props => (props.media ? '40vw' : '80vw')};
  padding: 30px;
  min-height: 50vh;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 1), -9px -9px 16px #ffffff;
`

const ProfilePicture = styled.img`
  border-radius: 100%;
  width: ${props => (props.media ? '25vh' : '25vh')};
  height: ${props => (props.media ? '25vh' : '25vh')};
  color: #283593;
  border: solid 10px #28359380;
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

const AbsoluteWrapper = styled.div`
  justify-self: flex-start;
  align-self: flex-end;
  height: 0;
  overflow: visible;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
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
        <ProfileContainer media={media ? media.toString() : null}>
          <AbsoluteWrapper>
            <Link to="/profile">
              <CloseIcon/>
            </Link>
          </AbsoluteWrapper>
          <ProfilePicture data-testid="profile-picture" src={user.photos} alt="profile-pic" media={media ? media.toString() : null}/>
          <DisplayName data-testid="profile-name">{user.displayName}</DisplayName>
          <Email data-testid="profile-email">{user.email}</Email>
          <CategorySelect current={user.category} handleChange={setCategory}></CategorySelect>
          <BioTextbox media={media ? media.toString() : null} current={user.bio} handleChange={setBiography}></BioTextbox>
          <GeneralButton label="Save" handleClick={handleClick}/>
        </ProfileContainer>
      </ProfileWrapper>
    </>
  )
}

export default EmployeeProfileEdit