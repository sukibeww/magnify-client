import React, { useEffect, useState, useContext } from 'react'
import Slider from '@material-ui/core/Slider'
import { MediaContext } from '../../../../context/mediaContext'
import styled from 'styled-components'

const SliderWrapper = styled.div`
  width: ${props => (props.media ? '40vw' : '100%')};
`

const SurveySlider = props => {
  const { sectionLength, currentQuestion, dispatch } = props
  const [index, setIndex] = useState(currentQuestion)
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  useEffect(() => {
    setIndex(() => {
      return currentQuestion
    })
  }, [currentQuestion])

  return (
    <SliderWrapper media={media ? media.toString() : null}>
      <Slider
        defaultValue={index}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        min={1}
        value={index}
        marks
        max={sectionLength > 0 ? sectionLength : 1}
        valueLabelDisplay="auto"
        onChange={(e, value) => dispatch(value)}
        onDragEnd={(e, value) => dispatch(value)}
      />
    </SliderWrapper>
  )
}

export default SurveySlider
