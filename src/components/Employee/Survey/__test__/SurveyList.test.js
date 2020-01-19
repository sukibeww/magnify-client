import React from "react";
import { render } from "@testing-library/react";
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import SurveyList from '../SurveyList';
import { EmployeeContext } from "../../../../context/employeeContext";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { MediaContext } from "../../../../context/mediaContext";


describe('<SurveyList /> basic rendering', () => {
  const history = createMemoryHistory()
    //dummy info
    const user = {
      displayName: "Sukianto Suteja",
      email: "sukialiong@gmail.com",
      photos: "https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak",
      category: undefined,
      bio: undefined,
      survey: [],
      current: {
        current_section: "A",
        current_count: 1
      },
      score: {
        kinetic: undefined,
        productivity: undefined,
        visual: undefined,
        optimism: undefined,
        social: undefined,
        rating: undefined,
        created: undefined
      }
    }
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#283593'
        },
        secondary: {
          main: '#ffa726'
        },
        viewPort: 'small'
      }
    })
  test("Section A should be rendered", () => {
    const { queryByTestId, container } = render(
      <ThemeProvider theme={theme}>
        <MediaContext.Provider value={{media: true}}>
          <Router history={history}>
            <EmployeeContext.Provider value={{user}}>
              <SurveyList />
            </EmployeeContext.Provider>
          </Router>
        </MediaContext.Provider>
      </ThemeProvider>
    );
    expect(queryByTestId('survey-a')).not.toBeNull()
    expect(queryByTestId('survey-stepper')).not.toBeNull()
    expect(queryByTestId('survey-save-button')).not.toBeNull()
  });

  test("Section B should be rendered", () => {
    user.current.current_section = "B"
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <MediaContext.Provider value={{media: true}}>
          <Router history={history}>
            <EmployeeContext.Provider value={{user}}>
              <SurveyList />
            </EmployeeContext.Provider>
          </Router>
        </MediaContext.Provider>
      </ThemeProvider>
    );
    expect(queryByTestId('survey-b')).not.toBeNull()
    expect(queryByTestId('survey-stepper')).not.toBeNull()
    expect(queryByTestId('survey-save-button')).not.toBeNull()
  });

  test("Section C should be rendered", () => {
    user.current.current_section = "C"
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <MediaContext.Provider value={{media: true}}>
          <Router history={history}>
            <EmployeeContext.Provider value={{user}}>
              <SurveyList />
            </EmployeeContext.Provider>
          </Router>
        </MediaContext.Provider>
      </ThemeProvider>
    );
    expect(queryByTestId('survey-c')).not.toBeNull()
    expect(queryByTestId('survey-stepper')).not.toBeNull()
    expect(queryByTestId('survey-save-button')).not.toBeNull()
  });

  test("Section D should be rendered", () => {
    user.current.current_section = "D"
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <MediaContext.Provider value={{media: true}}>
          <Router history={history}>
            <EmployeeContext.Provider value={{user}}>
              <SurveyList />
            </EmployeeContext.Provider>
          </Router>
        </MediaContext.Provider>
      </ThemeProvider>
    );
    expect(queryByTestId('survey-d')).not.toBeNull()
    expect(queryByTestId('survey-stepper')).not.toBeNull()
    expect(queryByTestId('survey-save-button')).not.toBeNull()
  });
});