import React, { useState } from 'react'
import SurveyA from './SurveyA/SurveyA'
import SurveyB from './SurveyB/SurveyB'
import SurveyC from './SurveyC/SurveyC'
import SurveyD from './SurveyD/SurveyD'

const SurveyList = () => {
  const [resultA, setResultA] = useState([])
  const [resultB, setResultB] = useState([])
  const [resultC, setResultC] = useState([])
  const [resultD, setResultD] = useState([])
  const [section, setSection] = useState('A')
  const currestSection = () => {
    switch (section) {
      case 'A':
        return (
          <SurveyA
            setSection={setSection}
            result={resultA}
            setResult={setResultA}
          />
        )
      case 'B':
        return (
          <SurveyB
            setSection={setSection}
            result={resultB}
            setResult={setResultB}
          />
        )
      case 'C':
        return (
          <SurveyC
            setSection={setSection}
            result={resultC}
            setResult={setResultC}
          />
        )
      case 'D':
        return (
          <SurveyD
            setSection={setSection}
            result={resultD}
            setResult={setResultD}
          />
        )
      default:
        return null
    }
  }
  return <>{currestSection()}</>
}

export default SurveyList
