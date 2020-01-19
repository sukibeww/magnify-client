import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MediaContext } from '../../../context/mediaContext'
import { EmployeeContext } from '../../../context/employeeContext'
import { 
  Chip,
  Avatar
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
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

const Categories = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  opacity: 0.8;
  max-width: ${(props) => props.media ? "40vw" : "inherit"};
  flex-wrap: wrap;
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

const useStyles = makeStyles(theme => ({
  chip: {
    margin: "0.5vw 0.5vw"
  }
})) 

const EmployeeProfile = () => {
  const classes = useStyles()
  const { media } = useContext(MediaContext)
  const { user } = useContext(EmployeeContext)
  console.log(user)
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
            src={user.photos}
            alt="profile-pic"
            media={media ? media.toString() : null}
          />
          <DisplayName>{user.displayName}</DisplayName>
          <Email>{user.email}</Email>
          <Subheader>Industry Category</Subheader>
            <Categories media={media}>
              {user.category.map((category) =>{
              return(
                <Chip
                  className={classes.chip}
                  avatar={<Avatar>{category.charAt(0)}</Avatar>}
                  label={category}
                  clickable
                  color="primary"
                />
              )
            })}
            </Categories>
          <Bio>{user.bio}</Bio>
        </ProfileWrapper>
      </>
    )
  } else {
    return <Redirect to="/" />
  }
}

export default EmployeeProfile
