import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MediaContext } from '../../../context/mediaContext'
import { EmployerContext } from '../../../context/employerContext'
import styled from 'styled-components'
import EditButton from '../../Button/EditButton'

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
`
const LittleHeader = styled.h2`
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  font-size: 0.7em;
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
  margin: 0;
  margin-top: 3vh;
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

const EmployerProfile = () => {
  const { media } = useContext(MediaContext)
  const { user } = useContext(EmployerContext)
  if (user.email) {
    return (
      <>
        <ProfileWrapper media={media ? media.toString() : null}>
          <ProfileContainer>
            <AbsoluteWrapper>
              <Link to="/profile/edit">
                <EditButton />
              </Link>
            </AbsoluteWrapper>
            <ProfilePicture
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
            <Flexing>
              <LittleHeader>Company Name:</LittleHeader>
              <Info>{user.companyName}</Info>
            </Flexing>
            <Flexing>
              <LittleHeader>Company Address:</LittleHeader>
              <Info>{user.address}</Info>
            </Flexing>
            <Flexing>
              <LittleHeader>Company Description:</LittleHeader>
              <Info>{user.companyDescription}</Info>
            </Flexing>
            <Flexing>
              <LittleHeader>Credit Card Info</LittleHeader>
              <Info>{user.creditCardInfo}</Info>
            </Flexing>
          </ProfileContainer>
        </ProfileWrapper>
      </>
    )
  } else {
    return <Redirect to="/" />
  }
}
export default EmployerProfile
