import React from "react";
import { render } from "@testing-library/react";
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import RegistrationPage from '../RegistrationPage';
import { MediaContext } from "../../../../context/mediaContext";
import { EmployeeContext } from "../../../../context/employeeContext";

describe('<RegistrationPage /> basic rendering', () => {
  test("it should the registration form with 1 select field 1 text box and 1 save button", () => {
    const history = createMemoryHistory()
    //dummy info
    const user = {
      displayName: "Sukianto Suteja",
      email: "sukialiong@gmail.com",
      photos: "https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak",
      category: undefined,
      bio: undefined,
    }
    const { queryByTestId } = render(
      <Router history={history}>
        <MediaContext.Provider value={{media: "true"}}>
          <EmployeeContext.Provider value={{user}}>
            <RegistrationPage />
          </EmployeeContext.Provider>
        </MediaContext.Provider>
      </Router>
    );
    expect(queryByTestId('profile-category-select')).not.toBeNull()
    expect(queryByTestId('profile-biotextbox')).not.toBeNull()
    expect(queryByTestId('save-button')).not.toBeNull()
    expect(queryByTestId('register-form')).not.toBeNull()
  });
});
