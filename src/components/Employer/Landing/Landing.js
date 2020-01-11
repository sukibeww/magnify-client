import React, { useContext } from 'react'
import styled from 'styled-components'
import { MediaContext } from '../../../context/mediaContext'
import './Landing.css'
const LandingWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100%;
`

const DesktopLanding = () => {
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  return (
    <>
      <LandingWrapper data-testid="landing-wrapper">
        <section id="banner">
          <div class="inner">
            <h1>Magnify</h1>
            <p>Because Your mentality is more important than your skill</p>
          </div>
          {/* <video
            autoplay
            loop
            muted
            playsinline
            src="./manify.mp4"
          ></video> */}
        </section>
      </LandingWrapper>
    </>
  )
}

export default DesktopLanding
