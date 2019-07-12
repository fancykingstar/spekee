import React from "react";
import clsx from "clsx";
import styles from "./Onboard.module.css";
import { Form, Field } from "react-final-form";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "../Inputs/Switch";

const showError = ({ touched, submitError, dirtySinceLastSubmit, error }) =>
  ((submitError && !dirtySinceLastSubmit) || error) && touched;

export const DetailsFormSegment = ({ children }) => {
  return (
    <React.Fragment>
      <h1 className={styles.header_sequence}>1.</h1>
      <h1 className={styles.header_text}>Your Details</h1>
      <h4>Name / Email / Gender / Age</h4>
      <Field name="name" type="text" label="Name">
        {({ input, meta, label, formControlProps, ...rest }) => {
          return (
            <div
              className={styles.field_container}
              style={{ marginTop: "30px" }}
            >
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={input.name}
              >
                {label}
              </label>
              <div className={styles.input_container}>
                <fieldset
                  aria-hidden="true"
                  className={clsx(styles.outline, {
                    [styles.active]: meta.active,
                    [styles.error]: showError(meta)
                  })}
                />
                <input
                  id={input.name}
                  {...input}
                  className={clsx({ [styles.error]: showError(meta) })}
                />
              </div>
              {showError(meta) && <p>{meta.error || meta.submitError}</p>}
            </div>
          );
        }}
      </Field>
      <Field name="email" type="email" label="Email">
        {({ input, meta, label, formControlProps, ...rest }) => {
          return (
            <div
              className={styles.field_container}
              style={{ marginTop: "24px" }}
            >
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={input.name}
              >
                {label}
              </label>
              <div className={styles.input_container}>
                <fieldset
                  aria-hidden="true"
                  className={clsx(styles.outline, {
                    [styles.active]: meta.active,
                    [styles.error]: showError(meta)
                  })}
                />
                <input
                  id={input.name}
                  {...input}
                  className={clsx({ [styles.error]: showError(meta) })}
                />
              </div>
              {showError(meta) && <p>{meta.error || meta.submitError}</p>}
            </div>
          );
        }}
      </Field>
      <Field name="gender" label="Gender">
        {({
          input: { checked, value, name, onChange, ...restInput },
          meta,
          label,
          formControlProps,
          ...rest
        }) => {
          return (
            <div
              className={styles.field_container}
              style={{ marginTop: "36px" }}
            >
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={name}
              >
                {label}
              </label>
              <RadioGroup
                aria-label="position"
                name={name}
                value={value}
                onChange={onChange}
                row
              >
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Male"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="Female"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="others"
                  control={<Radio color="primary" />}
                  label="Others"
                  labelPlacement="end"
                />
              </RadioGroup>
            </div>
          );
        }}
      </Field>
      <Field name="age" label="Age(Yrs)">
        {({
          input: { checked, value, name, onChange, ...restInput },
          meta,
          label,
          formControlProps,
          ...rest
        }) => {
          return (
            <div
              className={styles.field_container}
              style={{ marginTop: "47px" }}
            >
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={name}
              >
                {label}
              </label>
              <RadioGroup
                aria-label="position"
                name={name}
                value={value}
                onChange={onChange}
                row
              >
                <FormControlLabel
                  value="13_19"
                  control={<Radio color="primary" />}
                  label="13-19"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="20_29"
                  control={<Radio color="primary" />}
                  label="20-29"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="30_39"
                  control={<Radio color="primary" />}
                  label="30-39"
                  labelPlacement="end"
                />
              </RadioGroup>
            </div>
          );
        }}
      </Field>

      {children}
    </React.Fragment>
  );
};

