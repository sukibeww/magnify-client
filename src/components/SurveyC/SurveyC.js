import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import {
  FormControl,
  Button,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";

const survey = require("../SurveyA/Survey.json");

const StyledWrapper = styled.div`
  border: solid #283593;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10vh 20vw;
  border-radius: 10px;
  height: 50vh;
  padding: 10vh;
`;

const StyledQuestion = styled.p`
  color: #283593;
  font-size: 1.3em;
  text-align: center;
`;

const StyledHeader = styled.h1`
  color: #283593;
  font-size: 2em;
  line-height: 0;
`;

const StyledSubheader = styled.h2`
  color: #ffa726;
  font-size: 1.5em;
  line-height: 0;
  opacity: 0.5;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledIndex = styled.p`
  color: #283593;
  font-size: 1em;
  line-height: 0;
  opacity: 0.5;
`;

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2)
  },
  radioControl: {
    display: "flex",
    flexDirection: "column"
  }
}));

const SelectOptions = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div>
      <InputLabel id='demo-controlled-open-select-label'>Select</InputLabel>

      <Select
        variant='outlined'
        value={selectedOption}
        onChange={e => {
          setSelectedOption(() => {
            return e.target.value;
          });
        }}
        autoWidth={true}
        defaultValue=''
      >
        <MenuItem value='1'>1</MenuItem>
        <MenuItem value='2'>2</MenuItem>
        <MenuItem value='3'>3</MenuItem>
        <MenuItem value='4'>4</MenuItem>
      </Select>
    </div>
  );
};

const SurveyC = () => {
  const classes = useStyles();
  const [selectedValues, setSelectedValues] = useState([]);
  const currentQuestion = survey[0]["C"]["questions"][0];
  // const description = survey[0]["B"]["description"];
  const handleChange = event => {
    setSelectedValues(event.target.value);
  };

  return (
    <>
      <StyledWrapper>
        <HeaderWrapper>
          <StyledHeader>Section C</StyledHeader>
          <StyledSubheader>Question 1</StyledSubheader>
        </HeaderWrapper>
        <StyledQuestion>{currentQuestion["question"]}</StyledQuestion>
        <FormControl component='fieldset' className={classes.formControl}>
          {/* ----------------------------------------------------------------------------- */}

          <StyledQuestion>{currentQuestion["options"][0]}</StyledQuestion>
          <SelectOptions />
        </FormControl>

        {/* ------------------------------------------------------------------------------ */}
        <FormControl component='fieldset' className={classes.formControl}>
          <StyledQuestion>{currentQuestion["options"][1]}</StyledQuestion>
          <SelectOptions />
        </FormControl>

        {/* ----------------------------------------------------------------------------- */}
        <FormControl component='fieldset' className={classes.formControl}>
          <StyledQuestion>{currentQuestion["options"][2]}</StyledQuestion>
          <SelectOptions />
        </FormControl>

        {/* ----------------------------------------------------------------------------- */}
        <FormControl component='fieldset' className={classes.formControl}>
          <StyledQuestion>{currentQuestion["options"][3]}</StyledQuestion>
          <SelectOptions />
        </FormControl>

        {/* --------------------------------------------------------------------------- */}
        <Button
          variant='contained'
          color='primary'
          size='large'
          className={classes.formControl}
        >
          Next Question
        </Button>
        <Button variant='outlined' color='secondary'>
          Back
        </Button>
        <StyledIndex>1/5</StyledIndex>
      </StyledWrapper>
    </>
  );
};

export default SurveyC;
