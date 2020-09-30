const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'twitter',
});

client.connect();

exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};