export const StudyChoicesAFormSegment = ({ children }) => {
  const startPeriods = [
    { name: "6", label: "6 months" },
    { name: "12", label: "1 year" },
    { name: "24", label: "2 years" },
    { name: "36", label: "3 years" }
  ];
  const studyLevels = [
    { name: "bachelors", label: "Bachelors" },
    { name: "masters", label: "Masters" },
    { name: "mba", label: "MBA" },
    { name: "pathways", label: "Pathways" },
    { name: "online", label: "Online" }
  ];
  return (
    <React.Fragment>
      <h1 className={styles.header_sequence}>2.</h1>
      <h1 className={styles.header_text}>Study Choices</h1>
      <h4>Start Period / Study Level / Subject / Location</h4>
      <Field
        name="startPeriod"
        type="radio"
        label="Start period of university education"
      >
        {({
          input: { name, value, onChange, ...restInput },
          meta,
          label,
          formControlProps,
          ...rest
        }) => {
          return (
            <div
              className={styles.field_container}
              style={{ marginTop: "30px", gridColumn: "2 / span 11" }}
            >
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={name}
                style={{ marginBottom: "24px" }}
              >
                {label}
              </label>
              <div>
                {startPeriods.map(
                  ({ name: switchName, label: switchLabel }, idx) => (
                    <Switch
                      key={`${label}_${switchLabel}`}
                      name={name}
                      type="radio"
                      label={switchLabel}
                      value={switchName}
                      onChange={onChange}
                      style={{
                        marginRight:
                          idx === startPeriods.length - 1 ? 0 : "13px"
                      }}
                    />
                  )
                )}
              </div>
            </div>
          );
        }}
      </Field>
      <Field name="studyLevel" type="radio" label="Study Level">
        {({
          input: { name, value, onChange, ...restInput },
          meta,
          label,
          formControlProps,
          ...rest
        }) => {
          return (
            <div
              className={styles.field_container}
              style={{ marginTop: "52px", gridColumn: "2 / span 11" }}
            >
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={name}
                style={{ marginBottom: "24px" }}
              >
                {label}
              </label>
              <div>
                {studyLevels.map(
                  ({ name: switchName, label: switchLabel }, idx) => (
                    <Switch
                      key={`${label}_${switchLabel}`}
                      name={name}
                      type="radio"
                      label={switchLabel}
                      value={switchName}
                      onChange={onChange}
                      style={{
                        marginRight: idx === studyLevels.length - 1 ? 0 : "13px"
                      }}
                    />
                  )
                )}
              </div>
            </div>
          );
        }}
      </Field>
      {children}
    </React.Fragment>
  );
};

export const StudyChoicesBFormSegment = ({ children }) => {
  const subjects = [
    { name: "arts", label: "Arts" },
    { name: "architecture", label: "Architecture" },
    { name: "business", label: "Business" },
    { name: "engineering", label: "Engineering" },
    { name: "law", label: "Law" },
    { name: "social_science", label: "Social Science" },
    { name: "sports", label: "Sports" },
    { name: "stem", label: "STEM" },
    { name: "education", label: "Education" },
    { name: "computer_science", label: "Computer Science" },
    { name: "mathematics", label: "Mathematics" }
  ];
  const locations = [
    { name: "usa", label: "USA" },
    { name: "uk", label: "United Kingdom" },
    { name: "ca", label: "Canada" },
    { name: "au", label: "Australia" },
    { name: "de", label: "Germany" }
  ];
  return (
    <React.Fragment>
      <h1 className={styles.header_sequence}>2.</h1>
      <h1 className={styles.header_text}>Study Choices</h1>
      <h4>Start Period / Study Level / Subject / Location</h4>
      <Field name="subject" type="radio" label="Subject">
        {({
          input: { name, value, onChange, ...restInput },
          meta,
          label,
          formControlProps,
          ...rest
        }) => {
          return (
            <div
              className={styles.field_container}
              style={{ marginTop: "30px", gridColumn: "2 / span 11" }}
            >
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={name}
                style={{ marginBottom: "24px" }}
              >
                {label}
              </label>
              <div>
                {subjects.map(
                  ({ name: subjectName, label: subjectLabel }, idx) => (
                    <Switch
                      key={`${label}_${subjectLabel}`}
                      name={name}
                      type="radio"
                      label={subjectLabel}
                      value={subjectName}
                      onChange={onChange}
                      style={{
                        marginRight: idx === subjects.length - 1 ? 0 : "13px",
                        marginBottom: "10px"
                      }}
                    />
                  )
                )}
              </div>
            </div>
          );
        }}
      </Field>
      <Field name="lcoation" type="radio" label="Location">
        {({
          input: { name, value, onChange, ...restInput },
          meta,
          label,
          formControlProps,
          ...rest
        }) => {
          return (
            <div
              className={styles.field_container}
              style={{ marginTop: "30px", gridColumn: "2 / span 11" }}
            >
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={name}
                style={{ marginBottom: "24px" }}
              >
                {label}
              </label>
              <div>
                {locations.map(
                  ({ name: subjectName, label: locationLabel }, idx) => (
                    <Switch
                      key={`${label}_${locationLabel}`}
                      name={name}
                      type="radio"
                      label={locationLabel}
                      value={subjectName}
                      onChange={onChange}
                      style={{
                        marginRight: idx === locations.length - 1 ? 0 : "13px"
                      }}
                    />
                  )
                )}
              </div>
            </div>
          );
        }}
      </Field>

      {children}
    </React.Fragment>
  );
};
