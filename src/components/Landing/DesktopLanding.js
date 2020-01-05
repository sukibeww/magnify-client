import React, { useContext } from 'react'
import styled from 'styled-components'
import AccordionLanding from './AccordionLanding/AccodionLanding.js'
import { MediaContext } from '../../context/mediaContext'

const LandingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-image: url(${require('./images/desktop-bg.png')});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 95vh;
  width: 100%;
`

const StyledLogo = styled.img`
  width: 35vw;
  height: 35vw;
`

const DesktopLanding = () => {
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  return (
    <>
      <LandingWrapper data-testid="landing-wrapper">
        <StyledLogo
          src={require('./images/landing-logo.png')}
          alt="magnifylogo"
        />
        <AccordionLanding media={media ? media.toString() : null} />
      </LandingWrapper>
    </>
  )
}

export default DesktopLanding
