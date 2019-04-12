'use strict';

const Koa = require('koa');
const koaStatic = require('koa-static');
const pathSys = require('path');
const config = require('./config');
const log = require('./common/log');
const middleware = require('./middleware');

const app = new Koa();

// 静态apidoc
app.use(koaStatic(pathSys.join(__dirname, './common/apidoc')));
// 中间件
middleware.bind(app);

log.info(`============= env: ${config.env} =============`);

const server = app.listen(config.port, '0.0.0.0', () => {
  log.info(`Server listening on port: ${server.address().port}`);
});

// 暴露app出去，用于测试
module.exports = app;
