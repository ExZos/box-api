const IndexController = require('../controllers/index.controller');
const ThingController = require('../controllers/thing.controller');
const BoxController = require('../controllers/box.controller');

const serviceRoutes = [
  {
    method: 'get',
    route: '/',
    controller: IndexController,
    action: 'index'
  }, {
    method: 'get',
    route: '/query/:name',
    controller: IndexController,
    action: 'query'
  }, {
    method: 'get',
    route: '/form',
    controller: IndexController,
    action: 'form'
  },

  // Things
  {
    method: 'get',
    route: '/things',
    controller: ThingController,
    action: 'list'
  }, {
    method: 'get',
    route: '/things/:id',
    controller: ThingController,
    action: 'get'
  }, {
    method: 'post',
    route: '/things',
    controller: ThingController,
    action: 'add'
  }, {
    method: 'put',
    route: '/things',
    controller: ThingController,
    action: 'modify'
  }, {
    method: 'delete',
    route: '/things/:id',
    controller: ThingController,
    action: 'remove'
  },

  // Boxes
  {
    method: 'get',
    route: '/boxes',
    controller: BoxController,
    action: 'list'
  }, {
    method: 'get',
    route: '/boxes/:id',
    controller: BoxController,
    action: 'get'
  }, {
    method: 'post',
    route: '/boxes',
    controller: BoxController,
    action: 'add'
  }, {
    method: 'put',
    route: '/boxes/:id/stuff',
    controller: BoxController,
    action: 'changeStuff'
  }, {
    method: 'delete',
    route: '/boxes/:id/stuff',
    controller: BoxController,
    action: 'removeStuff'
  }, {
    method: 'delete',
    route: '/boxes/:id',
    controller: BoxController,
    action: 'remove'
  }
];

module.exports = serviceRoutes;
