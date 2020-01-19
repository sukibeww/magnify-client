import React from "react";
import { render } from "@testing-library/react";
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import EmployeeProfileEdit from '../EmployeeProfileEdit';
import { MediaContext } from "../../../../context/mediaContext";
import { EmployeeContext } from "../../../../context/employeeContext";

describe('<EmployeeProfileEdit /> basic rendering', () => {
  test("it should render employee profile edit form", () => {
    const history = createMemoryHistory()
    //dummy info
    const user = {
      displayName: "Sukianto Suteja",
      email: "sukialiong@gmail.com",
      photos: "https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak",
      category: ["Computer", "Telecommunication", "Transport", "Aerospace"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac iaculis turpis, at aliquam justo. Cras feugiat, lorem nec fringilla fermentum, diam turpis interdum felis, eget consequat justo nisl vel mauris. Maecenas nisl felis, pretium eget nibh a, elementum feugiat purus. In hac habitasse platea dictumst. Cras et porttitor dui, ut rutrum enim. Maecenas cursus non diam et tempus. Vestibulum vel ex at leo sagittis semper sit amet ac risus. Curabitur a elit at urna consequat aliquam sed et tortor. Duis suscipit ac tellus a faucibus. Maecenas sed bibendum enim. Proin ac erat metus. Donec ut orci erat. Vestibulum mattis ullamcorper mi, nec suscipit massa sagittis malesuada. Phasellus hendrerit, mauris in ullamcorper mattis, enim libero elementum turpis, ac ullamcorper dolor ligula congue odio. Fusce ut velit sed tortor imperdiet molestie ut eu justo. ",

    }
    const { queryByTestId } = render(
      <Router history={history}>
        <MediaContext.Provider value={{media: "true"}}>
          <EmployeeContext.Provider value={{user}}>
            <EmployeeProfileEdit />
          </EmployeeContext.Provider>
        </MediaContext.Provider>
      </Router>
    );
    expect(queryByTestId('save-button')).not.toBeNull()
    expect(queryByTestId('profile-picture')).not.toBeNull()
    expect(queryByTestId('profile-name')).not.toBeNull()
    expect(queryByTestId('profile-email')).not.toBeNull()
    expect(queryByTestId('profile-category-select')).not.toBeNull()
    expect(queryByTestId('profile-biotextbox')).not.toBeNull()
  });
});
