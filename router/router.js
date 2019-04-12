'use strict';

const { ctrlExample } = require('../controller');

// 路由列表
const routeArray = [

  // example
  {
    method: 'get',
    path: '/cluster',
    controller: ctrlExample.createCluster,
  },
  {
    method: 'get',
    path: '/publishMsg',
    controller: ctrlExample.publishMsg,
  },
];

module.exports = routeArray;
