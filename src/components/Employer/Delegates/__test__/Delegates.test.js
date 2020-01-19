import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from 'history'
import Delegates from '../Delegates';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { MediaContext } from "../../../../context/mediaContext";
import { EmployerContext } from "../../../../context/employerContext";
import { act } from "react-dom/test-utils";


describe('<SurveyList /> basic rendering', () => {
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
    const getAllDelegates = () => {
      return [
        {
          category: ["a","b"],
          score: {
            rating: 1
          }
        }
      ]
    }
    
  test("Section A should be rendered", () => {
    act(() => {
      const { queryByTestId } = render(
        <ThemeProvider theme={theme}>
          <MediaContext.Provider value={{media: "true"}}>
            <EmployerContext.Provider value={{getAllDelegates: getAllDelegates}}>
              <Delegates />
            </EmployerContext.Provider>
          </MediaContext.Provider>
        </ThemeProvider>
      );
      expect(queryByTestId('delegates-table')).not.toBeNull()
      expect(queryByTestId('delegates-invite')).not.toBeNull()
    }
  )}
  )
})