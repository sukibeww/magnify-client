import React, { useContext } from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
import AccordionLanding from './AccordionLanding/AccodionLanding.js'
=======
import AccordionLanding from './AccordionLanding/AccodionLanding'
>>>>>>> c83e767c2ad7d28bd54a52c544899887ecf086d9
import { MediaContext } from '../../context/mediaContext'

const LandingWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-image: url(${require('./images/mobile-bg.png')});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 95vh;
  width: 100%;
  padding-top: 5vh;
`

const StyledLogo = styled.img`
  width: 50vw;
  height: 50vw;
`

const MobileLanding = () => {
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

export default MobileLanding
