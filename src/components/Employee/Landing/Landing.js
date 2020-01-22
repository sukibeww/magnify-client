import React from 'react'
import styled from 'styled-components'
import {
  CreateOutlined,
  AssessmentOutlined,
  ListAltOutlined
} from '@material-ui/icons'

import imgSurvey from './survey.jpg'
import imgResults from './312.jpg'
import imgVacancy from './2895265.jpg'
import Footer from '../../Footer/Footer'
import { Link } from 'react-router-dom'

const LandingWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  font-size: 1rem;
`
const Banner = styled.div`
  -ms-flex-align: center;
  -ms-flex-pack: center;
  background-image: linear-gradient(to bottom right, #2657eb, #de6161);
  color: white;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  border-top: 0;
  display: -ms-flexbox;
  min-height: 35em;
  position: relative;
  text-align: center;
  width: 100%;
  font-size: calc(0.6rem + 0.2vw);
  font-size: -webkit-calc(0.7rem + 0.1vw);
  font-size: -moz-calc(0.7rem + 0.1vw);
`
const BannerInner = styled.div`
  display: flex;
  flex-direction: column;
  -moz-transform: scale(1);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -moz-transition: opacity 1s ease, -moz-transform 1s ease;
  -webkit-transition: opacity 1s ease, -webkit-transform 1s ease;
  -ms-transition: opacity 1s ease, -ms-transform 1s ease;
  transition: opacity 1s ease, transform 1s ease;
  opacity: 1;
  position: relative;
  z-index: 3;
  font-size: 1em;
`
const BannerH1 = styled.h1`
  font-size: 3em;
`
const BannerP = styled.p`
  font-size: 1.5em;
`
const SiteDetails = styled.div`
  position: relative;
  font-size: cal(1em + 0.2vw);
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  height: auto;
  padding-top: 50px;
`
const SiteDetailsP = styled.p`
  display: flex;
  width: 70%;
  text-align: center;
  justify-content: center;
  margin: 20px auto;
  font-size: 1.1em;
`
const FlexWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 1200px;
  max-width: 92%;
  margin: 0 auto;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 5vw;
  min-width: 100%;
`
const GridDiv = styled.div`
  position: relative;
  background-image: linear-gradient(to bottom right, #686df4, #c177f5);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.05);
  border-radius: 0.5em;
  color: white;
  font-weight: 700;
  min-width: 30%;
  height: 250px;
  opacity: 0.9;
  overflow: hidden;
  box-sizing: border-box;
  :hover {
    background-image: linear-gradient(to bottom right, #5c61f4, #b461ee);
    opacity: 1;
  }
`
const GridDivSpan = styled.div`
  position: absolute;
  display: flex;
  text-align: center;
  top: 5%;
  left: 12%;
`
const GridSurvey = styled.div`
  background-image: url(${imgSurvey});
  position: relative;
  background-size: cover;
  background-position-y: center;
  background-position-x: center;
  width: 120%;
  margin-left: -10px;
  margin-top: 45px;
  height: 100%;
  opacity: 0.88;
  :hover {
    position: relative;
    background-image: url(${imgSurvey});
    background-size: cover;
    width: 120%;
    margin-left: -20px;
    margin-top: 40px;
    height: 100%;
    opacity: 0.95;
    transition: margin 0.5s;
  }
`
const GridResults = styled.div`
  background-image: url(${imgResults});
  position: relative;
  background-size: cover;
  background-position-y: center;
  background-position-x: center;
  width: 120%;
  margin-left: -10px;
  margin-top: 45px;
  height: 100%;
  opacity: 0.88;
  :hover {
    position: relative;
    background-image: url(${imgResults});
    background-size: cover;
    width: 120%;
    margin-left: -20px;
    margin-top: 40px;
    height: 100%;
    opacity: 0.95;
    transition: margin 0.5s;
  }
`
const GridVacancy = styled.div`
  background-image: url(${imgVacancy});
  position: relative;
  background-size: cover;
  background-position-y: center;
  background-position-x: center;
  width: 120%;
  margin-left: -10px;
  margin-top: 45px;
  height: 100%;
  opacity: 0.88;
  :hover {
    position: relative;
    background-image: url(${imgVacancy});
    background-size: cover;
    width: 120%;
    margin-left: -20px;
    margin-top: 40px;
    height: 100%;
    opacity: 0.95;
    transition: margin 0.5s;
  }
`
const DesktopLanding = () => {
  return (
    <>
      <LandingWrapper data-testid="landing-wrapper">
        <Banner>
          <BannerInner>
            <BannerH1>Magnify</BannerH1>
            <BannerP>
              The app that rates job candidates(you) via your psychological
              profile and markets your traits to potential employers.
            </BannerP>
          </BannerInner>
        </Banner>
        <SiteDetails>
          <h1>Magnify Logic</h1>
          <SiteDetailsP>
            Magnify works by requesting a potential candidate to complete our
            innovative survey, to assess their psychological profile and
            personality traits. Using our algorithm, we calculate the candidates
            detailed results and return a base percentage. This base percentage
            signifies the overall idealness of a top employee.
          </SiteDetailsP>
          <FlexWrapper>
            <Grid>
              <GridDiv>
                <GridDivSpan>
                  <CreateOutlined />
                  Complete Survey
                </GridDivSpan>
                <Link to="/survey">
                  <GridSurvey />
                </Link>
              </GridDiv>
              <GridDiv>
                <GridDivSpan>
                  <AssessmentOutlined /> Check your Results
                </GridDivSpan>
                <Link to="/result">
                  <GridResults />
                </Link>
              </GridDiv>
              <GridDiv>
                <GridDivSpan>
                  <ListAltOutlined />
                  Look for Vacancies
                </GridDivSpan>
                <Link to="/vacancies">
                  <GridVacancy />
                </Link>
              </GridDiv>
            </Grid>
          </FlexWrapper>
        </SiteDetails>

        <Footer />
      </LandingWrapper>
    </>
  )
}

export default DesktopLanding
