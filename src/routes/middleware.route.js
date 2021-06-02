const IndexMiddleware = require('../middlewares/index.middleware');

const middlewareRoutes = [
  {
    method: 'use',
    route: '',
    controller: IndexMiddleware,
    action: 'preprocess'
  }, {
    method: 'param',
    route: ['name', 'id'],
    controller: IndexMiddleware,
    action: 'preprocessQueryParam'
  }
];

module.exports = middlewareRoutes;
