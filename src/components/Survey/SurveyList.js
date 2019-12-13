import React, { useState } from 'react'
import SurveyA from '../SurveyA/SurveyA'
import SurveyB from '../SurveyB/SurveyB'
import SurveyC from '../SurveyC/SurveyC'
import SurveyD from '../SurveyD/SurveyD'

const SurveyList = () => {
  const [resultA, setResultA] = useState([])
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
            result={resultA}
            setResultA={setResultA}
          />
        )
      case 'C':
        return (
          <SurveyC
            setSection={setSection}
            result={resultA}
            setResultA={setResultA}
          />
        )
      case 'D':
        return (
          <SurveyD
            setSection={setSection}
            result={resultA}
            setResult={setResultA}
          />
        )
      default:
        return null
    }
  }
  return <>{currestSection()}</>
}

export default SurveyList
