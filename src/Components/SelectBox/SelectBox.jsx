import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: "white",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SelectBox = ({ title }) => {
  const classes = useStyles();

  const [age, setAge] = React.useState(1);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Select className={classes.formControl} value={age} onChange={handleChange}>
      <MenuItem value={1}>{title}</MenuItem>
      <MenuItem value={2}>Two</MenuItem>
      <MenuItem value={3}>Three</MenuItem>
    </Select>
  );
};
