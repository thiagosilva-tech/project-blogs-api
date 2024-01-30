const decodeToken = require('../services/auth.service');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'UNAUTHORIZED' });
  }
    
  const [, token] = authorization.split(' ');
  try {
    const decoded = decodeToken(token);
    res.locals.user = decoded;
    console.log(res.locals.user);
    console.log(decoded);
    next();
  } catch (erro) {
    return res.status(401).json({ message: erro.message });
  }
};

module.exports = { validateToken };