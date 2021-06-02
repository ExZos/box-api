const middlewareRoutes = require('./routes/middleware.route');
const serviceRoutes = require('./routes/service.route');

const routes = [...middlewareRoutes, ...serviceRoutes];

module.exports = routes;
