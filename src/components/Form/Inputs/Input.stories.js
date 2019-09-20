import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Switch from "./Switch";

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

storiesOf("Switch", module).add("Radio Buttons", () => {
  const Checkbox = () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <ThemeProvider theme={theme}>
        <Switch
          type="radio"
          name="gender"
          value="male"
          label="Male"
          checked={checked === "male"}
          onChange={e => setChecked(e.target.value)}
        />
        <Switch
          type="radio"
          name="gender"
          value="female"
          label="Female"
          checked={checked === "female"}
          onChange={e => setChecked(e.target.value)}
        />
        <Switch
          type="radio"
          name="gender"
          value="others"
          label="Others"
          checked={checked === "others"}
          onChange={e => setChecked(e.target.value)}
        />
      </ThemeProvider>
    );
  };
  return <Checkbox />;
});
