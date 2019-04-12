'use strict';

const { DEBUG, MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, REDIS_HOST } = process.env;

module.exports = {
  debug: DEBUG === 'true',
  env: 'prd',
  port: 9025,
  logger: {
    dirname: '/usr/local/app/logs',
  },
  mysql: {
    host: MYSQL_HOST,
    port: 3306,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: 'flow',
    dialect: 'mysql',
    dialectOptions: {
      // 字符集
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      supportBigNumbers: true,
      bigNumberStrings: true,
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 1000,
      connectionLimit: 10,
      dateStrings: true,
    },
  },
  redis: {
    port: 6379,
    host: REDIS_HOST,
    connectTimeout: 10000,
  },
};
