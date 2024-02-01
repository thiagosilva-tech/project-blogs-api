const { authService } = require('../services');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
    
  const [, token] = authorization.split(' ');
  try {
    const decoded = authService.decodeToken(token);
    req.user = decoded.id;
    next();
  } catch (erro) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;