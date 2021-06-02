class IndexManager {
  static async getEntryText() {
    return 'Huehue';
  }

  static formatParam(name, value) {
    const returnedValue = value ? value : 'n/a';

    return name + ': ' + returnedValue;
  }

  static formatKeyValue(key, value) {
    return key + ': '+ value;
  }
}

module.exports = IndexManager;
