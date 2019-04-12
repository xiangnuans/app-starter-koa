'use strict';

/*
 * 包括：此接口用于线上服务的健康检查
 */
const { status } = require('../service');

class StatusController {
  /**
   * 服务健康检查
   */
  static async check(ctx) {
    ctx.body = {};
    ctx.log.info('[service is checked, it\'s ok.]');
  }

  /**
   * 数据库健康检查
   */
  static async checkMysql(ctx) {
    const data = await status.checkMysql();
    ctx.body = {
      data,
    };
    ctx.log.info('[db is checked, it\'s ok.]');
  }
}

module.exports = StatusController;
