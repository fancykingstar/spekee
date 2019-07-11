import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

const TextField = ({
  input: { name, value, onChange, ...restInput },
  meta,
  label,
  formControlProps,
  ...rest
}) => {
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <FormControl {...formControlProps} error={showError}>
      <InputLabel htmlFor={name}>{label}</InputLabel>

      <Input
        {...rest}
        name={name}
        onChange={onChange}
        inputProps={restInput}
        value={value}
      />

      {showError && (
        <FormHelperText>{meta.error || meta.submitError}</FormHelperText>
      )}
    </FormControl>
  );
};

export default TextField;
