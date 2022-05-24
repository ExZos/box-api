const BoxDAO = require('../daos/box.dao');
const ManagerException = require('../exceptions/manager.exception');

class BoxManager {
  static async list(name, type, pageSize, page, sortBy, sortOrder) {
    return await BoxDAO.selectAll(name, type, pageSize, page, sortBy, sortOrder);
  }

  static async get(id) {
    return await BoxDAO.selectById(id);
  }

  static async getCount(name, type) {
    return await BoxDAO.selectCount(name, type);
  }

  static async add(name, type, stuff) {
    if(name) {
      const dupName = await BoxDAO.selectByName(name);
      if(dupName)
        throw new ManagerException(403, name + ' already exists');
    }

    return await BoxDAO.create(name, type, stuff);
  }

  static async update(id, name, type) {
    if(name) {
      const dupName = await BoxDAO.selectByName(name);
      if(dupName && String(dupName._id) !== id)
        throw new ManagerException(403, name + ' already exists');
    }

    return await BoxDAO.update(id, name, type, null);
  }

  static async remove(id) {
    return await BoxDAO.delete(id);
  }

  static async changeStuff(id, stuff) {
    return await BoxDAO.update(id, null, null, stuff);
  }

  static async removeStuff(id, stuff) {
    return await BoxDAO.deleteStuff(id, stuff);
  }
}

module.exports = BoxManager;
