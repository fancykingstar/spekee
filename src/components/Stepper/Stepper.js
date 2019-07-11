import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import StepConnector from "./StepConnector";
import range from "lodash/range";

export const styles = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    padding: 24
  },
  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    flexDirection: "row",
    alignItems: "center"
  },
  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    flexDirection: "column"
  },
  connectorsContainer: {
    display: "flex",
    flex: "1 1 auto"
  }
};

const defaultConnector = <StepConnector />;

const Stepper = React.forwardRef(function Stepper(props, ref) {
  const {
    activeStep = [0, 0],
    children,
    classes,
    className: classNameProp,
    connector: connectorProp = defaultConnector,
    nonLinear = false,
    orientation = "horizontal",
    ...other
  } = props;

  const className = clsx(classes.root, classes[orientation], classNameProp);

  const connector = React.isValidElement(connectorProp)
    ? React.cloneElement(connectorProp, { orientation })
    : null;
  const childrenArray = React.Children.toArray(children);
  const steps = childrenArray.map((step, index) => {
    const controlProps = {
      connector: connectorProp,
      last: index + 1 === childrenArray.length,
      orientation
    };

    const { divide = 1, completed = [] } = step.props;
    let connectors = [];
    // Do not render connectors for the last step
    if (index !== childrenArray.length - 1) {
      connectors = range(divide).map((_, childIndex) => {
        const state = {
          index: [index, childIndex],
          active: false,
          completed: false,
          disabled: false
        };

        if (
          activeStep[0] === state.index[0] &&
          activeStep[1] === state.index[1]
        ) {
          state.active = true;
        } else if (
          (!nonLinear &&
            (activeStep[0] > state.index[0] ||
              (activeStep[0] === state.index[0] &&
                activeStep[1] > state.index[1]))) ||
          completed[childIndex]
        ) {
          state.completed = true;
        } else if (
          !nonLinear &&
          (activeStep[0] < state.index[0] ||
            (activeStep[0] === state.index[0] &&
              activeStep[1] < state.index[1]))
        ) {
          state.disabled = true;
        }

        return (
          connector &&
          React.cloneElement(connector, {
            key: state.index.join(","),
            ...state
          })
        );
      });
    }

    const connectorsContainer = connectors.length ? (
      <div className={classes.connectorsContainer}>{connectors}</div>
    ) : (
      []
    );

    const state = {
      index: index,
      active: false,
      completed: false,
      disabled: false
    };

    if (activeStep[0] === index) {
      state.active = true;
    } else if (
      (!nonLinear && activeStep[0] > index) ||
      completed.every(i => i === true)
    ) {
      state.completed = true;
    } else if (!nonLinear && activeStep[0] < index) {
      state.disabled = true;
    }

    return [
      React.cloneElement(step, {
        ...controlProps,
        ...state,
        ...step.props
      }),
      connectorsContainer
    ];
  });

  return (
    <Paper square elevation={0} className={className} ref={ref} {...other}>
      {steps}
    </Paper>
  );
});

Stepper.propTypes = {
  /**
   * Set the active step (zero based index).
   */
  activeStep: PropTypes.array,
  /**
   * Two or more `<Step />` components.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * An element to be placed between each step.
   */
  connector: PropTypes.element,
  /**
   * If set the `Stepper` will not assist in controlling steps for linear flow.
   */
  nonLinear: PropTypes.bool,
  /**
   * The stepper orientation (layout flow direction).
   */
  orientation: PropTypes.oneOf(["horizontal", "vertical"])
};

export default withStyles(styles, { name: "MuiStepper" })(Stepper);
