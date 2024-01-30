const mapStatus = require('../utils/httpMapper');
const { loginService } = require('../services');

const validateLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.validateLogin(email, password);
  return res.status(mapStatus(status)).json(data);
};

module.exports = { validateLogin };