import React from 'react';
import { Router } from 'react-router-dom'
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AccordionLanding from '../AccodionLanding';
import { MediaContext } from '../../../../../context/mediaContext';
import { createMemoryHistory } from 'history'

test('it renders main accodion component', () => {
  const history = createMemoryHistory()
  const { getByTestId } = render(
    <Router history={history}>
      <MediaContext.Provider value={{media: true}}>
        <AccordionLanding />
      </MediaContext.Provider>
    </Router>
  );
  const accordionWrapper = getByTestId('accordion-wrapper');
  expect(accordionWrapper.children.length).toBe(5);  
});