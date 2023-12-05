// Update with your config settings.
require('dotenv').config()

module.exports = {

  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password:process.env.PASSWORD,
    database: 'fzWorld',
  }
  

};
