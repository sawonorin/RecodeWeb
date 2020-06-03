/**
 *
 * @param {*} payload
 * @returns `true` is there is an error and `false` if there is no error
 */

const validateNonEmptyString = (payload) => {
  if (payload) {
    return false;
  }
  return true;
};

const validateBoolean = (payload) => {
  if (typeof payload === "boolean") {
    return false;
  }
  return true;
};

const validateIntegerOnly = (number) => {
  let numberValidationRegex = /^\+?(0|[1-9]\d*)$/;
  let isValid = numberValidationRegex.test(number);

  let isErrorPresent = isValid ? false : true; //if the regex is valid, then return false (meaning there is no error)
  return isErrorPresent;
};

const validateEmail = (email) => {
  let emailValidationRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let isValid = emailValidationRegex.test(email);
  let isErrorPresent = isValid ? false : true; //if the regex is valid, then return false (meaning there is no error)
  return isErrorPresent;
};

const validateLettersOnly = (payload) => {};

const validateEqualityofInputs = (input1, input2) => {
  if (input1 === input2) {
    return false;
  }
  return true;
};

const isFormValid = (payload) => {
  if (payload) {
    let formErrors = Object.values(payload);

    //if the form errors payload contains one error (true value),
    //set the entire form to invalid by returning true
    let containsError = formErrors.find((element) => element === true);

    if (containsError) {
      return false;
    }
  }

  return true;
};

export const validationHelper = {
  validateNonEmptyString,
  validateBoolean,
  validateLettersOnly,
  validateIntegerOnly,
  validateEmail,
  validateEqualityofInputs,
  isFormValid,
};
