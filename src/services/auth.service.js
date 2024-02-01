const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const generateToken = (payload) => jwt
  .sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '10d' });

const decodeToken = (token) => {
  try {
    return jwt.verify(
      token, 
      JWT_SECRET, 
      { algorithm: 'HS256', expiresIn: '10d' },
    );
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  generateToken,
  decodeToken,
};