'use strict';

/**
 * 统一参数校验中间件
 */

const Joi = require('joi');
const SysError = require('../common/sys_err');
const { errMsg, errCode } = require('../common/err_code');
const config = require('../config').default;

module.exports = (paramSchema) => { // eslint-disable-line
  return async function checkParam(ctx, next) {
    const reqParam = {
      router: ctx.params,
      query: ctx.query,
      body: ctx.request.body,
      state: ctx.state,
    };
    if (paramSchema) {
      const schemaKeys = Object.getOwnPropertyNames(paramSchema);
      // 参数检查
      schemaKeys.some((item) => { // eslint-disable-line
        const validResult = Joi.validate(reqParam[item], paramSchema[item], { allowUnknown: true });
        if (validResult.error) {
          ctx.log.warn('[param error]: ', JSON.stringify(validResult.error.message));
          const err = new SysError(errMsg.PARAMS, errCode.ERROR_PARAMS);
          if (config.debug) {
            err.data = validResult.error;
          }
          ctx.throw(500, err);
        }
      });
    }
    ctx.reqParam = reqParam;
    await next();
  };
};
