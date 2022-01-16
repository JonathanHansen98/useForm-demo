import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const ActionContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

const FormActions = ({ resetForm, onSubmit }) => (
  <ActionContainer>
    <Button onClick={resetForm} sx={{ marginRight: 2 }} color="error">
      Clear
    </Button>
    <Button onClick={onSubmit} variant="contained">
      Submit
    </Button>
  </ActionContainer>
);

export default FormActions;
