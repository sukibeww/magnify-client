import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Button
} from "@material-ui/core";

const survey = require("./Survey.json");

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

const SurveyA = () => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState("a");
  const [count, setCount] = useState(0);
  let currentQuestion = survey[0]["A"]["questions"][count];
  let description = survey[0]["A"]["description"];
  const handleChange = event => {
    setCount(count + 1);
  };
  return (
    <>
      <StyledWrapper>
        <HeaderWrapper>
          <StyledHeader>Section A</StyledHeader>
          <StyledSubheader>Question 1</StyledSubheader>
        </HeaderWrapper>
        <StyledQuestion>{description}</StyledQuestion>
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
              label={currentQuestion["options"][0]}
              labelPlacement="end"
            />
            <FormControlLabel
              value="2"
              control={<Radio color="secondary" />}
              label={currentQuestion["options"][1]}
              labelPlacement="end"
            />
            <FormControlLabel
              value="3"
              control={<Radio color="secondary" />}
              label={currentQuestion["options"][2]}
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.formControl}
          onClick={handleChange}
        >
          Next Question
        </Button>
        <Button variant="outlined" color="secondary">
          Back
        </Button>
        <StyledIndex>1/32</StyledIndex>
      </StyledWrapper>
    </>
  );
};

export default SurveyA;