import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Form } from "react-final-form";
import { DetailsFormSegment } from "./Onboard/Onboard";
import { StudyChoicesAFormSegment } from "./Onboard/Onboard";

const theme = createMuiTheme({
  palette: {
    success: {
      main: "#03cb26"
    },
    others: {
      azul: "#2f5bea"
    }
  },
  typography: {
    fontFamily: ["Raleway"],
    body1: {
      fontSize: "14px"
    }
  }
});

storiesOf("Forms", module)
  .add("1. Details Form", () => {
    return (
      <ThemeProvider theme={theme}>
        <Form onSubmit={() => undefined}>
          {({ handleSubmit, form, submitting, pristine, values, ...props }) => {
            return (
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{
                  padding: "37px",
                  display: "grid",
                  gridTemplateColumns: "40px repeat(11, 1fr)",
                  fontFamily: "Raleway"
                }}
              >
                <DetailsFormSegment>
                  <div style={{ marginTop: "29px", gridColumn: "2 / span 11" }}>
                    <button type="submit">Next: Study Choices</button>
                  </div>
                </DetailsFormSegment>
                <pre style={{ gridColumn: "2 / span 12", marginTop: "25px" }}>
                  {JSON.stringify(values, undefined, 2)}
                </pre>
              </form>
            );
          }}
        </Form>
      </ThemeProvider>
    );
  })
  .add("2. Study Choices Form A", () => {
    return (
      <ThemeProvider theme={theme}>
        <Form onSubmit={() => undefined}>
          {({ handleSubmit, form, submitting, pristine, values, ...props }) => {
            return (
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{
                  padding: "37px",
                  display: "grid",
                  gridTemplateColumns: "40px repeat(11, 1fr)",
                  fontFamily: "Raleway"
                }}
              >
                <StudyChoicesAFormSegment>
                  <div style={{ marginTop: "73px", gridColumn: "2 / span 11" }}>
                    <button type="button" style={{ marginRight: "21px" }}>
                      Back
                    </button>
                    <button type="submit">Next</button>
                  </div>
                </StudyChoicesAFormSegment>
                <pre style={{ gridColumn: "2 / span 12", marginTop: "25px" }}>
                  {JSON.stringify(values, undefined, 2)}
                </pre>
              </form>
            );
          }}
        </Form>
      </ThemeProvider>
    );
  });
