import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { MediaContext } from '../../../context/mediaContext';


const AccordionWrapper = styled.div`
  :hover {
    transition: ${(props) => props.media ? "all 0.3s ease-out" : "none"};
    transform: ${(props) => props.media ? "scale(1.1)" : "none"} 
  }
`

const AccordionHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.media ? "flex-start" : "center"};
  align-items: center;
  cursor: pointer;
`

const AccordionSubheader = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.media ? "2em" : "1.5em"};
  background: linear-gradient(0.25turn, #B973F9, #6ED3FC, #B973F9, #6ED3FC);
  -webkit-background-clip: text;
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
  text-align: ${(props) => props.media ? "left" : "center"};
  opacity: ${(props) => props.activated ? 1 : 0};
  max-height: ${(props) => props.activated ? "30vh" : 0};
  overflow-y: hidden; 
  cursor: pointer;
` 

const AccordionLandingItem = (props) => {
  const [active ,setActive] = useState(props.initialState);
  const mediaContext = useContext(MediaContext);
  const { media } = mediaContext;
  const toggleActive = () =>{
    setActive((prevState) => {
      return !prevState
    })
  }
  return(
    <AccordionWrapper onClick={toggleActive}    data-testid="accordion-item-wrapper" media={media.toString() ? media.toString() : null} onTouchCancel={toggleActive}>
      <AccordionHeaderWrapper media={media ? media.toString() : null}>
        <AccordionSubheader media={media ? media.toString() : null}>{props.header}</AccordionSubheader>
        {active ? 
        <ArrowDropUpIcon color="secondary" fontSize="large" data-testid="drop-up"/> : 
        <ArrowDropDownIcon color="secondary" fontSize="large" data-testid="drop-down" />}
      </AccordionHeaderWrapper>
      <AccordionParagraph activated={active} data-testid="accordion-item-summary" media={media ? media.toString() : null}>
        {props.summary}
      </AccordionParagraph>
    </AccordionWrapper>
  )
}

export default AccordionLandingItem;

