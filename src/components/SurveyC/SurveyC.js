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

const SurveyC = () =>{
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return(
    <>
      <Container maxWidth="sm" className={classes.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Survey C Description select 1-4 for each Q</p>

        <p>Question 1</p>
          <label>1</label>
          <input name="answer" type="radio" value="1" ref={register}/>
          <label>2</label>
          <input name="answer" type="radio" value="2" ref={register}/>
          <label>3</label>
          <input name="answer" type="radio" value="3" ref={register} labelPlacement="end"/>
          <label>4</label>
          <input name="answer" type="radio" value="3" ref={register}/>

          <p>Question 2</p>
          <label>1</label>
          <input name="answer" type="radio" value="1" ref={register}/>
          <label>2</label>
          <input name="answer" type="radio" value="2" ref={register}/>
          <label>3</label>
          <input name="answer" type="radio" value="3" ref={register} labelPlacement="end"/>
          <label>4</label>
          <input name="answer" type="radio" value="3" ref={register}/>

          <p>Question 3</p>
          <label>1</label>
          <input name="answer" type="radio" value="1" ref={register}/>
          <label>2</label>
          <input name="answer" type="radio" value="2" ref={register}/>
          <label>3</label>
          <input name="answer" type="radio" value="3" ref={register} labelPlacement="end"/>
          <label>4</label>
          <input name="answer" type="radio" value="3" ref={register}/>


          <input type="submit" />
        </form>
      </Container>
    </>
  )
}

export default SurveyC;