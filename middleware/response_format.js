'use strict';

/**
 * response 格式化中间件
 */

module.exports = () => async (ctx, next) => {
  try {
    await next();
    ctx.body = {
      code: ctx.errCode.SUCCESS_OK,
      success: true,
      data: ctx.body,
      message: null,
    };
  } catch (err) {
    ctx.log.error('[server error]: ', JSON.stringify(ctx.request.method), JSON.stringify(ctx.request.originalUrl),
      JSON.stringify(ctx.status), JSON.stringify(ctx.reqParam), err);
    if (err.statusCode === 404 || err.status === 404) {
      ctx.status = 404;
    } else {
      ctx.status = 200;
    }
    ctx.body = {
      code: err.code || ctx.errCode.ERROR_UNKNOWN,
      success: false,
      data: err.data || null,
      message: err.message,
    };
  }
};
