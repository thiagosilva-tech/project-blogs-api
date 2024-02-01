const mapStatus = require('../utils/httpMapper');
const { loginService } = require('../services');

const validateLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.validateLogin(email, password);
  if (!data.token) {
    return res.status(mapStatus(status)).json(data);
  }
  req.headers.authorization = `Bearer ${data.token}`;
  return res.status(mapStatus(status)).json(data);
};

module.exports = { validateLogin };