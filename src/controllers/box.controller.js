const url = require('url');
const querystring = require('querystring');

const BoxManager = require('../managers/box.manager');
const DAOException = require('../exceptions/dao.exception');
const ManagerException = require('../exceptions/manager.exception');


class BoxController {
  async list(req, res, next) {
    try {
      const qs = url.parse(req.url).query;
      const queryParams = querystring.parse(qs);

      const name = queryParams.name;
      const type = queryParams.type;

      const boxes = await BoxManager.list(name, type,
        parseInt(queryParams.pageSize), parseInt(queryParams.page),
        queryParams.sortBy, parseInt(queryParams.sortOrder));

      const count = await BoxManager.getCount(name, type);

      res.status(200).send({
        boxes: boxes,
        count: count
      });
    } catch(e) {
      if(e instanceof DAOException || e instanceof ManagerException)
        res.status(e.code).send(e.message);

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
        res.status(e.code).send(e.message);

      res.status(500).send();
    }
  }

  async add(req, res, next) {
    try {
      const box = await BoxManager.add(req.body.name, req.body.type, req.body.stuff);

      if(!box)
        res.status(500).send();

      res.status(200).send(box);
    } catch(e) {
      if(e instanceof DAOException || e instanceof ManagerException)
        res.status(e.code).send(e.message);

      res.status(500).send();
    }
  }

  async update(req, res, next) {
    try {
      const box = await BoxManager.update(req.params.id, req.body.name, req.body.type);

      if(!box)
        res.status(404).send();

      res.status(200).send(box);
    } catch(e) {
      if(e instanceof DAOException || e instanceof ManagerException)
        res.status(e.code).send(e.message);

      console.error(e);
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
        res.status(e.code).send(e.message);

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
        res.status(e.code).send(e.message);

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
        res.status(e.code).send(e.message);

      res.status(500).send();
    }
  }
}

module.exports = BoxController;
