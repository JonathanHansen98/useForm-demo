import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import React, { useEffect } from "react";
import DatePicker from "../DatePIcker";
import useForm from "../../hooks/useForm";

const mockRequest = () =>
  new Promise((res) => {
    setTimeout(() => res("success"), 1500);
  });

const isDate = (date) => date instanceof Date && !isNaN(date.valueOf());
const isValidEmail = (value) =>
  value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
const isPhoneNumber = (value) =>
  value.match(
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
  );

const StyledInput = styled(TextField)({
  marginBottom: 8
});

const ActionContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center"
});

const FormContainer = styled(Paper)({
  width: 350,
  padding: 16,
  margin: "16px auto 0 auto"
});

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: new Date("2014-08-18T21:11:54")
};

const validators = {
  date: [
    "required",
    [isDate, "Must be a valid date."],
    [
      (date) => new Date(date).getTime() !== initialFormState.date.getTime(),
      "Input a different date."
    ]
  ],
  phone: ["required", [isPhoneNumber, "Must be a valid phone number."]],
  firstName: ["required"],
  lastName: ["required"],
  email: ["required", [isValidEmail, "Must be a valid email address."]]
};

const Form = () => {
  const {
    form,
    handleInputChange,
    handleDateChange,
    validateForm,
    errors,
    errorReasons,
    clearForm
  } = useForm({
    initialFormState,
    validators,
    requiredText: "Enter this field mo fugga"
  });

  const onSubmit = async () => {
    const hasErrors = validateForm();

    if (hasErrors) return console.log("has errors");

    await mockRequest();
    clearForm();
  };

  return (
    <FormContainer>
      <Typography variant="h6" gutterBottom>
        Sign Up
      </Typography>
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
      <DatePicker
        name="date"
        clearable
        onChange={handleDateChange}
        value={form.date}
        inputProps={{
          fullWidth: true,
          sx: { marginBottom: 2 },
          error: errors.date
        }}
        error={errors.date}
        label="Date"
      />
      <ActionContainer>
        <Button
          onClick={() => {
            clearForm();
            validateForm();
          }}
          sx={{ marginRight: 2 }}
          color="error"
        >
          Clear
        </Button>
        <Button onClick={onSubmit} variant="contained">
          Submit
        </Button>
      </ActionContainer>
    </FormContainer>
  );
};

export default Form;
