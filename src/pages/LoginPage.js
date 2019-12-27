import React, { useContext } from 'react'
import { MediaContext }  from '../context/mediaContext'

import LoginButton from '../components/Button/LoginButton'
import styled from 'styled-components'

const LoginBackground = styled.div`
  height: 100vh;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding:  0 20vw;
  background-color: #EAEFF7;
`

const LoginHeader = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 3em;
  margin: 3vh 0;
`

const LoginSubHeader = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  margin: 1vh 0;
`

const LoginFormWrapper = styled.div`
  background-color: #EAEFF7;
  width: 100%;
  height: 80%;
  border-radius: 10px;
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6), -9px -9px 16px #FFFFFF;
`

const LoginSection = styled.div`
  width: 50%;
  background-image: url("https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  filter: grayscale(30%);
`

const LoginForm = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


function LoginPage(props) {
  const mediaContext = useContext(MediaContext);
  const { media } = mediaContext;
  return (
    <>
      <LoginBackground>
        <LoginFormWrapper>
          <LoginSection></LoginSection>
          <LoginForm>
            <LoginHeader>Login</LoginHeader>
            <LoginSubHeader>Hello, User</LoginSubHeader>
            <LoginSubHeader>Welcome to Magnify</LoginSubHeader>
            <LoginButton userType={"Employee"}></LoginButton>
            <LoginButton userType={"Employer"}></LoginButton>
          </LoginForm>
        </LoginFormWrapper>
      </LoginBackground>
    </>
  )
}

export default LoginPage
