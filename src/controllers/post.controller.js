const mapStatus = require('../utils/httpMapper');
const { postService } = require('../services'); 

const create = async (req, res) => {
  const userId = req.user;
  const newPost = {
    title: req.body.title, 
    content: req.body.content, 
    categoryIds: req.body.categoryIds,
    userId,
  };
  const { status, data } = await postService.create(newPost);
  
  res.status(mapStatus(status)).json(data);
};

const findAll = async (_req, res) => {
  const { status, data } = await postService.findAll();
  res.status(mapStatus(status)).json(data);
};

const findOne = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.findOne(id);
  res.status(mapStatus(status)).json(data);
};

const update = async (req, res) => {
  const userId = req.user;
  const { id } = req.params;
  const { title, content } = req.body;
  const { status, data } = await postService.update(id, { title, content }, userId);
  res.status(mapStatus(status)).json(data);
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
};