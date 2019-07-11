import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/styles";
import SvgIcon from "@material-ui/core/SvgIcon";

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: "block",
    color: theme.palette.text.disabled,
    "&$active": {
      color: theme.palette.primary.main
    },
    "&$completed": {
      color: theme.palette.success.main
    },
    "&$error": {
      color: theme.palette.error.main
    }
  },
  /* Styles applied to the SVG text element. */
  text: {
    fill: theme.palette.primary.contrastText,
    fontSize: theme.typography.caption.fontSize,
    fontFamily: theme.typography.fontFamily
  },
  /* Pseudo-class applied to the root element if `active={true}`. */
  active: {},
  /* Pseudo-class applied to the root element if `completed={true}`. */
  completed: {},
  /* Pseudo-class applied to the root element if `error={true}`. */
  error: {}
});

const StepIcon = React.forwardRef(function StepIcon(props, ref) {
  const {
    completed = false,
    icon,
    active = false,
    error = false,
    classes
  } = props;

  if (typeof icon === "number" || typeof icon === "string") {
    return (
      <SvgIcon
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.error]: error,
          [classes.completed]: completed
        })}
        ref={ref}
      >
        <circle cx="12" cy="12" r="12" />
        <text className={classes.text} x="12" y="16" textAnchor="middle">
          {icon}
        </text>
      </SvgIcon>
    );
  }

  return icon;
});

StepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * Mark the step as failed.
   */
  error: PropTypes.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: PropTypes.node.isRequired
};

export default withStyles(styles, { name: "MuiStepIcon" })(StepIcon);
