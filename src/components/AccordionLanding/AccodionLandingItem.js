import React, {useState} from 'react'
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


const AccordionWrapper = styled.div`
  :hover {
    transition: all 0.3s ease-out;
    transform: scale(1.1) 
  }
`

const AccordionHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`

const AccordionSubheader = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 2em;
  background: linear-gradient(0.25turn, #B973F9, #6ED3FC, #B973F9, #6ED3FC);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 300;
  margin: 0;
`

const AccordionParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.5em;
  transition: all 0.5s ease-out;
  opacity: ${(props) => props.activated ? 1 : 0};
  max-height: ${(props) => props.activated ? "30vh" : 0};
  overflow-y: hidden;
  
`

const AccordionLandingItem = (props) => {
  const [active ,setActive] = useState(props.initialState);
  const toggleActive = () =>{
    setActive((prevState) => {
      return !prevState
    })
  }
  return(
    <AccordionWrapper onClick={toggleActive}>
      <AccordionHeaderWrapper >
        <AccordionSubheader>{props.header}</AccordionSubheader>
        {active ? 
        <ArrowDropUpIcon color="secondary" fontSize="large" /> : 
        <ArrowDropDownIcon color="secondary" fontSize="large" />}
      </AccordionHeaderWrapper>
      <AccordionParagraph activated={active}>
        {props.summary}
      </AccordionParagraph>
    </AccordionWrapper>
  )
}

export default AccordionLandingItem;

