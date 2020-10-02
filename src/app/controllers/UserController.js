const UserRepository = require('../repositories/UserRepository');

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
}

module.exports = new UserController();
