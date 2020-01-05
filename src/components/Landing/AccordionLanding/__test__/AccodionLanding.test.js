import React from 'react';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AccordionLanding from '../AccodionLanding';

test('it renders main accodion component', () => {
  const { getByTestId } = render(<AccordionLanding />);
  const accordionWrapper = getByTestId('accordion-wrapper');
  expect(accordionWrapper.children.length).toBe(5);  
});