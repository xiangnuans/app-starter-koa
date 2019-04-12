'use strict';

const Joi = require('joi');
const { ctrlExample } = require('../controller');

ctrlExample.createCluster.paramSchema = {
  state: {
    userId: Joi.number().required(),
  },
  body: {
    name: Joi.string().required(),
  },
};

ctrlExample.publishMsg.paramSchema = {
  state: {
    userId: Joi.number().required(),
  },
};
