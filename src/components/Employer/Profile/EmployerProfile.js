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
const CompanyName = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  margin-top: 3vh;
  font-weight: 400;
  color: #283593;
`
const Flexing = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  margin-top: 3vh;
  font-weight: 400;
  color: #283593;
`
const DisplayName = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
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
const CompanyAddress = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  margin-top: 3vh;
  font-weight: 400;
  color: #283593;
`
const Subheader = styled.h2`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  font-weight: 400;
  color: #ffa726;
  margin-top: 1.5vh;
`
const Categories = styled.h3`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  font-weight: 400;
  opacity: 0.5;
  color: #283593;
`
const Bio = styled.p`
  color: #283593;
  font-family: 'Roboto', sans-serif;
  margin-top: 1.5vh;
  font-weight: 300;
  text-align: center;
`
const AbsoluteWrapper = styled.div`
  justify-self: flex-start;
  align-self: flex-end;
  height: 0;
  overflow: visible;
`
const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: solid 3px #283593;
  border-radius: 10px;
  padding: 5vh 5vw;
  min-height: Auto;
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
          <UserWrapper>
            <Flexing>
              <Subheader>Company rep:</Subheader>
              <DisplayName>{user.displayName}</DisplayName>
            </Flexing>
            <Flexing>
              <Subheader>Email:</Subheader>
              <Email> {user.email}</Email>
            </Flexing>
          </UserWrapper>
          <Flexing>
            <Subheader>Company Name:</Subheader>
            <CompanyName>{user.companyName}</CompanyName>
          </Flexing>
          <Flexing>
            <Subheader>Company Address:</Subheader>
            <CompanyAddress>{user.address}</CompanyAddress>
          </Flexing>
          <Flexing>
            <Subheader>Company Bio:</Subheader>
            <CompanyAddress>{user.bio}</CompanyAddress>
          </Flexing>
          <Flexing>
            <Subheader>Credit Card Info</Subheader>
            <Bio>{user.creditCardInfo}</Bio>
          </Flexing>
        </ProfileWrapper>
      </>
    )
  } else {
    return <Redirect to="/" />
  }
}
export default EmployerProfile
