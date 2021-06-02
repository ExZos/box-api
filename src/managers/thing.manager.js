const ThingDAO = require('../daos/thing.dao');

class ThingManager {
  static async list() {
    const things = await ThingDAO.selectAll();

    return things;
  }

  static async get(id) {
    const thing = await ThingDAO.selectById(id);

    return thing;
  }

  static async add(name, quantity) {
    const thing = await ThingDAO.create(name, quantity);

    return thing;
  }

  static async modify(id, name, quantity) {
    const thing = await ThingDAO.update(id, name, quantity);

    return thing;
  }

  static async remove(id) {
    const thing = await ThingDAO.delete(id);

    return thing;
  }
}

module.exports = ThingManager;
