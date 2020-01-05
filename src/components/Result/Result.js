import React, { useContext, useEffect, useState } from 'react'
import { MediaContext } from '../../context/mediaContext'
import { EmployeeContext } from '../../context/employeeContext'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import Guage from './Guage'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts'

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
  width: max-content;
  margin: 20px auto;
  border: solid 3px #283593;
  border-radius: 10px;
  padding: 5vh 0;
`
const RadarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: max-content;
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

  useEffect(() => {
    if (user) {
      if (result.length > 0) {
        const cal =
          result.reduce((total, data) => {
            return total + data.score
          }, result.length * 2) / result.length
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
    async function fetchData() {
      const resp = await fetch('http://localhost:3000/employee/result', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true
        }
      }).then(resp => resp.json())
      resp.score
        ? setResult([
            { subject: 'kinetic', score: resp.score.kinetic },
            { subject: 'productivity', score: resp.score.productivity },
            { subject: 'visual', score: resp.score.visual },
            { subject: 'optimism', score: resp.score.optimism },
            { subject: 'social', score: resp.score.social }
          ])
        : setResult(undefined)
    }
    fetchData()
  }, [])

  if (user.email) {
    if (result.length > 0) {
      return (
        <>
          <Wrapper media={media}>
            <StyledHeader>Profile Overview</StyledHeader>
            <Guage totalScore={TotalScore}></Guage>
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
          </Wrapper>
        </>
      )
    } else {
      return (
        <>
          <StyledHeader>You haven't done the survey</StyledHeader>
          <Link
            to="/survey"
            style={{
              textDecoration: 'none',
              color: 'white',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Button color="inherit">Do The Survey</Button>
          </Link>
        </>
      )
    }
  } else {
    return <Redirect to="/" />
  }
}

export default Result
