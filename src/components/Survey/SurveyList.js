import React, { useState, useContext } from 'react'
import SurveyA from './SurveyA'
import SurveyB from './SurveyB'
import SurveyC from './SurveyC'
import SurveyD from './SurveyD'
import { EmployeeContext } from '../../context/employeeContext'

const SurveyList = () => {
  const employeeContext = useContext(EmployeeContext)
  const { user } = employeeContext
  const {
    survey: { surveyA = [], surveyB = [], surveyC = [], surveyD = [] } = {},
    current: { current_section = 'A', current_count = 1 } = {}
  } = user
  const [resultA, setResultA] = useState(surveyA || [])
  const [resultB, setResultB] = useState(surveyB || [])
  const [resultC, setResultC] = useState(surveyC || [])
  const [resultD, setResultD] = useState(surveyD || [])
  const [section, setSection] = useState(current_section)
  const currestSection = () => {
    switch (section) {
      case 'A':
        return (
          <SurveyA
            setSection={setSection}
            result={resultA}
            setResult={setResultA}
            count={current_count}
          />
        )
      case 'B':
        return (
          <SurveyB
            setSection={setSection}
            result={resultB}
            setResult={setResultB}
            count={current_count}
          />
        )
      case 'C':
        return (
          <SurveyC
            setSection={setSection}
            result={resultC}
            setResult={setResultC}
            count={current_count}
          />
        )
      case 'D':
        return (
          <SurveyD
            setSection={setSection}
            result={resultD}
            setResult={setResultD}
            count={current_count}
          />
        )
      default:
        return null
    }
  }
  return <>{currestSection()}</>
}

export default SurveyList
