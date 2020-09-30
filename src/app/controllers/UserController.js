const UserRepository = require('../repositories/UserRepository');

class UserController {
  index(req, res) {

  }

  show(req, res) {

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
  }
}

module.exports = new UserController();
