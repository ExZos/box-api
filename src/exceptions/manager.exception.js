/*
  Provides general exceptions for Managers regardless of implementation
  For simplicity, exception codes and meanings are the same as HTTP status codes
*/

class ManagerException {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }
}

module.exports = ManagerException;
