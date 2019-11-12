const randomstring = require("randomstring");

const generateLink = length => {
  return randomstring.generate(length).toUpperCase();
};
module.exports = {
  generateLink
};
