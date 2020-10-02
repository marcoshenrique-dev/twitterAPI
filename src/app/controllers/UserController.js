const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/UserRepository');
const config = require('../../config');

class UserController {
  async index(req, res) {
    try {
      const result = await UserRepository.findAll();
      res.status(200).send(result);
    } catch {
      res.status(400).send({ error: 'users not find' });
    }
  }

  async show(req, res) {
    const { username } = req.params;
    try {
      const result = await UserRepository.findByUsername(username);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  async store(req, res) {
    const {
      name,
      username,
      email,
      password,
      description,
      banner_url,
      profile_image,

    } = req.body;

    try {
      const result = await UserRepository.create({
        name,
        username,
        email,
        password,
        description,
        banner_url,
        profile_image,
      });

      res.status(200).send(result);
    } catch {
      res.status(400).send({ error: 'User not created' });
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const result = await UserRepository.login(email, password);

      if (result) {
        const token = await jwt.sign({ email }, config.KEY, {
          expiresIn: 86400,
        });
        result.token = token;
      } else {
        result = { error: 'user not found' };
      }
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ error });
    }
  }
}

module.exports = new UserController();
