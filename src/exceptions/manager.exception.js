/*
  Provides general exceptions for Managers regardless of implementation
  For simplicity, exception codes and meanings are the same as HTTP status codes
*/

class ManagerException {
  constructor(code) {
    this.code = code;
  }
}

module.exports = ManagerException;
