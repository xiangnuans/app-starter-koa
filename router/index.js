'use strict';

const Router = require('koa-router');

const routers = require('./router');
const middlewareParamCheck = require('../middleware/param_valid');
const status = require('../controller/status');
const schema = require('../schema');

const router = new Router();

// 参数校验
schema.build();

// 健康检查
router.get('/status', status.check);
router.get('/check_mysql', status.checkMysql);

// 加载api路由列表
routers.forEach((item) => {
  const method = item.method ? item.method : 'all';
  router[method](item.path,
    middlewareParamCheck(item.controller.paramSchema),
    item.controller);
});

module.exports = router;
