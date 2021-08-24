import React from "react";
import { Checkbox as ReactCheckBox } from "@material-ui/core/";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const CheckBox = ({ title }) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      style={{ color: "white" }}
      control={
        <ReactCheckBox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      }
      label={title}
    />
  );
};
