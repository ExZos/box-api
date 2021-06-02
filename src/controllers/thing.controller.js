const ThingManager = require('../managers/thing.manager');
const DAOException = require('../exceptions/dao.exception');

class ThingController {
  async list(req, res, next) {
    const things = await ThingManager.list();

    res.status(200).send(things);
  }

  async get(req, res, next) {
    try {
      const thing = await ThingManager.get(req.params.id);

      if(!thing)
        res.status(404).send();

      res.status(200).send(thing);
    } catch(e) {
      if(e instanceof DAOException)
        res.status(e.code).send();

      res.status(500).send();
    }
  }

  async add(req, res, next) {
    const thing = await ThingManager.add(req.body.name, req.body.quantity);

    if(!thing)
      res.status(500).send();

    res.status(200).send(thing);
  }

  async modify(req, res, next) {
    try {
      const thing = await ThingManager.modify(req.body.id, req.body.name, req.body.quantity);

      if(!thing)
        res.status(404).send();

      res.status(200).send(thing);
    } catch(e) {
      if(e instanceof DAOException)
        res.status(e.code).send();

      res.status(500).send();
    }
  }

  async remove(req, res, next) {
    try {
      const thing = await ThingManager.remove(req.params.id);

      if(!thing)
        res.status(404).send();

      res.status(200).send(thing);
    } catch(e) {
      if(e instanceof DAOException)
        res.status(e.code).send();

      res.status(500).send();
    }
  }
}

module.exports = ThingController;
