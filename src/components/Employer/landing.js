import React, { useContext } from 'react'
import styled from 'styled-components'
import { MediaContext } from '../../context/mediaContext'

const LandingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: green;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 95vh;
  width: 100%;
`

const DesktopLanding = () => {
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  return (
    <>
      <LandingWrapper data-testid="landing-wrapper">
        <h1>Landing for Employer</h1>
        <h1>to logout for now re-compile backend</h1>
      </LandingWrapper>
    </>
  )
}

export default DesktopLanding
