const db = require('../../database/index');

class PostRepository {
  async findAll() {
    const row = await db.query('SELECT * FROM posts');
    return row;
  }

  async findById(id) {
    const [row] = await db.query(`SELECT * FROM posts WHERE id='${id}'`);

    return row;
  }

  async create(data) {
    const [row] = await db.query(`
   INSERT INTO posts(id_user,description,image_url)
   VALUES($1, $2, $3)
   RETURNING *
    `, [data.id_user, data.description, data.image_url]);

    return row;
  }
}

module.exports = new PostRepository();
