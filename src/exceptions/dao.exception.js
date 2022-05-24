/*
  Provides general exceptions for DAOs regardless of implementation
  For simplicity, exception codes and meanings are the same as HTTP status codes
*/

class DAOException {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }
}

module.exports = DAOException;
