const dbConnection = require('../db-connection');
const Thing = require('../models/thing.model');
const DAOException = require('../exceptions/dao.exception');

class ThingDAO {
  static async selectAll() {
    return await Thing.find();
  }

  static async selectById(id) {
    return await Thing.findById(id)
      .catch(err => {
        if(err.name === 'CastError') throw new DAOException(404);
      });
  }

  static async create(name, quantity) {
    const thing = new Thing({
      name: name,
      quantity: quantity
    });

    return await thing.save();
  }

  static async update(id, name, quantity) {
    const thing = await Thing.findById(id)
      .catch(err => {
        if(err.name === 'CastError') throw new DAOException(404);
      });

    if(!thing)
      return null;

    if(name) thing.name = name;
    if(quantity) thing.quantity = quantity;

    return await thing.save();
  }

  static async delete(id) {
    const thing = await Thing.findById(id)
      .catch(err => {
        if(err.name === 'CastError') throw new DAOException(404);
      });

    if(!thing)
      return null;

    return await thing.remove();
  }
}

module.exports = ThingDAO;
