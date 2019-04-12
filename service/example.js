'use strict';

/**
 * 业务逻辑层，解析用户输入样例
 */
const { mysql, log } = require('../common');

const Sequelize = mysql.sequelize;
const Example = Sequelize.import('../model/example');
Example.sync({ force: false });

class ExampleModel {
  /**
   * 创建微信群组
   */
  static async createCluster(data) {
    const result = await Example.create(data);
    log.info('创建数据成功', result);
    return result;
  }
}

module.exports = ExampleModel;
