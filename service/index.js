'use strict';

/**
 * 数据模型层方法统一透出，业务层引用时使用 require('./model/mysql')
 */

const status = require('./status');
const example = require('./example');

module.exports = {
  status,
  example,
};
