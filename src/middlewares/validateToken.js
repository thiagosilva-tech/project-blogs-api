const { decodeToken } = require('../services/auth.service');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
    
  const [, token] = authorization.split(' ');
  try {
    const decoded = decodeToken(token);
    res.locals.user = decoded;
    next();
  } catch (erro) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateToken };