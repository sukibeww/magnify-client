import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/styles'
import {
  FormControl,
  Button,
  Select,
  MenuItem,
  InputLabel
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

const StyledOption = styled.p`
  color: #283593;
  font-size: 1em;
  text-align: left;
`

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
    margin: theme.spacing(2),
    minWidth: '120px'
  },
  radioControl: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

const SelectOptions = () => {
  const inputLabel = useRef(null)
  const [labelWidth, setLabelWidth] = useState(0)
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])
  const [selectedOption, setSelectedOption] = useState()
  return (
    <>
      <InputLabel id="select-label" ref={inputLabel}>
        Select
      </InputLabel>
      <Select
        labelId="select-label"
        id="select-outlined"
        variant="outlined"
        value={selectedOption}
        onChange={e => {
          setSelectedOption(() => {
            return e.target.value
          })
        }}
        labelWidth={labelWidth}
      >
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="4">4</MenuItem>
      </Select>
    </>
  )
}

const SurveyC = () => {
  const classes = useStyles()
  // const [selectedValues, setSelectedValues] = useState([])
  const currentQuestion = survey[0]['C']['questions'][0]
  // const description = survey[0]["B"]["description"];
  return (
    <>
      <StyledWrapper>
        <HeaderWrapper>
          <StyledHeader>Section C</StyledHeader>
          <StyledSubheader>Question 1</StyledSubheader>
        </HeaderWrapper>
        <StyledQuestion>{currentQuestion['question']}</StyledQuestion>
        <OptionWrapper>
          <StyledOption>{currentQuestion['options'][0]}</StyledOption>
          <FormControl className={classes.formControl} variant="outlined">
            <SelectOptions />
          </FormControl>
        </OptionWrapper>
        <OptionWrapper>
          <StyledOption>{currentQuestion['options'][1]}</StyledOption>
          <FormControl className={classes.formControl} variant="outlined">
            <SelectOptions />
          </FormControl>
        </OptionWrapper>
        <OptionWrapper>
          <StyledOption>{currentQuestion['options'][2]}</StyledOption>
          <FormControl className={classes.formControl} variant="outlined">
            <SelectOptions />
          </FormControl>
        </OptionWrapper>
        <OptionWrapper>
          <StyledOption>{currentQuestion['options'][3]}</StyledOption>
          <FormControl className={classes.formControl} variant="outlined">
            <SelectOptions />
          </FormControl>
        </OptionWrapper>
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
        <StyledIndex>1/5</StyledIndex>
      </StyledWrapper>
    </>
  )
}

export default SurveyC
