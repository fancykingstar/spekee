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
              style={{ marginTop: "30px" }}
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
              <div style={{ display: "flex" }}>
                <Switch
                  name={name}
                  type="radio"
                  label="6 months"
                  value="6"
                  onChange={onChange}
                  style={{ marginRight: "13px" }}
                />
                <Switch
                  name={name}
                  type="radio"
                  label="1 year"
                  value="12"
                  onChange={onChange}
                  style={{ marginRight: "13px" }}
                />
                <Switch
                  name={name}
                  type="radio"
                  label="2 years"
                  value="24"
                  onChange={onChange}
                  style={{ marginRight: "13px" }}
                />
                <Switch
                  name={name}
                  type="radio"
                  label="3 years"
                  value="36"
                  onChange={onChange}
                />
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
              style={{ marginTop: "52px" }}
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
              <div style={{ display: "flex" }}>
                <Switch
                  name={name}
                  type="radio"
                  label="Bachelors"
                  value="bachelors"
                  onChange={onChange}
                  style={{ marginRight: "13px" }}
                />
                <Switch
                  name={name}
                  type="radio"
                  label="Masters"
                  value="masters"
                  onChange={onChange}
                  style={{ marginRight: "13px" }}
                />
                <Switch
                  name={name}
                  type="radio"
                  label="MBA"
                  value="mba"
                  onChange={onChange}
                  style={{ marginRight: "13px" }}
                />
                <Switch
                  name={name}
                  type="radio"
                  label="Pathways"
                  value="pathways"
                  onChange={onChange}
                  style={{ marginRight: "13px" }}
                />
                <Switch
                  name={name}
                  type="radio"
                  label="Online"
                  value="online"
                  onChange={onChange}
                />
              </div>
            </div>
          );
        }}
      </Field>
      {children}
    </React.Fragment>
  );
};
