'use strict';

const { errCode } = require('./err_code');

// 系统自自定义错误
class SysError extends Error {
  constructor(message, errorcode = errCode.ERROR_UNKNOWN) {
    super(message);
    this.code = errorcode;
  }
}

module.exports = SysError;
