import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "./Stepper";
import Step from "./Step";
import StepLabel from "./StepLabel";
import StepConnector from "./StepConnector";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import range from "lodash/range";
import flatten from "lodash/flatten";
import last from "lodash/last";
import find from "lodash/find";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  connectorLine: {
    borderColor: "#CDF322"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  connectorCompleted: {
    "& $connectorLine": {
      borderColor: theme.palette.success.main
    }
  },
  connectorLine: {
    transition: theme.transitions.create("border-color")
  }
}));

export default function HorizontalNonLinearStepper({ steps }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState([0, 0]);
  const [completed, setCompleted] = React.useState(new Map());
  const explodedSteps = flatten(
    steps.map((step, idx) =>
      range(step.divide || 1).map((o, oIdx) => ({ index: [idx, oIdx] }))
    )
  );

  function totalSteps() {
    return explodedSteps.length;
  }

  function completedSteps() {
    return Object.keys(completed).length;
  }

  function isLastStep() {
    const lastExplodedStep = last(explodedSteps);
    return (
      activeStep[0] === lastExplodedStep[0] &&
      activeStep[1] === lastExplodedStep[1]
    );
  }

  function allStepsCompleted() {
    return completedSteps() === totalSteps();
  }

  function handleNext() {
    const newActiveStepIndex =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          explodedSteps.findIndex(({ index }) => !(index in completed))
        : Math.min(
            explodedSteps.findIndex(
              ({ index }) =>
                index[0] === activeStep[0] && index[1] === activeStep[1]
            ) + 1,
            explodedSteps.length - 1
          );
    setActiveStep(explodedSteps[newActiveStepIndex].index);
  }

  function handleBack() {
    const idxCurrentExplodedStep = explodedSteps.findIndex(
      ({ index }) => index[0] === activeStep[0] && index[1] === activeStep[1]
    );
    const newActiveStepIndex = Math.max(0, idxCurrentExplodedStep - 1);
    setActiveStep(explodedSteps[newActiveStepIndex].index);
  }

  // Move to first child step available at this main index
  const handleStep = stepIndex => () => {
    const firstChildStep = find(
      explodedSteps,
      exploded => exploded.index[0] === stepIndex
    );
    setActiveStep(firstChildStep.index);
  };

  function handleComplete() {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    console.log(activeStep);
    handleNext();
  }

  function handleReset() {
    setActiveStep([0, 0]);
    setCompleted(new Map());
  }

  const connector = (
    <StepConnector
      classes={{
        completed: classes.connectorCompleted,
        line: classes.connectorLine
      }}
    />
  );

  const completedByStepIndex = mainIndex => {
    return explodedSteps
      .filter(step => step.index[0] === mainIndex)
      .reduce((a, step) => {
        const [_, secondaryIndex] = step.index;
        a[secondaryIndex] = completed[step.index];
        return a;
      }, []);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} connector={connector}>
        {steps.map((step, index) => (
          <Step
            key={index}
            divide={step.divide}
            completed={completedByStepIndex(index)}
          >
            <StepLabel />
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div>
              <Button
                disabled={activeStep[0] === 0 && activeStep[1] === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {JSON.stringify(activeStep) !==
                JSON.stringify(last(explodedSteps)) &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep} already completed
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleComplete}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
