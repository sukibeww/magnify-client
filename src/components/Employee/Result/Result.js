import React, { useContext, useEffect, useState } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Gauge from './Gauge'
import { MediaContext } from '../../../context/mediaContext'
import { EmployeeContext } from '../../../context/employeeContext'
import SurveyButton from '../../Button/SurveyButton'
import './result.css'



const data = [
  {
    subject: 'kinetic',
    score: Math.random() * 100
  },
  {
    subject: 'productivity',
    score: Math.random() * 100
  },
  {
    subject: 'visual',
    score: Math.random() * 100
  },
  {
    subject: 'optimism',
    score: Math.random() * 100
  },
  {
    subject: 'social',
    score: Math.random() * 100
  }
]

const StyledHeader = styled.h1`
  color: #283593;
  font-size: 2em;
  line-height: 0;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  max-width: 100vw;
  width: max-content;
  padding: 4%;
  background-color: #FFFFFF;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 1), -9px -9px 16px #ffffff;
`

const FallbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`

const RadarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 95%;
`

const Result = () => {
  const { media } = useContext(MediaContext)
  const { user } = useContext(EmployeeContext)
  const [result, setResult] = useState([])
  const [width, setWidth] = useState(window.innerWidth)
  const [TotalScore, setTotalScore] = useState()
  const resize = () => {
    setWidth(window.innerWidth)
  }

  const GenerateResult = () => {
    if (result.length > 0) {
      return result.map(data => {
        return (
          <div key={data.subject}>
            <h1>{data.score}</h1>
            <h3>{data.subject}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              magni aliquid doloribus,
            </p>
          </div>
        )
      })
    }
  }

  useEffect(() => {
    if (user) {
      if (result.length > 0) {
        const cal =
          result.reduce((total, data) => {
            return total + data.score
          }, 0) / result.length
        setTotalScore(cal)
      } else {
        setTotalScore(0)
      }
    }
  }, [result, user])

  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  })

  useEffect(() => {
    if (user.score.kinetic) {
      setResult([
        { subject: 'kinetic', score: user.score.kinetic },
        { subject: 'productivity', score: user.score.productivity },
        { subject: 'visual', score: user.score.visual },
        { subject: 'optimism', score: user.score.optimism },
        { subject: 'social', score: user.score.social }
      ])
    } else {
      setResult([])
    }
  }, [user])

  if (user.email) {
    if (result.length > 0) {
      return (
        <>
          <Wrapper media={media.toString()}>
            <StyledHeader>Profile Overview</StyledHeader>
            <Gauge totalScore={TotalScore}></Gauge>
            <RadarWrapper>
              <RadarChart
                cx="50%"
                cy="50%"
                innerRadius="30%"
                outerRadius="70%"
                width={0.5 * width}
                height={300 + 0.1 * width}
                data={result.length > 0 ? result : data} //hack to prevent error and dispay dummy for now
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                  name="result"
                  dataKey="score"
                  stroke="#c9d1ff"
                  fill="#283593"
                  fillOpacity={0.75}
                />
              </RadarChart>
            </RadarWrapper>
            <div className="grid">{GenerateResult()}</div>
          </Wrapper>
        </>
      )
    } else {
      return (
        <>
          <FallbackWrapper>
            <Wrapper>
              <StyledHeader>You haven't done the survey</StyledHeader>
              <Link
                to="/survey"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center'
                }}
              ></Link>
              <SurveyButton />
            </Wrapper>
          </FallbackWrapper>
        </>
      )
    }
  } else {
    return <Redirect to="/" />
  }
}

export default Result
