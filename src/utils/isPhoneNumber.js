const isPhoneNumber = (value) =>
  value.match(
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
  );

export default isPhoneNumber;
