import React from 'react';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Landing from '../Landing';

test('it renders two main landing component', () => {
  const { getByTestId } = render(<Landing />);
  const landingWrapper = getByTestId('landing-wrapper');
  expect(landingWrapper.children.length).toBe(2);  
});