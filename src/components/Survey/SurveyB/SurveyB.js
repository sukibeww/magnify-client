import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/styles'
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Button
} from '@material-ui/core'

const survey = require('../Survey.json')

const StyledWrapper = styled.div`
  border: solid #283593;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh auto;
  border-radius: 10px;
  height: auto;
  width: 70%;
  min-width: 320px;
  max-width: max-content;
  padding: 5vh 3vw;
`

const StyledQuestion = styled.p`
  color: #283593;
  font-size: 1.3em;
  text-align: center;
`

const StyledHeader = styled.h1`
  color: #283593;
  font-size: 2em;
  line-height: 0;
`

const StyledSubheader = styled.h2`
  color: #ffa726;
  font-size: 1.5em;
  line-height: 0;
  opacity: 0.5;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledIndex = styled.p`
  color: #283593;
  font-size: 1em;
  line-height: 0;
  opacity: 0.5;
`

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2)
  },
  radioControl: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

const count_reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      throw new Error('Unexpected action')
  }
}

const SurveyB = props => {
  const classes = useStyles()
  const { setSection, result, setResult } = props
  const [count, dispatch] = useReducer(count_reducer, 1)
  const defaultSelect = '1'
  const [selectedValue, setSelectedValue] = useState(defaultSelect)
  const totalQuestion = survey[0]['B']['questions'].length
  let currentQuestion = survey[0]['B']['questions'][count - 1]

  useEffect(() => {
    setSelectedValue(result[count - 1] || defaultSelect)
  }, [result, count])

  const saveResult = async select => {
    const temp_result = result
    temp_result[count - 1] = select
    setResult(temp_result)
    setSelectedValue(select || defaultSelect)
  }

  const next = () => {
    if (count < totalQuestion) dispatch('increment')
  }
  const back = () => {
    if (count > 1) dispatch('decrement')
  }

  return (
    <>
      <StyledWrapper>
        <HeaderWrapper>
          <StyledHeader>Section B</StyledHeader>
          <StyledSubheader>Question {count}</StyledSubheader>
        </HeaderWrapper>
        <StyledQuestion>{currentQuestion['question']}</StyledQuestion>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" color="secondary">
            Options
          </FormLabel>
          <RadioGroup
            aria-label="position"
            name="position"
            value={selectedValue}
            onChange={e => saveResult(e.target.value)}
            column="true"
          >
            <FormControlLabel
              value="1"
              control={<Radio color="secondary" />}
              label={currentQuestion['options'][0]}
              labelPlacement="end"
            />
            <FormControlLabel
              value="2"
              control={<Radio color="secondary" />}
              label={currentQuestion['options'][1]}
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
        {selectedValue ? (
          count === totalQuestion ? (
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.formControl}
              onClick={() => {
                setSection('C')
              }}
            >
              Next Section
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.formControl}
              onClick={next}
            >
              Next Question
            </Button>
          )
        ) : null}
        {count === 1 ? null : (
          <Button variant="outlined" color="secondary" onClick={back}>
            Back
          </Button>
        )}
        <StyledIndex>{count}/32</StyledIndex>
      </StyledWrapper>
    </>
  )
}

export default SurveyB
