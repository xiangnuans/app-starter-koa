'use strict';

const _ = require('lodash');
const cluster = require('./cluster');

exports.build = () => _.merge({}, cluster);
