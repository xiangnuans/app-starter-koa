'use strict';

/**
 * 中间件集合
 */

const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const logMiddleware = require('./log');
const log = require('../common/log');
const router = require('../router');
const responseFormat = require('./response_format');
const auth = require('./auth');

exports.bind = (app) => {
  // 捕获应用级错误
  app.on('error', (err) => {
    log.error('[server error]: ', err);
  });

  app.use(async (ctx, next) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
      ctx.body = '';
      return;
    }
    await next();
  });

  // 中间件列表
  app
    .use(bodyParser({
      enableTypes: ['json', 'form'],
      formLimit: '2mb',
      jsonLimit: '3mb',
    }))
    .use(cors({
      credentials: true,
    }))
    .use(logMiddleware())
    .use(auth())
    .use(responseFormat())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(async (ctx, next) => {
      if (ctx.status === 404) {
        ctx.throw(404, `path '${ctx.path}' not found`);
      }
      await next();
    });
};
