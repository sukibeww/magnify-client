import React, { useState, useEffect, useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import StepConnector from '@material-ui/core/StepConnector'
import { MediaContext } from '../../../../context/mediaContext'
import styled from 'styled-components'

const StepperWrapper = styled.div`
  width: ${props => (props.media ? '40vw' : '90vw')};
`

const ColorConnector = withStyles({
  active: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,#045cc8,#02389d,#022080)'
    }
  },
  completed: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,#0575e6,#046ede,#045cc8)'
    }
  },
  line: {
    height: 2.5,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1
  }
})(StepConnector)

function getSteps() {
  return ['A', 'B', 'C', 'D']
}

const SurveyStepper = props => {
  const { section, dispatch, setSection } = props
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps()
  const { media } = useContext(MediaContext)

  useEffect(() => {
    setActiveStep(steps.indexOf(section))
  }, [section, steps])

  const handleStep = step => () => {
    dispatch('reset')
    setSection(steps[step])
  }

  return (
    <StepperWrapper media={media ? media.toString() : null}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorConnector />}
      >
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepButton onClick={handleStep(index)}>{label}</StepButton>
            </Step>
          )
        })}
      </Stepper>
    </StepperWrapper>
  )
}

export default SurveyStepper
