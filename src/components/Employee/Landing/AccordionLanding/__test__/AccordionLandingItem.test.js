import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AccordionLandingItem from '../AccodionLandingItem';
import { get } from 'http';

afterEach(cleanup)

test('it renders main accodion item component', () => {
  const { getByTestId } = render(<AccordionLandingItem header="header-test" summary="summary-test" initialState={false}/>);
  const accordionItemWrapper = getByTestId('accordion-item-wrapper');
  expect(accordionItemWrapper.children.length).toBe(2);  
});

test('renders the header properly', () => {
  const { getByText } = render(<AccordionLandingItem header="header-test" summary="summary-test" initialState={false} />);
  expect(getByText("header-test")).toBeInTheDocument();
});

test('renders the summary properly for false initial state', () => {
  const { getByTestId } = render(<AccordionLandingItem header="header-test" summary="summary-test" initialState={false}/>);
  const accordionSummary = getByTestId("accordion-item-summary");
  const accordionSummaryClass = accordionSummary.className
  const accordionLandingItemRoots = document.getElementsByClassName(accordionSummaryClass)
  const style = window.getComputedStyle(accordionLandingItemRoots[0])
  expect(style.opacity).toBe("")
});

test('renders the summary properly for true initial state', () => {
  const { getByTestId } = render(<AccordionLandingItem header="header-test" summary="summary-test" initialState={true}/>);
  const accordionSummary = getByTestId("accordion-item-summary");
  const accordionSummaryClass = accordionSummary.className
  const accordionLandingItemRoots = document.getElementsByClassName(accordionSummaryClass)
  const style = window.getComputedStyle(accordionLandingItemRoots[0])
  expect(style.opacity).toBe("1")
});

test('expand feature on the summary' , async () => {
  const { getByTestId } = render(<AccordionLandingItem header="header-test" summary="summary-test" initialState={false}/>);
  expect(await getByTestId("drop-down")).toBeInTheDocument();
  fireEvent.click(getByTestId("accordion-item-wrapper"))
  expect(await getByTestId("drop-up")).toBeInTheDocument();
})

test('collapse feature on the summary' , async () => {
  const { getByTestId } = render(<AccordionLandingItem header="header-test" summary="summary-test" initialState={true}/>);
  expect(await getByTestId("drop-up")).toBeInTheDocument();
  fireEvent.click(getByTestId("accordion-item-wrapper"))
  expect(await getByTestId("drop-down")).toBeInTheDocument();
})