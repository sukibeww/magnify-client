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
  Chip,
  Avatar
} from '@material-ui/core'
import { MediaContext } from '../../../context/mediaContext';

const industries = [
  "Aerospace",
  "Transport",
  "Computer",
  "Telecommunication",
  "Agriculture",
  "Construction",
  "Education",
  "Pharmaceutical", 
  "Food",
  "Health care", 
  "Hospitality",
  "Entertainment", 
  "News Media",
  "Energy",
  "Manufacturing", 
  "Music",
  "Mining",
  "Worldwide web",
  "Electronics" 
]

const Categories = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  opacity: 0.8;
  max-width: ${(props) => props.media ? "40vw" : "inherit"};
  flex-wrap: wrap;
`

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

const CategorySelect = (props) => {
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
        <InputLabel ref={inputLabel} id="category-select-label">Industry Categories</InputLabel>
        <Select
          labelWidth={labelWidth}
          variant="outlined"
          labelId="category-select-label"
          id="category-select"
          multiple
          defaultValue={props.current}
          value={categories}
          onChange={handleChange}
          renderValue={selected => `${selected.length} industry selected`}
          MenuProps={MenuProps}
        >
          {industries.map(category => (
            <MenuItem key={category} value={category}>
              <Checkbox checked={categories.indexOf(category) > -1}/>
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Categories media={media}>
        {categories.map((category, index) => {
          return(
            <Chip
              key={`category-${index}`}
              className={classes.chip}
              avatar={<Avatar>{category.charAt(0)}</Avatar>}
              label={category}
              clickable
              color="primary"
            />
          )
        })}
      </Categories>
    </> 
  )
}

export default CategorySelect