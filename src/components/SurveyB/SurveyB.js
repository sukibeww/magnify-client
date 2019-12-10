import React from 'react';
import useForm from 'react-hook-form';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'red'
  }
});

const SurveyB = () =>{
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return(
    <>
      <Container maxWidth="sm" className={classes.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <p>Survey B Ouestion</p>
          <label>Option 1</label>
          <input name="answer" type="radio" value="1" ref={register}/>
          <label>Option 2</label>
          <input name="answer" type="radio" value="2" ref={register}/>

          <input type="submit" />
        </form>
      </Container>
    </>
  )
}

export default SurveyB;