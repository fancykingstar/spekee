import React from "react";
import styles from "./Switch.module.css";

const SwitchContainer = ({ className, children }) => (
  <div className={styles.container}>{children}</div>
);

const HiddenSwitch = ({ type, ...rest }) => (
  <input className={styles.hidden_switch} type={type} {...rest} />
);

const StyledSwitch = ({ checked, children }) => (
  <div className={styles.styled_switch}>{children}</div>
);

const Switch = ({ className, type, checked, label, ...props }) => (
  <label>
    <SwitchContainer className={className}>
      <HiddenSwitch type={type} checked={checked} {...props} />
      <StyledSwitch checked={checked}>{label}</StyledSwitch>
    </SwitchContainer>
  </label>
);

export default Switch;
