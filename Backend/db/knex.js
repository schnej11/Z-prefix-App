const knex = require('knex');


const dbConfig = {
  client: 'postgresql', 
  connection: {
    host: 'localhost', 
    user: 'postgres', 
    password: 'postgres', 
    database: 'items', 
  },
};


const db = knex(dbConfig);

module.exports = db;
