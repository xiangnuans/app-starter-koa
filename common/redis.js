'use strict';

const Redis = require('ioredis');

const log = require('./log');
const redisConf = require('../config').redis;

const redis = new Redis(redisConf);

redis.on('connect', () => {
  log.info('redis connect.');
});

redis.on('ready', () => {
  log.info('redis ready.');
});

redis.on('reconnecting', () => {
  log.info('redis reconnecting.');
});

redis.on('error', (err) => {
  log.error('redis failed: ', err);
});

module.exports = redis;
