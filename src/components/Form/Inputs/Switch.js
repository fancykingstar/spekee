import React from "react";
import styles from "./Switch.module.css";

const SwitchContainer = ({ className, children }) => (
  <div className={styles.container}>{children}</div>
);

const HiddenSwitch = props => (
  <input className={styles.hidden_switch} {...props} />
);

const StyledSwitch = ({ children }) => (
  <div className={styles.styled_switch}>{children}</div>
);

const Switch = ({ className, style, name, type, label, value, onChange }) => (
  <label className={className} style={style}>
    <SwitchContainer>
      <HiddenSwitch name={name} type={type} value={value} onChange={onChange} />
      <StyledSwitch>{label}</StyledSwitch>
    </SwitchContainer>
  </label>
);

export default Switch;
