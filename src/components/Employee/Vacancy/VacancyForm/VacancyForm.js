import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Button,
  TextField
} from '@material-ui/core'
import SalarySelect from './Components/SalarySelect'
import AvailablePositionsSelect from './Components/AvailablePositionsSelect'
import ActivitySelect from './Components/ActivitySelect'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledHeader = styled.h1`
  color: #283593;
  font-size: 2em;
  line-height: 0;
`
const StyledTitle = styled.h2`
  color: #283593;
  font-size: 1.3em;
  text-align: center;
`
const StyledText = styled.p`
  font-size: 1em;
  font-weight: 300;
  height: auto;
  text-align: center;
`

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

const VacancyForm = () => {
  return (
    <>
      <StyledWrapper>
        <HeaderWrapper>
          <StyledHeader>New/edit Vacancy</StyledHeader>

          <StyledTitle>Industry Categories</StyledTitle>
          {/* replace with drop down */}
          <StyledText>eg. Information Technology</StyledText>

          <StyledTitle> Vacancy Description</StyledTitle>
          <form noValidate autoComplete="off">
            <TextField id="filled-basic" label="Description" variant="filled" />
          </form>

          <StyledTitle>Salary</StyledTitle>
          <SalarySelect />

          <StyledTitle>Available Positions</StyledTitle>
          <AvailablePositionsSelect />

          <StyledTitle>Active?</StyledTitle>
          <ActivitySelect />
        </HeaderWrapper>

        <Button
          variant="contained"
          color="primary"
          size="large"
          // className={classes.formControl}
          // onClick={save}
        >
          Save
        </Button>
        <Link to="/vacancies">
          <Button variant="outlined" color="secondary">
            Back
          </Button>
        </Link>
        
      </StyledWrapper>
    </>
  )
}

export default VacancyForm
