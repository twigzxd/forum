const Validator = require("validator");
const isEmpty = require("./isempty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  

  if(!Validator.isLength(data.handle, {min: 2, max: 40})) {
    errors.handle = 'Handle needs to be between 2 and 3 characters';
  }

  if(Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }

  // social networks
  if(!isEmpty(data.twitter)) {
    if(!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  if(!isEmpty(data.facebook)) {
    if(!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
