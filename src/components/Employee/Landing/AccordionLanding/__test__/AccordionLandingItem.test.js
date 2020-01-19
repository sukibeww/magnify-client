import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AccordionLandingItem from '../AccodionLandingItem';
import { MediaContext } from '../../../../../context/mediaContext';

afterEach(cleanup)

test('it renders main accodion item component', () => {
  const { getByTestId } = render(
    <MediaContext.Provider value={{media: true}}>
      <AccordionLandingItem header="header-test" summary="summary-test" initialState={false}/>
    </MediaContext.Provider>
  );
  const accordionItemWrapper = getByTestId('accordion-item-wrapper');
  expect(accordionItemWrapper.children.length).toBe(2);  
});

test('renders the header properly', () => {
  const { getByText } = render(
    <MediaContext.Provider value={{media: true}}>
      <AccordionLandingItem header="header-test" summary="summary-test" initialState={false}/>
    </MediaContext.Provider>
  );
  expect(getByText("header-test")).toBeInTheDocument();
});

test('renders the summary properly for false initial state', () => {
  const { getByTestId } = render(
    <MediaContext.Provider value={{media: true}}>
      <AccordionLandingItem header="header-test" summary="summary-test" initialState={false}/>
    </MediaContext.Provider>
  );
  const accordionSummary = getByTestId("accordion-item-summary");
  const accordionSummaryClass = accordionSummary.className
  const accordionLandingItemRoots = document.getElementsByClassName(accordionSummaryClass)
  const style = window.getComputedStyle(accordionLandingItemRoots[0])
  expect(style.opacity).toBe("")
});

test('expand feature on the summary' , async () => {
  const { getByTestId } = render(
    <MediaContext.Provider value={{media: true}}>
      <AccordionLandingItem header="header-test" summary="summary-test" initialState={false}/>
    </MediaContext.Provider>
  );
  expect(await getByTestId("drop-down")).toBeInTheDocument();
  fireEvent.click(getByTestId("accordion-item-wrapper"))
  expect(await getByTestId("drop-up")).toBeInTheDocument();
})