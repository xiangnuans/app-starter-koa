'use strict';

const _ = require('lodash');

const defaultConfig = require('./config_default');

const { NODE_ENV } = process.env;
let config = defaultConfig;

try {
  if (NODE_ENV === 'production') {
    const envConfig = require('./config_prd');// eslint-disable-line
    config = _.merge(defaultConfig, envConfig);
  }
} catch (e) {
  if (!config.debug) {
    console.log('[ERROR] loading config/config.js failed:', e.message); // eslint-disable-line
  } else if (e.code !== 'MODULE_NOT_FOUND') {
    console.log('[ERROR] loading config/config.js failed:', e.message); // eslint-disable-line
  }
}

module.exports = config;
