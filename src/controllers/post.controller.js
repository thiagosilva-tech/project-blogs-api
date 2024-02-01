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

module.exports = {
  create,
  findAll,
};