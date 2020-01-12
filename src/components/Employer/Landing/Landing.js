import React, { useContext } from 'react'
import styled from 'styled-components'
import { MediaContext } from '../../../context/mediaContext'
import { CreateOutlined, PersonOutline, MailOutline } from '@material-ui/icons'
import './Landing.css'

const LandingWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  font-size: 1rem;
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
            <p>
              The app that rates job candidates and show the salary they want
            </p>
          </div>
        </section>
        <section id="site-details">
          <h1>Magnify Logic</h1>
          <p>
            let your employee took the survey and we turn it to score that
            indicate ...
          </p>
          <div class="flex-wrapper">
            <div class="grid">
              <div>
                <CreateOutlined />
                <span>Create Vacancie</span>
                <div id="vacan" class="image"></div>
              </div>
              <div>
                <MailOutline />
                <span> Invite Employee to do the Survey</span>
                <div id="survey" class="image"></div>
              </div>
              <div>
                <PersonOutline />
                <span> Recruit Public</span>
                <div id="public" class="image"></div>
              </div>
            </div>
          </div>
        </section>
      </LandingWrapper>
    </>
  )
}

export default DesktopLanding
