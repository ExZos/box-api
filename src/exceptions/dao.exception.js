/*
  Provides general exceptions for DAOs regardless of implementation
  For simplicity, exception codes and meanings are the same as HTTP status codes
*/

class DAOException {
  constructor(code) {
    this.code = code;
  }
}

module.exports = DAOException;
