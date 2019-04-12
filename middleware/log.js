'use strict';

/**
 * 日志中间件
 */

const log = require('../common/log');
const errCode = require('../common/err_code');

module.exports = () => async (ctx, next) => {
  if (ctx.request.originalUrl === '/favicon.ico') {
    return;
  }
  ctx.log = log;
  ctx.errCode = errCode;
  let ip = ctx.request.ip.indexOf('::ffff:') !== -1 ? ctx.request.ip.substr(7) : ctx.request.ip;
  ip = ip.indexOf('::1') !== -1 ? '127.0.0.1' : ip;
  const startTime = new Date();
  await next();
  const time = `${(new Date() - startTime)}ms`;
  ctx.log.info('[request log]: ', ip, ctx.request.method, ctx.request.originalUrl, time);
};
