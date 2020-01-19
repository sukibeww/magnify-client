import React from "react";
import { getByTestId, render } from "@testing-library/react";
import DesktopNavbar from '../DesktopNavbar';
import { EmployeeContext } from "../../../context/employeeContext";
import { EmployerContext } from "../../../context/employerContext"
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('<DesktopNavbar /> context based conditional rendering', () => {
  test("it should render employee navbar", () => {
    const history = createMemoryHistory()
    const user = { name: "Giorgio" }; 
    const { container } = render(
      <Router history={history}>
        <EmployeeContext.Provider value={user}>
          <DesktopNavbar />
        </EmployeeContext.Provider>
      </Router>
    );
    expect(getByTestId(container, 'employee-navbar')).not.toBeNull()
    expect(getByTestId(container, 'navigation-survey')).not.toBeNull()
    expect(getByTestId(container, 'navigation-result')).not.toBeNull()
    expect(getByTestId(container, 'navigation-vacancies')).not.toBeNull()
  });

  test("it should render employer navbar", () => {
    const history = createMemoryHistory()
    const user = { name: "Giorgio" }; 
    const { container } = render(
      <Router history={history}>
        <EmployerContext.Provider value={user}>
          <DesktopNavbar />
        </EmployerContext.Provider>
      </Router>
    );
    expect(getByTestId(container, 'employer-navbar')).not.toBeNull()
    expect(getByTestId(container, 'navigation-companyvacancies')).not.toBeNull()
    expect(getByTestId(container, 'navigation-delegates')).not.toBeNull()
    expect(getByTestId(container, 'navigation-employees')).not.toBeNull()
  });
});
