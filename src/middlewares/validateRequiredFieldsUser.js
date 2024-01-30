const validateDisplayName = (displayName) => {
  if (!displayName || displayName.length < 8) {
    return { valid: false, message: '"displayName" length must be at least 8 characters long' };
  }
  return { valid: true };
};
   
const validateEmail = (email) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!email || !emailRegex.test(email)) {
    return { valid: false, message: '"email" must be a valid email' };
  }
  return { valid: true };
};
   
const validatePassword = (password) => {
  if (!password || password.length < 6) {
    return { valid: false, message: '"password" length must be at least 6 characters long' };
  }
  return { valid: true };
};
   
const validateRequiredFieldsUser = (req, res, next) => {
  const { displayName, email, password } = req.body;
   
  const displayNameValidation = validateDisplayName(displayName);
  if (!displayNameValidation.valid) {
    return res.status(400).json({ message: displayNameValidation.message });
  }
   
  const emailValidation = validateEmail(email);
  if (!emailValidation.valid) {
    return res.status(400).json({ message: emailValidation.message });
  }
   
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.valid) {
    return res.status(400).json({ message: passwordValidation.message });
  }
   
  next();
};
   
module.exports = validateRequiredFieldsUser;