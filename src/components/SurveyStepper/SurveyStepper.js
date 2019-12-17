import React, { useState, useContext } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import { MediaContext } from '../../context/mediaContext'
import styled from 'styled-components';

const StepperWrapper = styled.div`
  width: ${(props) => props.media ? "40vw" : "90vw"};
`

const getSteps = () => {
  return ['A', 'B', 'C', 'D'];
}

const SurveyStepper = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const setSection = props.setSection;
  const mediaContext = useContext(MediaContext);
  const { media } = mediaContext;

  const handleStep = step => () => {
    setActiveStep(step);
    setSection(steps[step]);
  };

  return (
    <StepperWrapper media={media}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
    </StepperWrapper>
  );
}

export default SurveyStepper;