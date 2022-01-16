const isValidEmail = (value) =>
  value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
export default isValidEmail;
