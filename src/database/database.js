const mysql = require('mysql');

const dbOptions = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'admin',
  database: 'company'
};

module.exports = {
  dbOptions
}