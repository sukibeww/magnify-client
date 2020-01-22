import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { MediaContext } from '../../../context/mediaContext'
import { EmployerContext } from '../../../context/employerContext'
import SaveButton from '../../Button/GeneralButton'
import CloseIcon from '@material-ui/icons/Close'
import Textfield from '../../TextBoxes/Textfield'

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
  background-color: #ffffff;
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
const TextfieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
  min-width: 35vw;
`
const LittleHeader = styled.h2`
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  font-size: 2.5vh;
  margin: 0;
  font-weight: 40;
  color: #ffa726;
`
const Info = styled.h3`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-size: 0.9em;
  margin: 0;
  font-weight: 300;
  color: #000000;
  opacity: 0.5;
`

const Flexing = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  margin: 1.5vh;
  font-weight: 400;
  color: #283593;
`
const RepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: solid 3px #283593;
  border-radius: 10px;
  border-color: lightgray;
  padding: 3vh 3vw;
  min-height: auto;
  max-width: 90%;
  margin: 3vh;
`
const EmployerProfileEdit = () => {
  const { media } = useContext(MediaContext)
  const { user, handleUpdate } = useContext(EmployerContext)
  const [companyName, setCompanyName] = useState(user.companyName)
  const [companyAddress, setCompanyAddress] = useState(user.address)
  const [description, setDescription] = useState(user.companyDescription)
  console.log(user.companyName)
  let history = useHistory()
  const handleClick = () => {
    const editedUser = user
    editedUser.companyName = companyName
    editedUser.address = companyAddress
    editedUser.companyDescription = description

    handleUpdate(editedUser)
    history.push('/profile')
  }
  return (
    <>
      <ProfileWrapper media={media ? media.toString() : null}>
        <ProfileContainer>
          <AbsoluteWrapper>
            <Link to="/profile">
              <CloseIcon />
            </Link>
          </AbsoluteWrapper>
          <ProfilePicture
            media={media ? media.toString() : null}
            src={user.photos}
            alt="avatar"
          />
          <RepWrapper>
            <Flexing>
              <LittleHeader>Company rep:</LittleHeader>
              <Info>{user.displayName}</Info>
            </Flexing>
            <Flexing>
              <LittleHeader>Email:</LittleHeader>
              <Info> {user.email}</Info>
            </Flexing>
          </RepWrapper>
          <TextfieldWrapper>
            <Textfield
              label="Company Name"
              handleChange={setCompanyName}
              defaultValue={user.companyName}
              size="small"
            />
            <Textfield
              label="Company Address"
              handleChange={setCompanyAddress}
              defaultValue={user.address}
              size="small"
            />
            <Textfield
              label="Company Description"
              handleChange={setDescription}
              defaultValue={user.companyDescription}
              size="small"
            />
          </TextfieldWrapper>
          <SaveButton label={'Save'} handleClick={handleClick} />
        </ProfileContainer>
      </ProfileWrapper>
    </>
  )
}
export default EmployerProfileEdit
