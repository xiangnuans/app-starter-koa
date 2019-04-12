'use strict';

const { mysql } = require('../common');

const SQL_CHECK = 'show tables;';

class StatusService {
  /**
   * 数据库健康检查
   */
  static async checkMysql() {
    const res = await mysql.query(SQL_CHECK);
    return res[0];
  }
}

module.exports = StatusService;
