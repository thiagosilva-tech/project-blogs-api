const mapStatus = require('../utils/httpMapper');
const { categoryService } = require('../services');

const create = async (req, res) => {
  const { status, data } = await categoryService.create(req.body);
  res.status(mapStatus(status)).json(data);
};

const findAll = async (req, res) => {
  const { status, data } = await categoryService.findAll();
  res.status(mapStatus(status)).json(data);
};

module.exports = {
  create,
  findAll,
};