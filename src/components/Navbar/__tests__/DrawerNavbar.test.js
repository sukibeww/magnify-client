import React from 'react';
import { render, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DrawerNavbar from '../DrawerNavbar';

test("Login button should only visible when the user is not logged in", ()=>{
  const { getByText } = render(<DrawerNavbar />)
  expect(getByText("Login")).toBeInTheDocument();
})

test("Burger menu should only be visible after login", () => {
  const { queryByTestId ,getByText} = render(<DrawerNavbar />);
  expect(queryByTestId("test-burgermenu")).not.toBeInTheDocument();
  fireEvent.click(getByText("Login"))
  expect(queryByTestId("test-burgermenu")).toBeInTheDocument();
})

test("Survey menu item should be inside the drawer menu", () => {
  const { getByText, getByTestId, queryByTestId } = render(<DrawerNavbar />)
  fireEvent.click(getByText("Login"))
  expect(queryByTestId("test-survey")).not.toBeInTheDocument();
  fireEvent.click(getByTestId("test-burgermenu"))
  expect(getByTestId("test-survey")).toBeInTheDocument();
})

test("Result menu item should be inside the drawer menu", () => {
  const { getByText, getByTestId, queryByTestId } = render(<DrawerNavbar />)
  fireEvent.click(getByText("Login"))
  expect(queryByTestId("test-result")).not.toBeInTheDocument();
  fireEvent.click(getByTestId("test-burgermenu"))
  expect(getByTestId("test-result")).toBeInTheDocument();
})

test("Interview menu item should be inside the drawer menu", () => {
  const { getByText, getByTestId, queryByTestId } = render(<DrawerNavbar />)
  fireEvent.click(getByText("Login"))
  expect(queryByTestId("test-interview")).not.toBeInTheDocument();
  fireEvent.click(getByTestId("test-burgermenu"))
  expect(getByTestId("test-interview")).toBeInTheDocument();
})

test("Vacancy menu item should be inside the drawer menu", () => {
  const { getByText, getByTestId, queryByTestId } = render(<DrawerNavbar />)
  fireEvent.click(getByText("Login"))
  expect(queryByTestId("test-vacancy")).not.toBeInTheDocument();
  fireEvent.click(getByTestId("test-burgermenu"))
  expect(getByTestId("test-vacancy")).toBeInTheDocument();
})

test("Log out menu item should be inside the drawer menu", () => {
  const { getByText, getByTestId, queryByTestId } = render(<DrawerNavbar />)
  fireEvent.click(getByText("Login"))
  expect(queryByTestId("test-logout")).not.toBeInTheDocument();
  fireEvent.click(getByTestId("test-burgermenu"))
  expect(getByTestId("test-logout")).toBeInTheDocument();
})

test("Account settings menu item should be inside the drawer menu", () => {
  const { getByText, getByTestId, queryByTestId } = render(<DrawerNavbar />)
  fireEvent.click(getByText("Login"))
  expect(queryByTestId("test-account-settings")).not.toBeInTheDocument();
  fireEvent.click(getByTestId("test-burgermenu"))
  expect(getByTestId("test-account-settings")).toBeInTheDocument();
})

