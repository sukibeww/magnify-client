import React, { useEffect , useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: "40vw"
  },
}));

const valuetext = (value) => {
  return `${value}°C`;
}

// const valueLabelFormat = (value) => {
//   return marks.findIndex(mark => mark.value === value) + 1;
// }

const SurveySlider = (props) => {
  const classes = useStyles();
  const { currentQuestion, dispatch } = props
  const [index, setIndex] = useState(currentQuestion)
  useEffect(() => {
    console.log("effect " + currentQuestion)
    setIndex(()=> {return currentQuestion})
  }, [currentQuestion])
  return (
    <div className={classes.root}>
      <Slider
        defaultValue={index}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        min={1}
        value={index}
        marks
        max={props.sectionLength}
        valueLabelDisplay="auto"
        onChange={ (e, value) => dispatch(value)}  
        onDragStop={ (e, value) => dispatch(value)}
      />
    </div>
  );
}

export default SurveySlider;