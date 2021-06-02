const IndexManager = require('../managers/index.manager');

class IndexController {
  async index(req, res, next) {
    const body = await IndexManager.getEntryText();

    res.status(200).send(body);
  }

  query(req, res, next) {
    const body = IndexManager.formatParam(req.params.name, req.query.value);

    res.status(200).send(body);
  }

  form(req, res, next) {
    let body = ''; // Running string

    // Build comma separated list of keys/values
    for(const k in req.body)
      body += IndexManager.formatKeyValue(k, req.body[k]) + ', ';
    body = body.substring(0, body.length - 2); // Remove trailing comma

    res.status(200).send(body);
  }
}

module.exports = IndexController;
