import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DesktopNavbar from '../DesktopNavbar';

test("Login button should only visible when the user is not logged in", ()=>{
  const { getByText } = render(<DesktopNavbar />)
  expect(getByText("Login")).toBeInTheDocument();
})

test("Log out button should only visible when the user is logged in", ()=>{
  const { getByText } = render(<DesktopNavbar />)
  fireEvent.click(getByText("Login"));
  expect(getByText("Log out")).toBeInTheDocument();
})

test("Survey menu item should not be visible when the user is not logged in", () => {
  const { queryByText, getByText } = render(<DesktopNavbar />)
  expect(queryByText("Survey")).not.toBeInTheDocument();
  fireEvent.click(getByText("Login"));
  expect(getByText("Survey")).toBeInTheDocument();
})

test("Result menu item should not be visible when the user is not logged in", () => {
  const { queryByText, getByText } = render(<DesktopNavbar />)
  expect(queryByText("Result")).not.toBeInTheDocument();
  fireEvent.click(getByText("Login"));
  expect(getByText("Result")).toBeInTheDocument();
})

test("Interview menu item should not be visible when the user is not logged in", () => {
  const { queryByText, getByText } = render(<DesktopNavbar />)
  expect(queryByText("Interview")).not.toBeInTheDocument();
  fireEvent.click(getByText("Login"));
  expect(getByText("Interview")).toBeInTheDocument();
})

test("Vacancy menu item should not be visible when the user is not logged in", () => {
  const { queryByText, getByText } = render(<DesktopNavbar />)
  expect(queryByText("Vacancy")).not.toBeInTheDocument();
  fireEvent.click(getByText("Login"));
  expect(getByText("Vacancy")).toBeInTheDocument();
})
