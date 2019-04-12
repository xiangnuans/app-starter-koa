'use strict';

const errCode = {
  SUCCESS_OK: 'OK',
  ERROR_UNKNOWN: 'ERROR_UNKNOWN',
  ERROR_PARAMS: 'ERROR_PARAMS',
  ERROR_CLUSTER_INSERT: 'ERROR_INSERT_CLUSTER',
};

const errMsg = {
  PARAMS: '参数错误,请检查',
  CLUSTER_INSERT: '微信群组新增数据错误',

};

module.exports = {
  errCode,
  errMsg,
};
