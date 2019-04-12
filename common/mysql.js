'use strict';

const Sequelize = require('sequelize');
const log = require('./log');
const config = require('../config');

const mysqlOpt = config.mysql;

const sequelize = new Sequelize(
  mysqlOpt.database,
  mysqlOpt.user,
  mysqlOpt.password, {
    host: mysqlOpt.host,
    port: mysqlOpt.port,
    dialect: 'mysql',
    pool: mysqlOpt.pool,
    operatorsAliases: false,
  },
);

sequelize.authenticate().then(() => {
  log.info('Connection has been established successfully.');
}).catch((err) => {
  log.warn('Unable to connect to the database: ', err);
});

module.exports = {
  sequelize,
};
