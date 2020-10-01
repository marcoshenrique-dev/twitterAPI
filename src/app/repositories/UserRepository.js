const db = require('../../database/index');

class UserRepository {
  async findAll() {
    const row = await db.query('SELECT * FROM users');
    return row;
  }

  async findByUsername(username) {
    const [row] = await db.query(`SELECT * FROM users WHERE username='${username}'`);

    return row;
  }

  async create(data) {
    const [row] = await db.query(`
    INSERT INTO users(name,username,email,password,description,banner_url,profile_image)
    VALUES($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
     `, [data.name, data.username, data.email, data.password, data.description,
      data.banner_url, data.profile_image]);

    return row;
  }
}

module.exports = new UserRepository();
