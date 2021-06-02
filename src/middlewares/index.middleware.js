class IndexMiddleware {
  preprocess(req, res, next) {
    // Preprocess request body params
    for(const k in req.body) {
      const param = req.body[k];

      if(typeof param == 'string')
        req.body[k] = param.trim();
    }

    // Preprocess request query params
    for(const k in req.query) {
      const param = req.query[k];

      if(typeof param == 'string')
        req.query[k] = param.trim();
    }

    next();
  }

  preprocessQueryParam(req, res, next, value, name) {
    value = value.trim();

    console.log(name + ': ' + value);
    next();
  }
}

module.exports = IndexMiddleware;
