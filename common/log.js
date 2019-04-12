'use strict';

const fs = require('fs-extra');

const path = require('path');
const { createLogger, transports, format } = require('winston');

const { combine, timestamp, printf } = format;
const config = require('../config');

fs.ensureDirSync(config.logger.dirname);

const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(config.logger.dirname, 'combined.log'),
      maxsize: 10485760,
      level: 'info',
    }),
    new transports.File({
      filename: path.join(config.logger.dirname, 'error.log'),
      maxsize: 10485760,
      level: 'error',
    }),
  ],
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss,SSS',
    }),
    printf((info) => {
      const splatInfo = info[Symbol.for('splat')];
      if (!splatInfo) {
        return `${info.timestamp} [${info.level}] ${info.message}`;
      }
      return `${info.timestamp} [${info.level}] ${info.message} ${splatInfo.join(' ')}`;
    }),
  ),
});

module.exports = logger;
