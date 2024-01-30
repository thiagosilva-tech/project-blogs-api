const { userService } = require('../services');
const mapStatus = require('../utils/httpMapper');

const create = async (req, res) => {
  const { displayName, email, password, _image } = req.body;
  const { status, message } = await userService.create({ displayName, email, password, _image });

  res.status(mapStatus(status)).json(message);
};

module.exports = { 
  create, 
};