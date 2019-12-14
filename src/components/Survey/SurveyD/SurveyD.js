import React, { useState } from 'react'
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

const SurveyD = () => {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = useState('a')
  const currentQuestion = survey[0]['D']['questions'][0]
  console.log(currentQuestion['question'])
  const handleChange = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <>
      <StyledWrapper>
        <HeaderWrapper>
          <StyledHeader>Section D</StyledHeader>
          <StyledSubheader>Question 1</StyledSubheader>
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
            onChange={handleChange}
            column="true"
          >
            <FormControlLabel
              value="1"
              control={<Radio color="secondary" />}
              label={currentQuestion['options'][0]['description']}
              labelPlacement="end"
              image={currentQuestion['options'][0]['image']}
            />

            <FormControlLabel
              value="2"
              control={<Radio color="secondary" />}
              label={currentQuestion['options'][1]['description']}
              labelPlacement="end"
              image={currentQuestion['options'][0]['image']}
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.formControl}
        >
          Next Question
        </Button>
        <Button variant="outlined" color="secondary">
          Back
        </Button>
        <StyledIndex>1/15</StyledIndex>
      </StyledWrapper>
    </>
  )
}

export default SurveyD
