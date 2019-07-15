import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import styles from "./Pages_stories.module.css";
import Home from "./Home";

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

storiesOf("Home", module)
  .addParameters({ options: { showPanel: false } })
  .add("Home page", () => {
    return (
      <div className={styles.root}>
        <Home />
      </div>
    );
  });
