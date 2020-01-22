import React, { useContext } from 'react'
import { MediaContext } from '../../context/mediaContext'

import LoginButton from '../Button/LoginButton'
import styled from 'styled-components'

import { Redirect } from 'react-router-dom'

const LoginBackground = styled.div`
  height: 100vh;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: ${props => (props.media ? '0 20vw' : '0 5vw')};
  background-color: "#ffffff";
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%236d6deb' fill-opacity='0.07'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const LoginHeader = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 2em;
  margin: 3vh 0;
`

const LoginSubHeader = styled.h2`
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  margin: 1vh 0;
`

const LoginFormWrapper = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 10vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 1), -9px -9px 16px #ffffff;
`

const LoginSection = styled.div`
  width: 50%;
  background-image: url('https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  filter: grayscale(30%);
`

const LoginForm = styled.div`
  display: flex;
  width: ${props => (props.media ? '50%' : '100%')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`

function LoginPage(props) {
  const mediaContext = useContext(MediaContext)
  const { user } = props.user
  const { media } = mediaContext
  if (!user) {
    return (
      <>
        <LoginBackground media={media ? media.toString() : null}>
          <LoginFormWrapper>
            {media ? <LoginSection></LoginSection> : null}
            <LoginForm media={media ? media.toString() : null}>
              <LoginHeader>Welcome to Magnify</LoginHeader>
              <LoginSubHeader>Hello, User</LoginSubHeader>
              <LoginButton testid="login-employee" userType={'Employee'}></LoginButton>
              <LoginButton testid="login-employer" userType={'Employer'}></LoginButton>
            </LoginForm>
          </LoginFormWrapper>
        </LoginBackground>
      </>
    )
  } else {
    return <Redirect to="/landing" />
  }
}

export default LoginPage
