import React from 'react'
import styled from 'styled-components'
// import { MediaContext } from '../../../context/mediaContext'
import { CreateOutlined, PersonOutline, MailOutline } from '@material-ui/icons'
import './Landing.css'
import { Link } from 'react-router-dom'

const LandingWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  font-size: 1rem;
`

const DesktopLanding = () => {
  // const mediaContext = useContext(MediaContext)
  // const { media } = mediaContext
  return (
    <>
      <LandingWrapper data-testid="landing-wrapper">
        <section id="banner">
          <div className="inner">
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
          <div className="flex-wrapper">
            <div className="grid">
              <div>
                <Link className="none" to="/vacancy">
                  <CreateOutlined />
                  <span>Create Vacancie</span>
                  <div id="vacan" className="image"></div>
                </Link>
              </div>

              <div>
                <Link className="none" to="/delegates">
                  <MailOutline />
                  <span>Invitation</span>
                  <div id="survey" className="image"></div>
                </Link>
              </div>

              <div>
                <Link className="none" to="/premium">
                  <PersonOutline />
                  <span>Premium</span>
                  <div id="public" className="image"></div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer">
          <div className="inner">
            <div className="content">
              <section>
                <h3>Maginify</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  in temporibus nulla error quidem distinctio enim, esse cumque
                  corrupti modi mollitia praesentium reprehenderit quaerat quis
                  debitis nam quo nihil. Doloribus.
                </p>
                <p> Address : 1/1 aa Melbourne 3000</p>
              </section>
              <section>
                <h4>Navigate</h4>
                <ul className="alt">
                  <li>
                    <Link to="/vacancy">Vacancies</Link>
                  </li>
                  <li>
                    <Link to="/delegates">Invite</Link>
                  </li>
                  <li>
                    <Link to="/premium">Premium</Link>
                  </li>
                  <li>
                    <Link to="/">Email us</Link>
                  </li>
                </ul>
              </section>
              <section>
                <h4>Social</h4>
                <ul className="plain">
                  <li>
                    <Link to="/">
                      <i className="icon fa-twitter">&nbsp;</i>Twitter
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="icon fa-facebook">&nbsp;</i>Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="icon fa-instagram">&nbsp;</i>Instagram
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="icon fa-github">&nbsp;</i>Github
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="end">--- Magnify Copyright --</div>
          </div>
        </footer>
      </LandingWrapper>
    </>
  )
}

export default DesktopLanding
