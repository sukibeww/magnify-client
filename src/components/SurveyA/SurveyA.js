import React from 'react';
import useForm from 'react-hook-form';
import { Container, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'red'
  },
  radio: {
    
  }
});

const SurveyA = () =>{
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return(
    <>
      <Container maxWidth="sm" className={classes.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <p> Survey A Description</p>
          <label>Option 1</label>
          <input name="answer" type="radio" value="1" ref={register} />
          <label>Option 2</label>
          <input name="answer" type="radio" value="2" ref={register}/>
          <label>Option 3</label>
          <input name="answer" type="radio" value="3" ref={register} labelPlacement="end"/>

          <input type="submit" />
        </form>
      </Container>
    </>
  )
}

export default SurveyA;