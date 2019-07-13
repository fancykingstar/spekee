import React from "react";
import clsx from "clsx";
import styles from "./Onboard.module.css";
import { Form, Field } from "react-final-form";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
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
                  ({ name: switchName, label: switchLabel }, idx) => (
                    <Switch
                      key={`${label}_${switchLabel}`}
                      name={name}
                      type="radio"
                      label={switchLabel}
                      value={switchName}
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
      <Field name="location" type="radio" label="Location">
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
                  ({ name: switchName, label: switchLabel }, idx) => (
                    <Switch
                      key={`${label}_${switchLabel}`}
                      name={name}
                      type="radio"
                      label={switchLabel}
                      value={switchName}
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

export const SuccessTeamAFormSegment = ({ children }) => {
  const options = [
    { name: "yes", label: "Yes" },
    { name: "no", label: "No" },
    { name: "maybe", label: "Not Sure" }
  ];
  return (
    <React.Fragment>
      <h1 className={styles.header_sequence}>3.</h1>
      <h1 className={styles.header_text}>Success Team</h1>
      <h4>Expert Counsellor / Test-Prep Help / Other Help / Study Funding</h4>
      <Field
        name="expertCounsellorHelpApplicationProcess"
        type="radio"
        label="Need expert counsellor help for programs and application process"
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
                {options.map(
                  ({ name: switchName, label: switchLabel }, idx) => (
                    <Switch
                      key={`${label}_${switchLabel}`}
                      name={name}
                      type="radio"
                      label={switchLabel}
                      value={switchName}
                      onChange={onChange}
                      style={{
                        marginRight: idx === options.length - 1 ? 0 : "13px"
                      }}
                    />
                  )
                )}
              </div>
            </div>
          );
        }}
      </Field>
      <Field
        name="testPrepHelp"
        type="radio"
        label="Need test preparation help for GRE/GMAT/SAT or IELTS/TOEFL"
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
              style={{ marginTop: "44px", gridColumn: "2 / span 11" }}
            >
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={name}
              >
                {label}
              </label>
              <div>
                {options.map(
                  ({ name: switchName, label: switchLabel }, idx) => (
                    <Switch
                      key={`${label}_${switchLabel}`}
                      name={name}
                      type="radio"
                      label={switchLabel}
                      value={switchName}
                      onChange={onChange}
                      style={{
                        marginRight: idx === options.length - 1 ? 0 : "13px"
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

export const SuccessTeamBFormSegment = ({ children }) => {
  const options = [
    { name: "yes", label: "Yes" },
    { name: "no", label: "No" },
    { name: "maybe", label: "Can't Say" }
  ];
  const fundMethods = [
    { name: "familyFund", label: "Family Fund" },
    { name: "bankEduLoan", label: "Bank/Edu Loan" },
    { name: "govtLoan", label: "Govt. Loan" },
    { name: "sponsorship", label: "Sponsorship" },
    { name: "privateDonor", label: "Private Donor" },
    { name: "notSure", label: "Not Sure" }
  ];
  const budgets = [
    { name: "0_20000", label: "upto $20000" },
    { name: "20000_25000", label: "upto $25000" },
    { name: "25000_30000", label: "upto $30000" },
    { name: "30000_40000", label: "upto $40000" },
    { name: "40000_50000", label: "upto $50000" }
  ];
  const motivations = [
    { name: "newLifeExperiences", label: "New Life Experiences" },
    { name: "immigrationCareer", label: "Immigration & Career" },
    { name: "seeWorld", label: "See the world" },
    { name: "betterQualification", label: "Better Qualification" },
    { name: "learnNewLanguages", label: "Learn New Languages" }
  ];
  return (
    <React.Fragment>
      <h1 className={styles.header_sequence}>3.</h1>
      <h1 className={styles.header_text}>Success Team</h1>
      <h4>Expert Counsellor / Test-Prep Help / Other Help / Study Funding</h4>
      <Field
        name="expertCounsellorHelpExtracurriculars"
        type="radio"
        label="Need expert help for extracurriculars, essays etc"
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
                {options.map(
                  ({ name: switchName, label: switchLabel }, idx) => (
                    <Switch
                      key={`${label}_${switchLabel}`}
                      name={name}
                      type="radio"
                      label={switchLabel}
                      value={switchName}
                      onChange={onChange}
                      style={{
                        marginRight: idx === options.length - 1 ? 0 : "13px",
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
      <Field
        name="studyFundMethod"
        type="radio"
        label="How do you want to fund your study(University fees, VISAs etc)"
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
              style={{ marginTop: "44px", gridColumn: "2 / span 11" }}
            >
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={name}
              >
                {label}
              </label>
              <div>
                {fundMethods.map(
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
                          idx === fundMethods.length - 1 ? 0 : "13px",
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
      <Field name="studyBudget" type="radio" label="Study Budget">
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
              style={{ marginTop: "44px", gridColumn: "2 / span 11" }}
            >
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={name}
              >
                {label}
              </label>
              <div>
                {budgets.map(
                  ({ name: switchName, label: switchLabel }, idx) => (
                    <Switch
                      key={`${label}_${switchLabel}`}
                      name={name}
                      type="radio"
                      label={switchLabel}
                      value={switchName}
                      onChange={onChange}
                      style={{
                        marginRight: idx === budgets.length - 1 ? 0 : "13px",
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
      <Field name="studyMotivation" type="radio" label="Study Motivation">
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
              style={{ marginTop: "44px", gridColumn: "2 / span 11" }}
            >
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={name}
              >
                {label}
              </label>
              <div>
                {motivations.map(
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
                          idx === motivations.length - 1 ? 0 : "13px",
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

      {children}
    </React.Fragment>
  );
};

export const BlockChainFormSegment = ({ children }) => {
  return (
    <React.Fragment>
      <h1 className={styles.header_sequence}>4.</h1>
      <h1 className={styles.header_text}>Blockchain Account</h1>
      <h4 style={{ marginTop: "26px" }}>
        Create your first education blockchain account with us!
      </h4>
      <h4 style={{ marginTop: "26px" }}>
        This account will store your certificates, transcripts and other
        documents needed for university application, so we recommend that you
        use correct details below for the account sign-up.
      </h4>
      <Field name="email" type="email" label="Email">
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
      <Field name="password" type="password" label="Password">
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
      <Field name="confirmPassword" type="password" label="Confirm Password">
        {({ input, meta, label, formControlProps, ...rest }) => {
          return (
            <div style={{ marginTop: "24px", gridColumn: "7 / span 4" }}>
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
      <Field name="mobile" type="text" label="Valid mobile number">
        {({ input, meta, label, formControlProps, ...rest }) => {
          return (
            <div style={{ marginTop: "24px", gridColumn: "2 / span 6" }}>
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={input.name}
              >
                {label}
              </label>
              <div style={{ display: "flex" }}>
                <Field name="mobile.countryCode" type="text">
                  {({ input, meta, label, formControlProps, ...rest }) => {
                    return (
                      <div
                        className={clsx(
                          styles.input_container,
                          styles.country_code_plus
                        )}
                      >
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
                    );
                  }}
                </Field>
                <Field name="mobile.number" type="text">
                  {({ input, meta, label, formControlProps, ...rest }) => {
                    return (
                      <div
                        className={styles.input_container}
                        style={{ marginRight: "17px", width: "147px" }}
                      >
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
                    );
                  }}
                </Field>
                <span
                  style={{
                    width: "322px",
                    fontStyle: "italic",
                    color: "#adadad"
                  }}
                >
                  This will be used for sending the OTP and other security
                  messages.
                </span>
              </div>
              {showError(meta) && <p>{meta.error || meta.submitError}</p>}
            </div>
          );
        }}
      </Field>
      <Field name="mailConsent" type="checkbox" label="GDPR Disclaimer">
        {({ input, meta, label, formControlProps, ...rest }) => {
          return (
            <div style={{ marginTop: "73px", gridColumn: "2 / span 9" }}>
              <label
                className={clsx(styles.label, {
                  [styles.error]: showError(meta)
                })}
                htmlFor={input.name}
              >
                {label}
              </label>
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <Checkbox
                  classes={{ root: styles.consent_checkbox }}
                  {...input}
                />
                <label htmlFor={input.name}>
                  Possimus et et vitae. Aspernatur qui voluptas et sit tenetur
                  et voluptate. In nostrum repellendus. Reprehenderit hic et
                  animi nam itaque suscipit aliquam.
                </label>
              </div>
            </div>
          );
        }}
      </Field>

      {children}
    </React.Fragment>
  );
};
