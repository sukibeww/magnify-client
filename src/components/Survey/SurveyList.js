import React, { useState, useContext, useEffect, useReducer } from 'react'
import { Button } from '@material-ui/core'
import SurveyA from './SurveyA'
import SurveyB from './SurveyB'
import SurveyC from './SurveyC'
import SurveyD from './SurveyD'
import { EmployeeContext } from '../../context/employeeContext'

const count_reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return 1
    default:
      return isNaN(action) ? 1 : parseInt(action)
  }
}

const SurveyList = () => {
  const employeeContext = useContext(EmployeeContext)
  const { user, saveSurvey } = employeeContext
  const [resultA, setResultA] = useState([])
  const [resultB, setResultB] = useState([])
  const [resultC, setResultC] = useState([])
  const [resultD, setResultD] = useState([])
  const [section, setSection] = useState('A')
  const [count, dispatch] = useReducer(count_reducer, 1)

  useEffect(() => {
    if (user.survey) {
      setResultA(user.survey.surveyA || [])
      setResultB(user.survey.surveyB || [])
      setResultC(user.survey.surveyC || [])
      setResultD(user.survey.surveyD || [])
    }
    if (user.current) {
      setSection(user.current.current_section || 'A')
      dispatch(user.current.current_count || 'reset')
    }
  }, [user])

  const saving = () => {
    saveSurvey({
      surveyA: resultA,
      surveyB: resultB,
      surveyC: resultC,
      surveyD: resultD,
      count,
      section
    })
  }

  const currestSection = () => {
    switch (section) {
      case 'A':
        return (
          <SurveyA
            setSection={setSection}
            result={resultA}
            setResult={setResultA}
            count={count}
            dispatch={dispatch}
          />
        )
      case 'B':
        return (
          <SurveyB
            setSection={setSection}
            result={resultB}
            setResult={setResultB}
            count={count}
            dispatch={dispatch}
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
  return (
    <>
      {user.email ? (
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          onClick={() => {
            saving()
          }}
        >
          Save
        </Button>
      ) : null}
      {currestSection()}
    </>
  )
}

export default SurveyList
