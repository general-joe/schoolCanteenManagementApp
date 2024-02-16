const bcrypt = require('bcrypt');

exports.hash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const passwd = await bcrypt.hash(password, salt);
  return passwd;
};
exports.compare = async (password, syspassword) => {
  const passwd = await bcrypt.compare(password, syspassword);
  return passwd;
};