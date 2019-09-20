import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Form } from "react-final-form";
import LinearProgress from "@material-ui/core/LinearProgress";
import styles from "./Wizard.module.css";

const StepIcon = ({ text, active, completed }) => (
  <div
    className={clsx(styles.step_icon, {
      [styles.active]: active,
      [styles.completed]: completed
    })}
  >
    {text}
  </div>
);

const StepProgress = ({ value }) => (
  <LinearProgress
    classes={{
      root: styles.step_progress_root,
      bar: styles.step_progress_bar,
      colorPrimary: styles.step_progess_color_primary,
      barColorPrimary: styles.step_progess_bar_color_primary
    }}
    value={value}
    variant="determinate"
  />
);

export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };
  static Page = ({ children, ...rest }) => {
    if (typeof children === "function") {
      return children(rest);
    }
    return children;
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      steps: this.collectSteps(),
      values: props.initialValues || {}
    };
  }
  next = values =>
    this.setState(state => {
      const { page, steps } = state;
      const activePage = React.Children.toArray(this.props.children)[page];
      const currentPageGroup = activePage.props.group;
      const { total, progress, progressIncrement } = steps[currentPageGroup];
      return {
        page: Math.min(page + 1, this.props.children.length - 1),
        steps: {
          ...steps,
          [currentPageGroup]: {
            total,
            progress: Math.min(progress + progressIncrement, 100),
            progressIncrement
          }
        },
        values
      };
    });

  previous = () =>
    this.setState(state => {
      const { page, steps } = state;
      const childrenArray = React.Children.toArray(this.props.children);
      const activePage = childrenArray[page];
      const currentPageGroup = activePage.props.group;
      const prevPage = childrenArray[Math.max(page - 1, 0)];
      const prevPageGroup = prevPage.props.group;
      const { total, progress, progressIncrement } = steps[currentPageGroup];
      return {
        page: Math.max(page - 1, 0),
        steps: {
          ...steps,
          [prevPageGroup]:
            prevPageGroup === currentPageGroup
              ? steps[prevPageGroup]
              : {
                  total: steps[prevPageGroup].total,
                  progress:
                    steps[prevPageGroup].progress -
                    steps[prevPageGroup].progressIncrement,
                  progressIncrement: steps[prevPageGroup].progressIncrement
                },
          [currentPageGroup]: {
            total,
            progress: Math.max(progress - progressIncrement, 0),
            progressIncrement
          }
        }
      };
    });

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = values => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };

  collectSteps = () => {
    const pages = React.Children.toArray(this.props.children);
    const steps = pages.reduce((steps, page) => {
      const { group } = page.props;
      if (!(group in steps)) {
        steps[group] = { total: 0, progress: 0, progressIncrement: 100 };
      }
      steps[group].total += 1;
      steps[group].progressIncrement = 100 / steps[group].total;
      return steps;
    }, {});
    return steps;
  };

  render() {
    const { children, className } = this.props;
    const { page, steps, values } = this.state;
    const activePage = React.cloneElement(
      React.Children.toArray(children)[page],
      { handlePrevious: this.previous.bind(this) }
    );
    const isLastPage = page === React.Children.count(children) - 1;

    const stepKeys = Object.keys(steps).sort();
    const stepper = (
      <div className={styles.stepper_container}>
        {stepKeys.map(stepIndex => {
          const step = steps[stepIndex];
          const numericIndex = parseInt(stepIndex, 10);
          return (
            <React.Fragment key={stepIndex}>
              <StepIcon
                text={numericIndex + 1}
                active={activePage.props.group === numericIndex}
                completed={step.progress === 100}
              />
              {stepIndex < stepKeys.length - 1 && (
                <StepProgress value={step.progress} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );

    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, submitting, values }) => (
          <form className={className} onSubmit={handleSubmit} noValidate>
            {stepper}
            {activePage}
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      </Form>
    );
  }
}
