import React, { useEffect, useState, useContext } from 'react'
import Slider from '@material-ui/core/Slider'
import { MediaContext } from '../../context/mediaContext'
import styled from 'styled-components'

const SliderWrapper = styled.div`
  width: ${props => (props.media ? '40vw' : '100%')};
`

const SurveySlider = props => {
  const { currentQuestion, dispatch } = props
  const [index, setIndex] = useState(currentQuestion)
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  useEffect(() => {
    console.log('effect ' + currentQuestion)
    setIndex(() => {
      return currentQuestion
    })
  }, [currentQuestion])
  return (
    <SliderWrapper media={media}>
      <Slider
        defaultValue={index}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        min={1}
        value={index}
        marks
        max={props.sectionLength}
        valueLabelDisplay="auto"
        onChange={(e, value) => dispatch(value)}
        onDragStop={(e, value) => dispatch(value)}
      />
    </SliderWrapper>
  )
}

export default SurveySlider
