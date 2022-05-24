const dbConnection = require('../db-connection');
const Box = require('../models/box.model');
const DAOException = require('../exceptions/dao.exception');

class BoxDAO {
  static async selectAll(name, type, pageSize, page, sortBy, sortOrder) {
    const queryConj = this.filterQueryBuilder(name, type);

    const sortQuery = {[sortBy]: sortOrder};
    if(sortBy === 'name') sortQuery.type = 1;
    else sortQuery.name = 1;

    return await Box.find(queryConj)
      .sort(sortQuery)
      .skip(pageSize * (page - 1))
      .limit(pageSize);
  }

  static async selectCount(name, type) {
    const queryConj = this.filterQueryBuilder(name, type);
    return await Box.countDocuments(queryConj);
  }

  static async selectById(id) {
    return await Box.findById(id)
      .catch(err => {
        if(err.name === 'CastError') throw new DAOException(404);
      });
  }

  static async selectByName(name) {
    return await Box.findOne({name: name})
      .catch(err => {
        if(err.name === 'CastError') throw new DAOException(404);
      });
  }

  static filterQueryBuilder(name, type) {
    const queryItems = [];
    if(name) queryItems.push({name: {$regex: '.*' + name + '.*', $options: 'i'}});
    if(type) queryItems.push({type: {$regex: '.*' + type + '.*', $options: 'i'}});

    const queryConj = {};
    if(queryItems.length > 0) queryConj.$or = queryItems;

    return queryConj;
  }

  static async create(name, type, stuff) {
    const box = new Box({
      name: name,
      type: type,
      stuff: stuff
    });

    return await box.save();
  }

  // TODO: fix nested items in stuff overwritten
  static async update(id, name, type, stuff) {
    const box = await Box.findById(id)
      .catch(err => {
        if(err.name === 'CastError') throw new DAOException(404);
      });

    if(!box)
      return null;

    if(name) {
      box.name = name;
      box.markModified('name');
    }

    if(type) {
      box.type = type;
      box.markModified('type');
    }

    if(stuff) {
      for(const k in stuff)
        box.stuff[k] = stuff[k];
      box.markModified('stuff');
    }

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

  static async deleteStuff(id, stuff) {
    const box = await Box.findById(id)
      .catch(err => {
        if(err.name === 'CastError') throw new DAOException(404);
      });

    if(!box)
      return null;

    stuff.forEach(k => delete box.stuff[k]);
    box.markModified('stuff');

    return await box.save();
  }
}

module.exports = BoxDAO;
