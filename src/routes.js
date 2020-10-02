const { Router } = require('express');

const route = Router();

const UserController = require('./app/controllers/UserController');
const PostController = require('./app/controllers/PostController');
const middleware = require('./app/middlewares/auth');

route.get('/users', UserController.index);
route.get('/users/:username', UserController.show);
route.post('/users', UserController.store);
route.post('/users/login', UserController.login);

route.use(middleware.auth);

route.get('/posts', PostController.index);
route.post('/posts', PostController.store);
route.get('/posts/:id', PostController.show);

module.exports = route;
