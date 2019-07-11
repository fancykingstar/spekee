import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import HorizontalNonLinearStepper from "./container";

const theme = createMuiTheme({
  palette: {
    success: {
      main: "#03cb26"
    }
  }
});

function getSteps() {
  return [{ divide: 2 }, { divide: 3 }, {}];
}

storiesOf("Stepper", module).add("Horizontal Non Linear Stepper", () => {
  return (
    <ThemeProvider theme={theme}>
      <HorizontalNonLinearStepper steps={getSteps()} />
    </ThemeProvider>
  );
});
