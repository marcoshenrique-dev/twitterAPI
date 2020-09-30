const { Router } = require('express');

const route = Router();

const UserController = require('./app/controllers/UserController');

route.get('/users', UserController.index);
route.get('/users/:username', UserController.show);
route.post('/users', UserController.store);

module.exports = route;
