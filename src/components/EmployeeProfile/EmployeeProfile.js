import React, { useContext } from 'react'
import { MediaContext }  from '../../context/mediaContext'
import { EmployeeContext } from '../../context/employeeContext'
import styled from 'styled-components'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.media ? "10vh 25vw" : "5vh 5vw"};
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

const EmployeeProfile = () => {
  const { media } = useContext(MediaContext);
  const { user } = useContext(EmployeeContext)
  console.log(user)
  return (
    <>
      <ProfileWrapper media={media ? media.toString() : null}>
        <ProfilePicture src={user.photos} alt="profile-pic" media={media ? media.toString() : null}/>
        <DisplayName>{user.displayName}</DisplayName>
        <Email>{user.email}</Email>
        <Subheader>Industry Category</Subheader>
        <Categories>{user.category.join(" ")}</Categories>
        <Bio>{user.bio}</Bio>

      </ProfileWrapper>
    </>
  )
}

export default EmployeeProfile
