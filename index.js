const api = require('./src');

// OR use require('hapi-lambda');
const { transformRequest, transformResponse } = require('./src/serverless');

// cache the server for better peformance
let server;

/**
 * This module maps the Lambda proxy requests to the Hapijs router
 */
exports.handler = async event => {
  if (!server) {
    server = await api.init();
  }

  const request = transformRequest(event);
  const response = await server.inject(request);

  return transformResponse(response);
};