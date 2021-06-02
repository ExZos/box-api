const express = require('express');
const bodyParser = require('body-parser');

const {hostname, port} = require('../config.json');
const routes = require('./routes');
const middlewareRoutes = require('./routes/middleware.route');
const serviceRoutes = require('./routes/service.route');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Does something when 'section' path param is sent
// app.param(['name'], (req, res, next, name) => {
//   console.log('name: ' + name);
//   next();
// });

// TODO: make it work with routes
// Register middleware routes
middlewareRoutes.forEach(r => {
  app[r.method](r.route, (req, res, next, ...rest) => {
    new r.controller()[r.action](req, res, next, ...rest);
  });
});

// Register service routes
serviceRoutes.forEach(r => {
  app[r.method](r.route, (req, res, next) => {
    // Controller callback
    const result = new r.controller()[r.action](req, res, next);

    // Handle promises
    if(result instanceof Promise) {
      return result
        .then(r => res.end(r))
        .catch(err => {
          console.log(err);
          res.status(500).end();
        });
    }

    // Handle non-promises
    res.end(result);
  });
});

// Start server
app.listen(port, hostname, () => {
  console.log(`App listening at http://${hostname}:${port}`);
});
