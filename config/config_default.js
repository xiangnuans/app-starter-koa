'use strict';

const path = require('path');

module.exports = {
  debug: true,
  env: 'dev',
  port: 9025,
  logger: {
    dirname: path.join(__dirname, '..', 'logs'),
  },
  mysql: {
    host: 'rm-bp171b759ha99x5wfso.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'root',
    password: 'HPGQEhutFBUCi8ZE8JYgWDwZVhAHXWJx',
    database: 'develop',
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
  authServer: {
    host: 'mqauth.aliyuncs.com',
  },
  redis: {
    port: 6379,
    host: '',
    connectTimeout: 10000,
  },
  oss: {
    // 上传地址
    host: 'lab-resource-develop.oss-cn-hangzhou.aliyuncs.com',
    accessKeyId: 'LTAITwRV1Y07wisB',
    accessKeySecret: 'RR7zdz6iooUpMdJInAWPstkHsKNwMu',
  },
  serviceKey: '6afb7b3fa54800351e393dfc86a83949',
};
