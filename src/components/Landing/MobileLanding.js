import React, { useContext } from 'react'
import styled from 'styled-components';
import AccordionLanding from '../AccordionLanding/AccodionLanding'
import { MediaContext } from '../../context/mediaContext'


const LandingWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-image: url(${require("./images/mobile-bg.png")});
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
  const mediaContext = useContext(MediaContext);
  const { media } = mediaContext;
  return(
    <>
      <LandingWrapper data-testid="landing-wrapper"> 
        <StyledLogo src={require('./images/landing-logo.png')} alt="magnifylogo"/>
        <AccordionLanding media={media}/>
      </LandingWrapper>
    </>
  )
}

export default MobileLanding;