import React, { useContext } from 'react'
import { MediaContext }  from '../../context/mediaContext'
import { EmployeeContext } from '../../context/employeeContext'
import styled from 'styled-components'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.media ? "10vh 20vw" : "5vh 5vw"};
  border: solid 3px #283593;
  border-radius: 10px;
  padding: 5vh 10vw;
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

const Category = styled.h2`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  margin-top: 3vh;
  font-weight: 400;
  color: #ffa726;
`

const Bio = styled.p`
  color: #283593;
  font-family: 'Roboto', sans-serif;
  margin-top: 0;
  font-weight: 300;
  text-align: center;
`

const EmployeeProfile = () => {
  const { media } = useContext(MediaContext);
  const { user } = useContext(EmployeeContext)
  console.log(user)
  return (
    <>
      <ProfileWrapper media={media}>
        <ProfilePicture src={user.photos} alt="profile-pic" media={media}/>
        <DisplayName>{user.displayName}</DisplayName>
        <Email>{user.email}</Email>
        <Category>Software Developer</Category>
        <Bio>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc volutpat sagittis integer nulla eleifend amet. Amet ultrices quis duis sit scelerisque feugiat vulputate etiam.</Bio>
      </ProfileWrapper>
    </>
  )
}

export default EmployeeProfile
