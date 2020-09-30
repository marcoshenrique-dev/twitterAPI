const { Router } = require('express');

const route = Router();

const UserController = require('./app/controllers/UserController');

route.get('/users', UserController.index);
route.get('/user/:username', UserController.show);
route.post('/user', UserController.store);

module.exports = route;
