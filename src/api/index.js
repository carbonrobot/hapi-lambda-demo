'use strict';

const health = require('./health');

/**
 * Register the API module with the server
 */
const register = server => {
  server.route(health);
};

module.exports = {
  plugin: {
    name: 'api',
    version: '1.0.0',
    register
  }
};