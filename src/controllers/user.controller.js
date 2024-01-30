const { userService } = require('../services');
const mapStatus = require('../utils/httpMapper');

const create = async (req, res) => {
  const { status, data } = await userService.create(req.body);

  res.status(mapStatus(status)).json(data);
};

module.exports = { 
  create, 
};