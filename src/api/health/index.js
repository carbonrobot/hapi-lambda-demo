const controller = require('./controller');

/**
 * Route configuration
 */
module.exports = [
  {
    method: 'GET',
    path: '/health/check',
    handler: controller.getCheck,
  },
  {
    method: 'GET',
    path: '/health/status',
    handler: controller.getStatus,
  },
  {
    method: 'GET',
    path: '/health/201',
    handler: controller.getStatus201,
  }
];