const { Router } = require('express');

const route = Router();

const UserController = require('./app/controllers/UserController');
const PostController = require('./app/controllers/PostController');

route.get('/users', UserController.index);
route.get('/users/:username', UserController.show);
route.post('/users', UserController.store);

route.get('/posts', PostController.index);
route.post('/post', PostController.store);
route.get('/post/:id', PostController.show);

module.exports = route;
