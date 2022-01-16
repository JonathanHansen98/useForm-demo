import React from "react";
import styled from "@emotion/styled";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import DatePicker from "./components/DatePIcker";
import TextField from "@mui/material/TextField";
import { FormGroup, FormLabel } from "@mui/material";

const StyledInput = styled(TextField)({
  marginBottom: 16,
});

const FormBody = ({
  form,
  handleInputChange,
  handleDateChange,
  handleCheck,
  errors,
  errorReasons,
}) => {
  return (
    <>
      <StyledInput
        required
        onChange={handleInputChange}
        name="firstName"
        value={form.firstName}
        label="First name"
        error={errors.firstName}
        helperText={errorReasons.firstName[0]}
        fullWidth
      />
      <StyledInput
        required
        onChange={handleInputChange}
        name="lastName"
        value={form.lastName}
        label="Last name"
        error={errors.lastName}
        helperText={errorReasons.lastName[0]}
        fullWidth
      />
      <StyledInput
        required
        onChange={handleInputChange}
        name="email"
        value={form.email}
        label="Email"
        error={errors.email}
        helperText={errorReasons.email[0]}
        fullWidth
      />
      <StyledInput
        required
        onChange={handleInputChange}
        name="phone"
        value={form.phone}
        label="Phone"
        error={errors.phone}
        helperText={errorReasons.phone[0]}
        fullWidth
      />
      <StyledInput
        fullWidth
        label="Gender"
        name="gender"
        onChange={handleInputChange}
        value={form.gender}
        error={errors.gender}
        helperText={errorReasons.gender[0]}
        select
      >
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>{" "}
      </StyledInput>
      <DatePicker
        name="date"
        clearable
        onChange={handleDateChange}
        value={form.date}
        inputProps={{
          fullWidth: true,
          sx: { marginBottom: 2 },
          error: errors.date,
        }}
        error={errors.date}
        label="Date"
      />
      <FormGroup sx={{ marginBottom: 2 }}>
        <FormLabel>Works with checkboxes!</FormLabel>
        <FormControlLabel
          name="checkboxA"
          control={<Checkbox onChange={handleCheck} checked={form.checkboxA} />}
          label="Checkbox A"
        />
        <FormControlLabel
          name="checkboxB"
          control={<Checkbox onChange={handleCheck} checked={form.checkboxB} />}
          label="Checkbox B"
        />
      </FormGroup>
    </>
  );
};

export default FormBody;
