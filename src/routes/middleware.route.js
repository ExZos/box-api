const IndexMiddleware = require('../middlewares/index.middleware');
const BoxMiddleware = require('../middlewares/box.middleware');

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
  }, {
    method: 'use',
    route: '',
    controller: BoxMiddleware,
    action: 'corsFilter'
  }
];

module.exports = middlewareRoutes;
