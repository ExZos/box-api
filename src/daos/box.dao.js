const dbConnection = require('../db-connection');
const Box = require('../models/box.model');
const DAOException = require('../exceptions/dao.exception');

class BoxDAO {
  static async selectAll() {
    return await Box.find();
  }

  static async selectById(id) {
    return await Box.findById(id)
      .catch(err => {
        if(err.name === 'CastError') throw new DAOException(404);
      });
  }

  static async create(stuff) {
    const box = new Box({
      stuff: stuff
    });

    return await box.save();
  }

  static async delete(id) {
    const box = await Box.findById(id)
      .catch(err => {
        if(err.name === 'CastError') throw new DAOException(404);
      });

    if(!box)
      return null;

    return await box.remove();
  }

  static async updateStuff(id, stuff) {
    const box = await Box.findById(id)
      .catch(err => {
        if(err.name === 'CastError') throw new DAOException(404);
      });

    if(!box)
      return null;

    for(const k in stuff)
      box.stuff[k] = stuff[k];
    box.markModified("stuff");

    return await box.save();
  }

  static async deleteStuff(id, stuff) {
    const box = await Box.findById(id)
      .catch(err => {
        if(err.name === 'CastError') throw new DAOException(404);
      });

    if(!box)
      return null;

    stuff.forEach(k => delete box.stuff[k]);
    box.markModified("stuff");

    return await box.save();
  }
}

module.exports = BoxDAO;
