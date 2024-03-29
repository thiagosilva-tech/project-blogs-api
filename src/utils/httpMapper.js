const statusCodes = {
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  OK: 200,
  SERVER_ERROR: 500,
  CONFLICT: 409,
  CREATED: 201,
  NO_CONTENT: 204,
};
  
const mapStatus = (status) => statusCodes[status] || 500;
  
module.exports = mapStatus;