import React, { useState , useRef , useEffect, useContext } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from '@material-ui/core'
import { MediaContext } from '../../../context/mediaContext';

const salaryExpectations = [
  "60000-70000",
  "70000-80000",
  "80000-90000",
  "90000-100000",
  "11000-120000",
  "120000-130000",
  "140000-150000",
]


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    maxWidth: "max-content",
    boxShadow: "5px 5px 8px rgb(163, 177, 198), -5px -5px 8px #FFFFFF",
    border: "none"
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: "0.5vw 0.5vw"
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  selectedCategory: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: "1em",
    opacity: 0.5,
    fontWeight: 400,
    maxWidth: "80%", 
    textAlign: "center"
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SalarySelect = (props) => {
  const classes = useStyles();
  const inputLabel = useRef(null);
  const [categories, setCategories] = useState(props.current || []);
  const [labelWidth, setLabelWidth] = useState(0);
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = async (event) => {
    setCategories(() => event.target.value)
    props.handleChange(event.target.value)
  };

  return(
    <>
      <FormControl data-testid="profile-category-select" className={classes.formControl} variant="outlined">  
        <InputLabel ref={inputLabel} id="category-select-label">Salary Expectation</InputLabel>
        <Select
          labelWidth={labelWidth}
          variant="outlined"
          labelId="category-select-label"
          id="category-select"
          defaultValue={props.current}
          value={categories}
          onChange={handleChange}
          renderValue={selected => `${selected}`}
          MenuProps={MenuProps}
        >
          {salaryExpectations.map(category => (
            <MenuItem key={category} value={category}>
              <Checkbox checked={categories.indexOf(category) > -1}/>
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </> 
  )
}

export default SalarySelect