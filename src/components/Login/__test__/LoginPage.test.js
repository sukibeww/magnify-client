import React from "react";
import { render, getByTestId } from "@testing-library/react";
import LoginPage from '../LoginPage';
import { MediaContext } from "../../../context/mediaContext";

describe('<LoginPage /> basic rendering', () => {
  test("it should render two login option for the user", () => {
    const user = {displayName: "Davis"}
    const { container } = render(
      <MediaContext.Provider value={{media: true}}>
        <LoginPage user={user} />
      </MediaContext.Provider>
    );
    expect(getByTestId(container, 'login-employee')).not.toBeNull()
    expect(getByTestId(container, 'login-employer')).not.toBeNull()
  });
});
