import * as React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { TextField } from "@mui/material";

const DatePicker = ({ name, onChange, value, inputProps, error, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        onChange={(newValue) => onChange(newValue, name)} // name attr must be captured and passed to onChange as 2nd param for useForm
        renderInput={(params) => (
          <TextField error={error} {...inputProps} {...params} />
        )}
        {...props}
        value={value}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
