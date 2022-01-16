import React from "react";
import styled from "@emotion/styled";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FormBody from "./components/FormBody";
import FormActions from "./components/FormActions";

import useForm from "../../hooks/useForm";
import { isValidEmail, isPhoneNumber, mockRequest } from "../../utils";

const FormContainer = styled(Paper)({
  width: 350,
  padding: 16,
  margin: "16px auto 0 auto",
});

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: new Date("2014-08-18T21:11:54"),
  gender: "",
  checkboxA: false,
  checkboxB: true,
};

const validators = {
  phone: ["required", [isPhoneNumber, "Must be a valid phone number."]],
  firstName: ["required"],
  lastName: ["required"],
  email: ["required", [isValidEmail, "Must be a valid email address."]],
  gender: ["required"],
};

const Form = () => {
  const {
    form,
    handleInputChange,
    handleDateChange,
    validateForm,
    handleCheck,
    errors,
    errorReasons,
    resetForm,
  } = useForm({
    initialFormState,
    validators,
    requiredText: "Enter this field mo fugga",
  });

  const onSubmit = async () => {
    const hasErrors = validateForm();
    if (hasErrors) return;

    await mockRequest();
    resetForm();
  };

  return (
    <FormContainer>
      <Typography variant="h6" gutterBottom>
        Sign Up
      </Typography>
      <FormBody
        form={form}
        handleInputChange={handleInputChange}
        handleDateChange={handleDateChange}
        handleCheck={handleCheck}
        errors={errors}
        errorReasons={errorReasons}
      />
      <FormActions resetForm={resetForm} onSubmit={onSubmit} />
    </FormContainer>
  );
};

export default Form;
