import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Form } from "react-final-form";
import { DetailsFormSegment } from "./Onboard/Onboard";
import { StudyChoicesAFormSegment } from "./Onboard/Onboard";
import { StudyChoicesBFormSegment } from "./Onboard/Onboard";
import { SuccessTeamAFormSegment } from "./Onboard/Onboard";
import { SuccessTeamBFormSegment } from "./Onboard/Onboard";
import { BlockChainFormSegment } from "./Onboard/Onboard";
import Wizard from "./Wizard";

import styles from "./Form_stories.module.css";

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
        <div
          style={{
            width: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(12, 65px)",
            gridColumnGap: "30px"
          }}
        >
          <Form onSubmit={() => undefined}>
            {({
              handleSubmit,
              form,
              submitting,
              pristine,
              values,
              ...props
            }) => {
              return (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  style={{
                    marginLeft: "65px",
                    gridColumn: "1 / span 11",
                    display: "grid",
                    gridTemplateColumns: "40px repeat(11, 1fr)",
                    fontFamily: "Raleway"
                  }}
                >
                  <DetailsFormSegment>
                    <div
                      style={{ marginTop: "29px", gridColumn: "2 / span 11" }}
                    >
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
        </div>
      </ThemeProvider>
    );
  })
  .add("2.A Study Choices Form A", () => {
    return (
      <ThemeProvider theme={theme}>
        <div
          style={{
            width: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(12, 65px)",
            gridColumnGap: "30px"
          }}
        >
          <Form onSubmit={() => undefined}>
            {({
              handleSubmit,
              form,
              submitting,
              pristine,
              values,
              ...props
            }) => {
              return (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  style={{
                    marginLeft: "65px",
                    gridColumn: "1 / span 11",
                    display: "grid",
                    gridTemplateColumns: "40px repeat(11, 1fr)",
                    fontFamily: "Raleway"
                  }}
                >
                  <StudyChoicesAFormSegment>
                    <div
                      style={{ marginTop: "73px", gridColumn: "2 / span 11" }}
                    >
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
        </div>
      </ThemeProvider>
    );
  })
  .add("2.B Study Choices Form B", () => {
    return (
      <ThemeProvider theme={theme}>
        <div
          style={{
            width: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(12, 65px)",
            gridColumnGap: "30px"
          }}
        >
          <Form onSubmit={() => undefined}>
            {({
              handleSubmit,
              form,
              submitting,
              pristine,
              values,
              ...props
            }) => {
              return (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  style={{
                    marginLeft: "65px",
                    gridColumn: "1 / span 11",
                    display: "grid",
                    gridTemplateColumns: "40px repeat(11, 1fr)",
                    fontFamily: "Raleway"
                  }}
                >
                  <StudyChoicesBFormSegment>
                    <div
                      style={{ marginTop: "73px", gridColumn: "2 / span 11" }}
                    >
                      <button type="button" style={{ marginRight: "21px" }}>
                        Back
                      </button>
                      <button type="submit">Next: Success Team</button>
                    </div>
                  </StudyChoicesBFormSegment>
                  <pre style={{ gridColumn: "2 / span 12", marginTop: "25px" }}>
                    {JSON.stringify(values, undefined, 2)}
                  </pre>
                </form>
              );
            }}
          </Form>
        </div>
      </ThemeProvider>
    );
  })
  .add("3.A Success Team Form A", () => {
    return (
      <ThemeProvider theme={theme}>
        <div
          style={{
            width: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(12, 65px)",
            gridColumnGap: "30px"
          }}
        >
          <Form onSubmit={() => undefined}>
            {({
              handleSubmit,
              form,
              submitting,
              pristine,
              values,
              ...props
            }) => {
              return (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  style={{
                    marginLeft: "65px",
                    gridColumn: "1 / span 11",
                    display: "grid",
                    gridTemplateColumns: "40px repeat(11, 1fr)",
                    fontFamily: "Raleway"
                  }}
                >
                  <SuccessTeamAFormSegment>
                    <div
                      style={{ marginTop: "82px", gridColumn: "2 / span 11" }}
                    >
                      <button type="button" style={{ marginRight: "21px" }}>
                        Back
                      </button>
                      <button type="submit">Next</button>
                    </div>
                  </SuccessTeamAFormSegment>
                  <pre style={{ gridColumn: "2 / span 12", marginTop: "25px" }}>
                    {JSON.stringify(values, undefined, 2)}
                  </pre>
                </form>
              );
            }}
          </Form>
        </div>
      </ThemeProvider>
    );
  })
  .add("3.B Success Team Form B", () => {
    return (
      <ThemeProvider theme={theme}>
        <div
          style={{
            width: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(12, 65px)",
            gridColumnGap: "30px"
          }}
        >
          <Form onSubmit={() => undefined}>
            {({
              handleSubmit,
              form,
              submitting,
              pristine,
              values,
              ...props
            }) => {
              return (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  style={{
                    marginLeft: "65px",
                    gridColumn: "1 / span 11",
                    display: "grid",
                    gridTemplateColumns: "40px repeat(11, 1fr)",
                    fontFamily: "Raleway"
                  }}
                >
                  <SuccessTeamBFormSegment>
                    <div
                      style={{ marginTop: "82px", gridColumn: "2 / span 11" }}
                    >
                      <button type="button" style={{ marginRight: "21px" }}>
                        Back
                      </button>
                      <button type="submit">Next: Blockchain Account</button>
                    </div>
                  </SuccessTeamBFormSegment>
                  <pre style={{ gridColumn: "2 / span 12", marginTop: "25px" }}>
                    {JSON.stringify(values, undefined, 2)}
                  </pre>
                </form>
              );
            }}
          </Form>
        </div>
      </ThemeProvider>
    );
  })
  .add("4 Blockchain Account Form", () => {
    return (
      <ThemeProvider theme={theme}>
        <div
          style={{
            width: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(12, 65px)",
            gridColumnGap: "30px"
          }}
        >
          <Form onSubmit={() => undefined}>
            {({
              handleSubmit,
              form,
              submitting,
              pristine,
              values,
              ...props
            }) => {
              return (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  style={{
                    marginLeft: "65px",
                    gridColumn: "1 / span 11",
                    display: "grid",
                    gridTemplateColumns: "40px repeat(11, 1fr)",
                    fontFamily: "Raleway"
                  }}
                >
                  <BlockChainFormSegment>
                    <div
                      style={{
                        marginTop: "49px",
                        gridColumn: "2 / span 11",
                        display: "flex"
                      }}
                    >
                      <button type="button" style={{ marginRight: "21px" }}>
                        Back
                      </button>
                      <button
                        type="submit"
                        style={{ marginRight: "20px", width: "266px" }}
                      >
                        Submit
                      </button>
                      <span
                        style={{
                          width: "300px",
                          fontStyle: "italic",
                          color: "#adadad"
                        }}
                      >
                        Next Step: You will receive an OTP to verify your
                        account.
                      </span>
                    </div>
                  </BlockChainFormSegment>
                  <pre style={{ gridColumn: "2 / span 12", marginTop: "25px" }}>
                    {JSON.stringify(values, undefined, 2)}
                  </pre>
                </form>
              );
            }}
          </Form>
        </div>
      </ThemeProvider>
    );
  })
  .add("Onboard Wizard", () => {
    return (
      <ThemeProvider theme={theme}>
        <div
          style={{
            width: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(12, 65px)",
            gridColumnGap: "30px"
          }}
        >
          <Wizard
            className={styles.onboard_form_container}
            onSubmit={() => false}
          >
            <Wizard.Page group={0}>
              {({ handlePrevious }) => (
                <DetailsFormSegment>
                  <div style={{ marginTop: "29px", gridColumn: "2 / span 11" }}>
                    <button type="submit">Next: Study Choices</button>
                  </div>
                </DetailsFormSegment>
              )}
            </Wizard.Page>
            <Wizard.Page group={1}>
              {({ handlePrevious }) => (
                <StudyChoicesAFormSegment>
                  <div style={{ marginTop: "73px", gridColumn: "2 / span 11" }}>
                    <button
                      type="button"
                      style={{ marginRight: "21px" }}
                      onClick={handlePrevious}
                    >
                      Back
                    </button>
                    <button type="submit">Next</button>
                  </div>
                </StudyChoicesAFormSegment>
              )}
            </Wizard.Page>
            <Wizard.Page group={1}>
              {({ handlePrevious }) => (
                <StudyChoicesBFormSegment>
                  <div style={{ marginTop: "73px", gridColumn: "2 / span 11" }}>
                    <button
                      type="button"
                      style={{ marginRight: "21px" }}
                      onClick={handlePrevious}
                    >
                      Back
                    </button>
                    <button type="submit">Next: Success Team</button>
                  </div>
                </StudyChoicesBFormSegment>
              )}
            </Wizard.Page>
            <Wizard.Page group={2}>
              {({ handlePrevious }) => (
                <SuccessTeamAFormSegment>
                  <div style={{ marginTop: "82px", gridColumn: "2 / span 11" }}>
                    <button
                      type="button"
                      style={{ marginRight: "21px" }}
                      onClick={handlePrevious}
                    >
                      Back
                    </button>
                    <button type="submit">Next</button>
                  </div>
                </SuccessTeamAFormSegment>
              )}
            </Wizard.Page>
            <Wizard.Page group={2}>
              {({ handlePrevious }) => (
                <SuccessTeamBFormSegment>
                  <div style={{ marginTop: "82px", gridColumn: "2 / span 11" }}>
                    <button
                      type="button"
                      style={{ marginRight: "21px" }}
                      onClick={handlePrevious}
                    >
                      Back
                    </button>
                    <button type="submit">Next: Blockchain Account</button>
                  </div>
                </SuccessTeamBFormSegment>
              )}
            </Wizard.Page>
            <Wizard.Page group={3}>
              {({ handlePrevious }) => (
                <BlockChainFormSegment>
                  <div
                    style={{
                      marginTop: "49px",
                      gridColumn: "2 / span 11",
                      display: "flex"
                    }}
                  >
                    <button
                      type="button"
                      style={{ marginRight: "21px" }}
                      onClick={handlePrevious}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      style={{ marginRight: "20px", width: "266px" }}
                    >
                      Submit
                    </button>
                    <span
                      style={{
                        width: "300px",
                        fontStyle: "italic",
                        color: "#adadad"
                      }}
                    >
                      Next Step: You will receive an OTP to verify your account.
                    </span>
                  </div>
                </BlockChainFormSegment>
              )}
            </Wizard.Page>
          </Wizard>
        </div>
      </ThemeProvider>
    );
  });
