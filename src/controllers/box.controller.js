const BoxManager = require('../managers/box.manager');
const DAOException = require('../exceptions/dao.exception');
const ManagerException = require('../exceptions/manager.exception');


class BoxController {
  async list(req, res, next) {
    try {
      const boxes = await BoxManager.list();

      res.status(200).send(boxes);
    } catch(e) {
      if(e instanceof DAOException || e instanceof ManagerException)
        res.status(e.code).send();

      res.status(500).send();
    }
  }

  async get(req, res, next) {
    try {
      const box = await BoxManager.get(req.params.id);

      if(!box)
        res.status(404).send();

      res.status(200).send(box);
    } catch(e) {
      if(e instanceof DAOException || e instanceof ManagerException)
        res.status(e.code).send();

      res.status(500).send();
    }
  }

  async add(req, res, next) {
    try {
      const box = await BoxManager.add(req.body.stuff);

      if(!box)
        res.status(500).send();

      res.status(200).send(box);
    } catch(e) {
      if(e instanceof DAOException || e instanceof ManagerException)
        res.status(e.code).send();

      res.status(500).send();
    }
  }

  async remove(req, res, next) {
    try {
      const box = await BoxManager.remove(req.params.id);

      if(!box)
        res.status(404).send();

      res.status(200).send(box);
    } catch(e) {
      if(e instanceof DAOException || e instanceof ManagerException)
        res.status(e.code).send();

      res.status(500).send();
    }
  }

  async changeStuff(req, res, next) {
    try {
      const box = await BoxManager.changeStuff(req.params.id, req.body.stuff);

      if(!box)
        res.status(404).send();

      res.status(200).send(box);
    } catch(e) {
      if(e instanceof DAOException || e instanceof ManagerException)
        res.status(e.code).send();

      res.status(500).send();
    }
  }

  async removeStuff(req, res, next) {
    try {
      const box = await BoxManager.removeStuff(req.params.id, req.body.stuff);

      if(!box)
        res.status(404).send();

      res.status(200).send(box);
    } catch(e) {
      if(e instanceof DAOException || e instanceof ManagerException)
        res.status(e.code).send();

        console.log(e);
      res.status(500).send();
    }
  }
}

module.exports = BoxController;
