import { useState } from "react";

const initErrorState = (validatorObj) =>
  Object.fromEntries(Object.keys(validatorObj).map((key) => [key, false]));

const initErrorReasonState = (validatorObj) =>
  Object.fromEntries(Object.keys(validatorObj).map((key) => [key, []]));

const useForm = ({ initialFormState, validators, requiredText }) => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initErrorState(validators || {}));
  const [errorReasons, setErrorReasons] = useState(
    initErrorReasonState(validators || {})
  );

  const handleInputChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleDateChange = (newValue, name) => {
    setForm({ ...form, [name]: newValue });
  };

  const validateForm = () => {
    let update = {};
    let errorReasonsUpdate = {};

    Object.entries(validators).forEach(([key, validatorArr]) => {
      let hasErrors = false;
      let errorReasons = [];

      if (form[key] !== "") {
        if (validatorArr.includes("required")) {
          hasErrors = true;
          errorReasons.push(requiredText || "This field is required.");
        }

        validatorArr.forEach((validator) => {
          if (!Array.isArray(validator)) return; // throw error must be array
          // I know i can group these with an || but I want to throw specific errors later
          if (validator.length !== 2) return; // throw error must only 2 items (required text and validator func)
          if (typeof validator[0] !== "function") return; // throw error must be a validator fn
          if (typeof validator[1] !== "string") return; // throw error must be string for required text

          if (!validator[0](form[key])) {
            hasErrors = true;
            errorReasons.push(validator[1]);
          }
        });
      }

      update = { ...update, [key]: hasErrors };
      errorReasonsUpdate = { ...errorReasonsUpdate, [key]: errorReasons };
    });

    setErrors(update);
    setErrorReasons(errorReasonsUpdate);

    return Object.entries(update)
      .map(([, val]) => val)
      .includes(true);
  };

  const clearForm = () => setForm(initialFormState);

  return {
    form,
    errors,
    errorReasons,
    clearForm,
    validateForm,
    handleInputChange,
    handleDateChange
  };
};

export default useForm;
