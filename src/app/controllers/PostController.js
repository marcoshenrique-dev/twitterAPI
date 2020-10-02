const PostRepository = require('../repositories/PostRepository');

class PostController {
  async index(req, res) {
    try {
      const result = await PostRepository.findAll();
      res.status(200).send(result);
    } catch {
      res.status(400).send({ error: 'Posts not find' });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const result = await PostRepository.findById(id);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  async store(req, res) {
    const {
      id_user,
      description,
      image_url,

    } = req.body;

    try {
      const result = await PostRepository.create({
        id_user,
        description,
        image_url,
      });

      res.status(200).send(result);
    } catch {
      res.status(400).send({ error: 'User not created' });
    }
  }
}

module.exports = new PostController();
