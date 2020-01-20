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
  margin: ${props => (props.media ? '10vh 25vw' : '5vh 5vw')};
  border: solid 3px #283593;
  border-radius: 10px;
  padding: 5vh 5vw;
  min-height: 70vh;
`
const ProfilePicture = styled.img`
  border-radius: 100%;
  width: ${props => (props.media ? '30vh' : '20vh')};
  height: ${props => (props.media ? '30vh' : '20vh')};
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
  text-align center;
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
          <AbsoluteWrapper>
            <Link to="/profile/edit">
              <EditButton />
            </Link>
          </AbsoluteWrapper>
          <ProfilePicture
            src="https://img.icons8.com/dusk/64/000000/city.png"
            alt="Company"
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
        </ProfileWrapper>
      </>
    )
  } else {
    return <Redirect to="/" />
  }
}
export default EmployerProfile
