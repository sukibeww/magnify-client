import React from 'react'
import styled from 'styled-components';
import AccordionLanding from '../AccordionLanding/AccodionLanding'


const LandingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-image: url(${require("./images/desktop-bg.png")});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 95vh;
  width: 100%;
`

const StyledLogo = styled.img`
  width: 35vw;
  height: 35vw;
`

const Landing = () => {
  return(
    <>
      <LandingWrapper data-testid="landing-wrapper"> 
        <StyledLogo src={require('./images/landing-logo.png')} alt="magnifylogo"/>
        <AccordionLanding />
      </LandingWrapper>
    </>
  )
}

export default Landing;