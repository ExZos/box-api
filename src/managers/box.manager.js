const BoxDAO = require('../daos/box.dao');
const ManagerException = require('../exceptions/manager.exception');

class BoxManager {
  static async list() {
    const boxes = await BoxDAO.selectAll();

    return boxes;
  }

  static async get(id) {
    const box = await BoxDAO.selectById(id);

    return box;
  }

  static async add(stuff) {
    const box = await BoxDAO.create(stuff);

    return box;
  }

  static async remove(id) {
    const box = await BoxDAO.delete(id);

    return box;
  }

  static async changeStuff(id, stuff) {
    const box = await BoxDAO.updateStuff(id, stuff);

    return box;
  }

  static async removeStuff(id, stuff) {
    const box = await BoxDAO.deleteStuff(id, stuff);

    return box;
  }
}

module.exports = BoxManager;
