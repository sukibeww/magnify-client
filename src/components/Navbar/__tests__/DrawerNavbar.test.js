import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DrawerNavbar from '../DrawerNavbar';
import { EmployeeContext } from "../../../context/employeeContext";
import { EmployerContext } from "../../../context/employerContext"
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'


describe('<DrawerNavbar /> context based conditional rendering', () => {
  test("it should render employee drawer navbar", () => {
    const history = createMemoryHistory()
    const user = { name: "Giorgio" }; 
    const { queryByTestId } = render(
      <Router history={history}>
        <EmployeeContext.Provider value={user}>
          <DrawerNavbar />
        </EmployeeContext.Provider>
      </Router>
    );
    expect(queryByTestId('navigation-menu')).not.toBeNull()
    fireEvent.click(queryByTestId('navigation-menu'))
    expect(queryByTestId('employee-navbar')).not.toBeNull()
    expect(queryByTestId('navigation-survey')).not.toBeNull()
    expect(queryByTestId('navigation-result')).not.toBeNull()
    expect(queryByTestId('navigation-vacancies')).not.toBeNull()
  });

  test("it should render employer drawer navbar", () => {
    const history = createMemoryHistory()
    const user = { name: "Giorgio" }; 
    const { queryByTestId } = render(
      <Router history={history}>
        <EmployerContext.Provider value={user}>
          <DrawerNavbar />
        </EmployerContext.Provider>
      </Router>
    );
    expect(queryByTestId('navigation-menu')).not.toBeNull()
    fireEvent.click(queryByTestId('navigation-menu'))
    expect(queryByTestId('employer-navbar')).not.toBeNull()
    expect(queryByTestId('navigation-companyvacancies')).not.toBeNull()
    expect(queryByTestId('navigation-delegates')).not.toBeNull()
    expect(queryByTestId('navigation-employees')).not.toBeNull()
  });
});
