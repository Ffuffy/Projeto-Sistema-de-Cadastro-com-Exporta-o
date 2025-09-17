// models/index.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const dialect = process.env.DB_DIALECT || 'sqlite'; // 'mysql' ou 'sqlite'

let sequelize;
if (dialect === 'mysql') {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
  });
} else {
  // sqlite (arquivo local)
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.SQLITE_STORAGE || 'database.sqlite',
    logging: false,
  });
}

module.exports = { sequelize }; //formulario de exportação para outros arquivos
