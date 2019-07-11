import React from "react";
import { Form, Field } from "react-final-form";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import clsx from "clsx";
import styles from "./Onboard.module.css";

export const DetailsForm = ({ onSubmit = () => true }) => {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, submitting, values }) => {
        return (
          <form onSubmit={handleSubmit} className={styles.root} noValidate>
            <h1>1. Your Details</h1>
            <h4>Name / Email / Gender / Age</h4>
            <Field name="name" type="text" label="Name">
              {({ input, meta, label, formControlProps, ...rest }) => {
                const showError =
                  ((meta.submitError && !meta.dirtySinceLastSubmit) ||
                    meta.error) &&
                  meta.touched;

                return (
                  <div
                    className={styles.field_container}
                    style={{ "margin-top": "7px" }}
                  >
                    <label
                      className={clsx(styles.label, {
                        [styles.error]: showError
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
                          [styles.error]: showError
                        })}
                      />
                      <input
                        id={input.name}
                        {...input}
                        className={clsx({ [styles.error]: showError })}
                      />
                    </div>
                    {showError && <p>{meta.error || meta.submitError}</p>}
                  </div>
                );
              }}
            </Field>
            <Field name="email" type="email" label="Email">
              {({ input, meta, label, formControlProps, ...rest }) => {
                const showError =
                  ((meta.submitError && !meta.dirtySinceLastSubmit) ||
                    meta.error) &&
                  meta.touched;

                return (
                  <div
                    className={styles.field_container}
                    style={{ "margin-top": "24px" }}
                  >
                    <label
                      className={clsx(styles.label, {
                        [styles.error]: showError
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
                          [styles.error]: showError
                        })}
                      />
                      <input
                        id={input.name}
                        {...input}
                        className={clsx({ [styles.error]: showError })}
                      />
                    </div>
                    {showError && <p>{meta.error || meta.submitError}</p>}
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
                const showError =
                  ((meta.submitError && !meta.dirtySinceLastSubmit) ||
                    meta.error) &&
                  meta.touched;

                return (
                  <div
                    className={styles.field_container}
                    style={{ "margin-top": "36px" }}
                  >
                    <label
                      className={clsx(styles.label, {
                        [styles.error]: showError
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
                const showError =
                  ((meta.submitError && !meta.dirtySinceLastSubmit) ||
                    meta.error) &&
                  meta.touched;

                return (
                  <div
                    className={styles.field_container}
                    style={{ "margin-top": "47px" }}
                  >
                    <label
                      className={clsx(styles.label, {
                        [styles.error]: showError
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

            <button type="submit" style={{ "margin-top": "29px" }}>
              Next: Study Choices
            </button>
          </form>
        );
      }}
    </Form>
  );
};
